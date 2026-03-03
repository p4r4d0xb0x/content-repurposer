/**
 * Content Repurposer Waitlist API
 * Cloudflare Worker — stores emails in KV, sends notification via email
 *
 * Setup:
 * 1. Create KV namespace "WAITLIST_KV" in Cloudflare dashboard
 * 2. Bind it in wrangler.toml as WAITLIST_KV
 * 3. Set secrets: NOTIFY_EMAIL (where to send notifications)
 * 4. Deploy: wrangler deploy
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    // POST /join — add email to waitlist
    if (request.method === 'POST' && url.pathname === '/join') {
      return handleJoin(request, env);
    }

    // GET /count — public count (for social proof)
    if (request.method === 'GET' && url.pathname === '/count') {
      return handleCount(env);
    }

    // GET /list — admin only (requires secret header)
    if (request.method === 'GET' && url.pathname === '/list') {
      return handleList(request, env);
    }

    return new Response('Not found', { status: 404, headers: CORS_HEADERS });
  },
};

async function handleJoin(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400);
  }

  const email = (body.email || '').trim().toLowerCase();

  if (!email || !email.includes('@') || !email.includes('.')) {
    return jsonResponse({ error: 'Invalid email address' }, 400);
  }

  // Check if already registered
  const existing = await env.WAITLIST_KV.get(`email:${email}`);
  if (existing) {
    return jsonResponse({
      success: true,
      message: "You're already on the list! 🎉",
      already_registered: true,
    });
  }

  // Store email with timestamp
  const timestamp = new Date().toISOString();
  await env.WAITLIST_KV.put(`email:${email}`, timestamp);

  // Increment counter
  const currentCount = parseInt(await env.WAITLIST_KV.get('count') || '0', 10);
  await env.WAITLIST_KV.put('count', String(currentCount + 1));

  // Add to ordered list (for easy export)
  const listKey = `list:${String(currentCount + 1).padStart(6, '0')}`;
  await env.WAITLIST_KV.put(listKey, JSON.stringify({ email, timestamp }));

  // Optional: send notification email (via Mailchannels, if configured)
  if (env.NOTIFY_EMAIL) {
    try {
      await sendNotification(email, currentCount + 1, env);
    } catch (e) {
      // Don't fail if notification fails
      console.error('Notification failed:', e);
    }
  }

  return jsonResponse({
    success: true,
    message: "You're on the list! 🎉 We'll notify you on launch day (March 8th).",
    position: currentCount + 1,
  });
}

async function handleCount(env) {
  const count = parseInt(await env.WAITLIST_KV.get('count') || '0', 10);
  return jsonResponse({ count });
}

async function handleList(request, env) {
  // Simple auth — check for secret header
  const authHeader = request.headers.get('X-Admin-Secret');
  if (!env.ADMIN_SECRET || authHeader !== env.ADMIN_SECRET) {
    return jsonResponse({ error: 'Unauthorized' }, 401);
  }

  const count = parseInt(await env.WAITLIST_KV.get('count') || '0', 10);
  const emails = [];

  // Fetch all entries (up to 1000)
  for (let i = 1; i <= Math.min(count, 1000); i++) {
    const key = `list:${String(i).padStart(6, '0')}`;
    const val = await env.WAITLIST_KV.get(key);
    if (val) {
      try {
        emails.push(JSON.parse(val));
      } catch {
        emails.push({ raw: val });
      }
    }
  }

  return jsonResponse({ count, emails });
}

/**
 * Send a simple notification via Mailchannels (free on Cloudflare Workers)
 * See: https://blog.cloudflare.com/sending-email-from-workers-with-mailchannels
 */
async function sendNotification(newEmail, position, env) {
  const body = {
    personalizations: [{
      to: [{ email: env.NOTIFY_EMAIL }],
    }],
    from: { email: 'waitlist@content-repurposer.dev', name: 'Content Repurposer' },
    subject: `🎉 New waitlist signup #${position}: ${newEmail}`,
    content: [{
      type: 'text/plain',
      value: `New waitlist signup!\n\nEmail: ${newEmail}\nPosition: #${position}\nTime: ${new Date().toISOString()}\n\nTotal signups: ${position}`,
    }],
  };

  await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}
