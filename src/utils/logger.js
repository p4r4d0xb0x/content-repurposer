const chalk = require('chalk');

const logger = {
  info: (msg) => console.log(chalk.blue(`ℹ️  ${msg}`)),
  success: (msg) => console.log(chalk.green(`✅ ${msg}`)),
  warn: (msg) => console.log(chalk.yellow(`⚠️  ${msg}`)),
  error: (msg) => console.error(chalk.red(`❌ ${msg}`)),
  debug: (msg) => {
    if (process.env.DEBUG) console.log(chalk.gray(`🔍 ${msg}`));
  }
};

module.exports = logger;
