# Waitlist Worker

Cloudflare Worker for Content Repurposer waitlist email collection.

## Setup (10 minutes)

### 1. Create KV Namespace

```bash
# Install wrangler if needed
npm install -g wrangler

# Login
wrangler login

# Create KV namespace
wrangler kv:namespace create WAITLIST_KV
# → Outputs an ID. Copy it.

wrangler kv:namespace create WAITLIST_KV --preview
# → Outputs a preview ID. Copy it.
```

Update `wrangler.toml` with the IDs.

### 2. Deploy

```bash
cd waitlist-worker
wrangler deploy
```

### 3. Set Secrets

```bash
wrangler secret put NOTIFY_EMAIL
# → Enter: your-email@gmail.com

wrangler secret put ADMIN_SECRET
# → Enter: any-random-secret-string
```

### 4. Update Landing Page

The landing page already uses `https://content-repurposer-waitlist.qlgl.workers.dev`.

If your Worker URL is different, update this line in `landing/index.html`:
```javascript
const WAITLIST_API = 'https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev';
```

## API Endpoints

### POST /join
Add email to waitlist.

```bash
curl -X POST https://your-worker.workers.dev/join \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

Response:
```json
{
  "success": true,
  "message": "You're on the list! 🎉 We'll notify you on launch day (March 8th).",
  "position": 42
}
```

### GET /count
Get total waitlist count (public).

```bash
curl https://your-worker.workers.dev/count
```

Response: `{"count": 42}`

### GET /list (admin only)
Get all emails.

```bash
curl https://your-worker.workers.dev/list \
  -H "X-Admin-Secret: your-secret-string"
```

## Export Emails

```bash
# Export all emails as CSV
curl https://your-worker.workers.dev/list \
  -H "X-Admin-Secret: your-secret" | \
  jq -r '.emails[] | [.email, .timestamp] | @csv'
```
