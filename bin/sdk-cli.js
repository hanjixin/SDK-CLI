#! /usr/bin/env node 
let commander = require('commander').program
let shell = require('shelljs')
let path = require('path')
console.log(path.resolve(__dirname, '../config'))
const rootDir = path.resolve(__dirname, '../')
console.log(process.cwd(), rootDir)
commander.version('1.0.0')
commander.command('run <env>').description('创建你的项目').action((env, destination) => {
  console.log(`new ${env}`);
  if(env === 'dev') {
    var aa = shell.exec(`npx cross-env NODE_ENV=development webpack-dev-server --config=${rootDir}/config/webpack.config.babel.js --progress`, {
      slient: true
    })
    console.log(aa.stdout)
  }
  if(env === 'build') {
    shell.exec('npx cross-env NODE_ENV=development webpack-dev-server --config=config/webpack.config.babel.js --progress', {
      slient: true
    })
  }
})
commander.parse(process.argv);