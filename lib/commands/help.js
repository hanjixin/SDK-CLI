
const fn = () => {
    let commander = require('commander').program
    commander.version('1.0.0')
    commander.command('serve').description('开启开发环境')
    commander.command('build').description('打包文件')
    commander.command('lint').description('修复并检查格式')
    commander.parse(process.argv);
}

module.exports = {
    name: 'help',
    fn
}