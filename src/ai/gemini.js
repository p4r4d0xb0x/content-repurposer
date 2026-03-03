const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Model selection (2026 models)
const MODELS = {
  'gemini-flash': 'gemini-2.5-flash',  // Fast, efficient (standard tier)
  'gemini-pro': 'gemini-2.5-pro'       // Premium quality
};

/**
 * Generate multiple formats from input content
 */
async function generateFormats(content, formats, options = {}) {
  const { tone = 'professional', model = 'gemini-flash', qualityThreshold = 7 } = options;
  
  const modelName = MODELS[model] || MODELS['gemini-flash'];
  const geminiModel = genAI.getGenerativeModel({ model: modelName });
  
  const outputs = [];
  
  for (const format of formats) {
    console.log(`  → Generating ${format}...`);
    
    const prompt = buildPrompt(content, format, tone);
    const result = await generateWithRetry(geminiModel, prompt, qualityThreshold);
    
    outputs.push({
      format,
      content: result.text,
      quality: result.quality,
      metadata: {
        tone,
        model: modelName,
        attempts: result.attempts
      }
    });
  }
  
  return outputs;
}

/**
 * Generate with quality validation and retry
 */
async function generateWithRetry(model, prompt, qualityThreshold, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    
    // Simple quality scoring (can be improved)
    const quality = scoreOutput(text);
    
    if (quality >= qualityThreshold || attempt === maxAttempts) {
      return { text, quality, attempts: attempt };
    }
    
    console.log(`    Quality ${quality}/10, retrying (${attempt}/${maxAttempts})...`);
  }
}

/**
 * Build format-specific prompt
 */
function buildPrompt(content, format, tone) {
  const prompts = {
    twitter: buildTwitterPrompt(content, tone),
    linkedin: buildLinkedInPrompt(content, tone),
    newsletter: buildNewsletterPrompt(content, tone),
    tiktok: buildTikTokPrompt(content, tone),
    facebook: buildFacebookPrompt(content, tone)
  };
  
  return prompts[format] || prompts.twitter;
}

function buildTwitterPrompt(content, tone) {
  return `Transform this content into a Twitter thread (10-15 tweets).

CONTENT:
${content.substring(0, 3000)}

REQUIREMENTS:
- Tone: ${tone}
- Each tweet: <280 characters
- Start with a strong hook (tweet 1)
- Number tweets (1/, 2/, etc.)
- End with a call-to-action
- Use line breaks for readability
- Natural, conversational style
- NO emojis unless tone is casual/funny

OUTPUT FORMAT:
Just the tweets, one per line, numbered.`;
}

function buildLinkedInPrompt(content, tone) {
  return `Transform this content into a LinkedIn post (300-500 words).

CONTENT:
${content.substring(0, 3000)}

REQUIREMENTS:
- Tone: ${tone}
- Professional and engaging
- Start with a hook (first line matters)
- 3-5 short paragraphs
- Use line breaks between paragraphs
- End with a question or call-to-action
- Include 3-5 relevant hashtags at the end
- NO emojis unless tone is casual

OUTPUT FORMAT:
Just the post text, ready to copy-paste.`;
}

function buildNewsletterPrompt(content, tone) {
  return `Transform this content into a newsletter section (200-400 words).

CONTENT:
${content.substring(0, 3000)}

REQUIREMENTS:
- Tone: ${tone}
- Email-friendly format
- Clear subheadings (use **bold**)
- Scannable (short paragraphs, bullet points)
- Engaging opening line
- Clear takeaway or CTA
- NO HTML tags

OUTPUT FORMAT:
Plain text with **bold** for emphasis, ready for email.`;
}

function buildTikTokPrompt(content, tone) {
  return `Transform this content into a TikTok/Instagram Reels script (60-90 seconds).

CONTENT:
${content.substring(0, 3000)}

REQUIREMENTS:
- Tone: ${tone}
- Hook in first 3 seconds
- Visual cues in [brackets]
- Pacing notes (e.g., "PAUSE", "FAST")
- Simple language, spoken style
- End with strong CTA
- Format: timestamps + script

OUTPUT FORMAT:
0:00 - Hook line [visual cue]
0:05 - Main point 1
etc.`;
}

function buildFacebookPrompt(content, tone) {
  return `Transform this content into a Facebook post (150-300 words).

CONTENT:
${content.substring(0, 3000)}

REQUIREMENTS:
- Tone: ${tone}
- Casual and engaging
- Start with a relatable hook
- 2-4 short paragraphs
- Ask a question to drive engagement
- Can use emojis if tone is casual
- NO hashtags (Facebook doesn't use them like Twitter)

OUTPUT FORMAT:
Just the post text, ready to copy-paste.`;
}

/**
 * Simple quality scoring (can be improved with better heuristics)
 */
function scoreOutput(text) {
  let score = 5; // baseline
  
  // Check length (not too short, not too long)
  if (text.length >= 100 && text.length <= 5000) score += 1;
  
  // Check structure (has paragraphs/breaks)
  if (text.includes('\n\n') || text.includes('\n')) score += 1;
  
  // Check not repetitive (simple check)
  const words = text.toLowerCase().split(/\s+/);
  const uniqueWords = new Set(words);
  if (uniqueWords.size / words.length > 0.5) score += 1;
  
  // Check has punctuation (not just keywords)
  if (/[.!?]/.test(text)) score += 1;
  
  // Check not template-y (no obvious placeholders)
  if (!/\[.*\]|\{.*\}/.test(text)) score += 1;
  
  return Math.min(score, 10);
}

module.exports = { generateFormats };
