'use strict'
//  chalk 粉笔 这个是个让控制台字体颜色高亮的模块 1 字体样式(加粗、隐藏等) 2 字体颜色  3 背景颜色  https://github.com/chalk/chalk
const chalk = require('chalk')
// 专门分析Semantic /sɪˈmæntɪk/ Version（语义化版本）的工具 “semver”其实就是这两个单词的缩写  https://github.com/npm/node-semver
// 主要用来格式化版本   semver.valid('1.2.3') // '1.2.3'  semver.valid('a.b.c') // null  semver.valid(semver.coerce('v2')) // '2.0.0'
// valid 有效的
const semver = require('semver')
// package.json 处理安装依赖包的
const packageConfig = require('../package.json')
// 使用命令行工具
const shell = require('shelljs')

function exec (cmd) {
  // https://segmentfault.com/a/1190000016169207
  return require('child_process').execSync(cmd).toString().trim()
}

// 版本要求
const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

// 向外暴露  在模块内部 exports 和 module.exports 指向的是同一个对象 相当于 var exports = module.exports
module.exports = function () {
  // 检测版本信息是否需要更新
  const warnings = []
  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
