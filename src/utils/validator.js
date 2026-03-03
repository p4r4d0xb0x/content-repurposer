const SUPPORTED_FORMATS = ['twitter', 'linkedin', 'newsletter', 'tiktok', 'facebook', 'all'];
const SUPPORTED_TONES = ['professional', 'casual', 'funny', 'educational'];
const SUPPORTED_MODELS = ['gemini-flash', 'gemini-pro'];

/**
 * Validate CLI options before execution
 */
function validateOptions(formats, options) {
  const errors = [];

  // Validate formats
  for (const fmt of formats) {
    if (!SUPPORTED_FORMATS.includes(fmt)) {
      errors.push(`Unknown format: "${fmt}". Supported: ${SUPPORTED_FORMATS.join(', ')}`);
    }
  }

  // Validate tone
  if (options.tone && !SUPPORTED_TONES.includes(options.tone)) {
    errors.push(`Unknown tone: "${options.tone}". Supported: ${SUPPORTED_TONES.join(', ')}`);
  }

  // Validate model
  if (options.model && !SUPPORTED_MODELS.includes(options.model)) {
    errors.push(`Unknown model: "${options.model}". Supported: ${SUPPORTED_MODELS.join(', ')}`);
  }

  // Validate quality threshold
  const q = parseInt(options.quality, 10);
  if (isNaN(q) || q < 1 || q > 10) {
    errors.push(`Quality must be 1-10. Got: "${options.quality}"`);
  }

  return errors;
}

/**
 * Check if Gemini API key is set
 */
function validateApiKey() {
  if (!process.env.GEMINI_API_KEY) {
    return [
      'GEMINI_API_KEY is not set.',
      'Get a free key at: https://aistudio.google.com/',
      'Then run: export GEMINI_API_KEY=your_key_here'
    ];
  }
  return [];
}

module.exports = { validateOptions, validateApiKey, SUPPORTED_FORMATS, SUPPORTED_TONES };
