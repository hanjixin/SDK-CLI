#! /usr/bin/env node
let commander = require('commander').program;
let shelljs = require('shelljs');
let path = require('path');
let fs = require('fs');
let chalk = require('chalk');
commander.version('1.0.0');

const projectTemplate = path.resolve(__dirname, '../packages/project-template/');
commander
  .command('new  <name>')
  .description('创建你的项目')
  .action((name, destination) => {
    const resultPath = path.resolve(process.cwd(), name);
    const isExist = fs.existsSync(resultPath);
    if (isExist) {
      console.error(
        chalk.bgRed(`文件夹已存在换个名字试试吧`),
      );
    } else {
      shelljs.cp('-rf', projectTemplate, name);
      shelljs.cd(resultPath);
      shelljs.rm('-rf', '.git');
      console.log(
        chalk.green(`
      创建 ${name} 完成
      run cd ${name} && npm install
    `),
      );
    }
  });
commander.parse(process.argv);
