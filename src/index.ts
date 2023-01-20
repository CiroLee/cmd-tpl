#!/usr/bin/env node

// 命令行彩色输出
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import pkg from '../package.json';
// 命令行loading
// import ora from "ora";
// const spinner = ora({ spinner: "line" });

// 允许自定义version和help
const argv = yargs(hideBin(process.argv)).help(false).version(false);
const parsedArgv = argv.parseSync();

// 自定义help信息
function showHelper() {
  const helps = `Usage

-v,--version        output the version number
-h,--help           show help info
  `;
  console.log(helps);
}

(function () {
  const { v, version, h, help } = parsedArgv;
  if (v || version) {
    console.log(chalk.green(pkg.version));
    process.exit(0);
  }
  if (h || help) {
    showHelper();
    process.exit(0);
  }

  // others
  console.log(parsedArgv);
})();
