import { resolvePath } from './path'
// SDK名称
// console.log(process.env.SDK_CLI_SERVICE, 'SDK_CLI_SERVICE')
// process.exit(1)
const projectOptions = process.env.SDK_CLI_SERVICE ? JSON.parse(process.env.SDK_CLI_SERVICE).projectOptions : {}
const NAME_SPACE = projectOptions.name || 'HKYIM'
const OUTPUT_DIR = projectOptions.outputDir || 'dist'
const PORT = 3006
const SRC_DIR = resolvePath('src')
const BUILD_DIR = resolvePath('build')

const THIRD_PARTY = ['lib-generate-test-usersig.js']

// SDK运行选项
const SDKOptions = {
  container: '#container',
  userID: '',
  userSig: '',
  roomID: '',
  role: 1, // 1: 教师，2：助教，3：班主任，4：学生
}
// SDK运行代码
const SDK_EXE = `${NAME_SPACE}.init(${JSON.stringify(SDKOptions)})`

export { PORT, SRC_DIR, BUILD_DIR, SDK_EXE, NAME_SPACE, THIRD_PARTY, OUTPUT_DIR }
