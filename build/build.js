'use strict'
// 首先检查node和npm的版本
require('./check-versions')()

// process 对象是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()
process.env.NODE_ENV = 'production'

// 应该是实现node.js 命令行环境的 loading效果， 和显示各种状态的图标等
const ora = require('ora')
// 直接删除node_modules整个文件夹
const rm = require('rimraf')
// path 模块处理文件路径的小工具  默认操作会根据 Node.js 应用程序运行的操作系统的不同而变化
const path = require('path')
//  chalk 粉笔 这个是个让控制台字体颜色高亮的模块
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
