# Building a CLI Tool in Node.js: 5 Lessons Learned

I just shipped my first CLI tool in Node.js. Here's what I wish I knew before starting.

## 1. Commander.js is Your Friend

Skip writing argument parsers by hand. Commander.js gives you clean CLI UX for free:

```javascript
const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .argument('<input>', 'Input file')
  .option('-o, --output <dir>', 'Output directory')
  .action((input, options) => {
    console.log(`Processing ${input} → ${options.output}`);
  });

program.parse();
```

## 2. Make It Pretty with Chalk

Nobody wants to stare at white text. Add colors:

```javascript
const chalk = require('chalk');
console.log(chalk.green('✓ Success!'));
console.log(chalk.red('✗ Error!'));
```

## 3. Handle Errors Gracefully

Don't let your CLI crash with ugly stack traces. Catch errors and show helpful messages:

```javascript
try {
  const data = fs.readFileSync(file);
} catch (err) {
  console.error(chalk.red(`Error reading file: ${err.message}`));
  process.exit(1);
}
```

## 4. Add Progress Indicators

For long-running tasks, show progress. Use `ora` for spinners:

```javascript
const ora = require('ora');
const spinner = ora('Processing...').start();

// Do work
await longTask();

spinner.succeed('Done!');
```

## 5. Test on Real Data

Don't just test with toy examples. Use actual data that matches your target use case. Edge cases will surprise you.

---

**Next steps:** Ship it, get feedback, iterate. Perfect is the enemy of shipped.
