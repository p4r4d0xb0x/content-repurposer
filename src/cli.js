#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { parseInput } = require('./parser');
const { generateFormats } = require('./ai/gemini');
const { writeOutputs } = require('./output');

const program = new Command();

program
  .name('repurpose')
  .description('Transform one piece of content into multiple high-quality formats')
  .version('1.0.0');

program
  .argument('<input>', 'Input file (Markdown, text, HTML)')
  .option('-f, --formats <formats...>', 'Output formats (twitter, linkedin, newsletter, tiktok, facebook, all)', ['all'])
  .option('-t, --tone <tone>', 'Tone (professional, casual, funny, educational)', 'professional')
  .option('-o, --output <dir>', 'Output directory', './repurposed')
  .option('--model <model>', 'AI model (gemini-flash, gemini-pro)', 'gemini-flash')
  .option('--quality <level>', 'Quality threshold (1-10)', '7')
  .action(async (inputFile, options) => {
    try {
      console.log(chalk.blue('🔄 Content Repurposer v1.0.0\n'));

      // Validate input file
      if (!fs.existsSync(inputFile)) {
        console.error(chalk.red(`❌ Error: File not found: ${inputFile}`));
        process.exit(1);
      }

      // Parse input
      console.log(chalk.gray(`📄 Reading: ${inputFile}`));
      const content = parseInput(inputFile);
      
      if (!content || content.length < 100) {
        console.error(chalk.red('❌ Error: Content too short (minimum 100 characters)'));
        process.exit(1);
      }

      console.log(chalk.green(`✅ Parsed: ${content.length} characters\n`));

      // Determine formats
      let formats = options.formats;
      if (formats.includes('all')) {
        formats = ['twitter', 'linkedin', 'newsletter', 'tiktok', 'facebook'];
      }

      console.log(chalk.blue(`🎯 Generating ${formats.length} formats: ${formats.join(', ')}`));
      console.log(chalk.gray(`   Tone: ${options.tone} | Quality: ${options.quality}/10 | Model: ${options.model}\n`));

      // Generate outputs
      const startTime = Date.now();
      const outputs = await generateFormats(content, formats, {
        tone: options.tone,
        model: options.model,
        qualityThreshold: parseInt(options.quality)
      });

      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(chalk.green(`\n✅ Generated ${outputs.length} formats in ${elapsed}s\n`));

      // Write outputs
      const outputDir = options.output;
      writeOutputs(outputs, outputDir);

      console.log(chalk.green(`\n🎉 Done! Outputs saved to: ${outputDir}/`));
      console.log(chalk.gray('\nFormat summary:'));
      outputs.forEach(output => {
        console.log(chalk.gray(`  • ${output.format}: ${output.content.length} chars (quality: ${output.quality}/10)`));
      });

    } catch (error) {
      console.error(chalk.red(`\n❌ Error: ${error.message}`));
      if (process.env.DEBUG) {
        console.error(error.stack);
      }
      process.exit(1);
    }
  });

program.parse();
