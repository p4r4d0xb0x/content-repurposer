const fs = require('fs');
const path = require('path');

/**
 * Write outputs to files
 */
function writeOutputs(outputs, outputDir) {
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write each format to a file
  for (const output of outputs) {
    const filename = `${output.format}.txt`;
    const filepath = path.join(outputDir, filename);
    
    // Build file content with metadata
    const fileContent = buildFileContent(output);
    
    fs.writeFileSync(filepath, fileContent, 'utf-8');
  }
}

function buildFileContent(output) {
  const lines = [];
  
  // Metadata header
  lines.push('# Content Repurposer Output');
  lines.push(`Format: ${output.format}`);
  lines.push(`Quality Score: ${output.quality}/10`);
  lines.push(`Tone: ${output.metadata.tone}`);
  lines.push(`Model: ${output.metadata.model}`);
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  
  // Content
  lines.push(output.content);
  
  return lines.join('\n');
}

module.exports = { writeOutputs };
