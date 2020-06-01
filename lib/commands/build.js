const shell = require('shelljs')
const webpack = require('webpack')
const webPackDevServer = require('webpack-dev-server')
// import webPackCconfi from '../../config/webpack.config.babel.js'
const fn = (args, rawArgv, context) => {
//   const compiler = webpack(webPackCconfig)
//   webPackDevServer(compiler)
    shell.cd(process.env.rootDir)
    var aa = shell.exec(
      `npx babel-node config/build.js --mode=production`,
      {
        slient: false,
        // stdio: 'inherit',
      }
    )
    console.log('build is run')

}


module.exports = {
  fn,
  name: 'build',
}
