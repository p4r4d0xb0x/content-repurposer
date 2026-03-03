const fs = require('fs');
const path = require('path');

/**
 * Parse input file and extract plain text content
 * Supports: Markdown, HTML, plain text
 */
function parseInput(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case '.md':
    case '.markdown':
      return parseMarkdown(content);
    
    case '.html':
    case '.htm':
      return parseHTML(content);
    
    case '.txt':
    default:
      return content.trim();
  }
}

/**
 * Strip Markdown syntax, keep plain text
 */
function parseMarkdown(content) {
  let text = content;
  
  // Remove code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/`[^`]+`/g, '');
  
  // Remove links but keep text: [text](url) → text
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  
  // Remove images: ![alt](url) → alt
  text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1');
  
  // Remove headings markers: ## Heading → Heading
  text = text.replace(/^#{1,6}\s+/gm, '');
  
  // Remove bold/italic: **text** or *text* → text
  text = text.replace(/\*\*([^\*]+)\*\*/g, '$1');
  text = text.replace(/\*([^\*]+)\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/_([^_]+)_/g, '$1');
  
  // Remove lists markers: - item → item
  text = text.replace(/^[\-\*\+]\s+/gm, '');
  
  // Remove blockquote: > text → text
  text = text.replace(/^>\s+/gm, '');
  
  // Clean up extra whitespace
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();
  
  return text;
}

/**
 * Strip HTML tags, keep plain text
 */
function parseHTML(content) {
  let text = content;
  
  // Remove script and style tags completely
  text = text.replace(/<script[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[\s\S]*?<\/style>/gi, '');
  
  // Remove all HTML tags
  text = text.replace(/<[^>]+>/g, ' ');
  
  // Decode common HTML entities
  text = text.replace(/&nbsp;/g, ' ');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  
  // Clean up whitespace
  text = text.replace(/\s+/g, ' ');
  text = text.trim();
  
  return text;
}

module.exports = { parseInput };
