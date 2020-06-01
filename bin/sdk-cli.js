#! /usr/bin/env node 
let commander = require('commander').program
let shell = require('shelljs')
let path = require('path')
// let env = require('dotenv').config()
// console.log(env, )
console.log(process.argv)
console.log(path.resolve(__dirname, '../config'))
const rootDir = path.resolve(__dirname, '../')
console.log(process.cwd(), rootDir)
process.env.appDir = process.cwd()

process.env.rootDir = path.resolve(__dirname, '../')
// commander.version('1.0.0')
// commander.command('server').description('创建你的项目').action((env, destination) => {
//   console.log(`new ${env}`);
//   if(env === 'dev') {
//     shell.cd(rootDir)
//     var aa = shell.exec(`npx cross-env NODE_ENV=development webpack-dev-server --config=config/webpack.config.babel.js --progress`, {
//       slient: true
//     })
//     console.log(aa.stdout)
//   }
// })

// commander.command('build').description('打包你的项目').action((env, destination) => {
//   console.log(`new ${env}`);
//   if(env === 'dev') {
//     shell.cd(rootDir)
//     var aa = shell.exec(`npx cross-env NODE_ENV=development webpack-dev-server --config=config/webpack.config.babel.js --progress`, {
//       slient: true
//     })
//     console.log(aa.stdout)
//   }
//   if(env === 'build') {
//     shell.exec('npx cross-env NODE_ENV=development webpack-dev-server --config=config/webpack.config.babel.js --progress', {
//       slient: true
//     })
//   }
// })
// commander.parse(process.argv);



// 重构
const Service = require('../lib/Service')
const service = new Service(process.env.SKD_CLI_CONTEXT || process.cwd())
const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv, {
  boolean: [
    // build
    'modern',
    'report',
    'report-json',
    'watch',
    // serve
    'open',
    'copy',
    'https',
    // inspect
    'verbose'
  ]
})
const command = args._[0]

service.run(command, args, rawArgv).catch(err => {
  console.error(err)
  process.exit(1)
})