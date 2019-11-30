# backend_shiwen

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# author
dependencies 生成环境
devDependencies 开发环境
vue-cli生成的项目帮我们做了哪些东西？
· 1, ES6代码转换成ES5
· 2, scss/sass/stylus 转成 css
· 3, .vue文件转换成js文件
· 4, 自动添加css各浏览器厂商的前缀
· 4, 代码热更新
· 5, 区分开发环境和生产环境打包
...

配置 webpack 打包 图片、媒体、字体等文件
url-loader 功能与 file-loader 类似，如果文件小于限制的大小。则会返回 base64 编码，否则使用 file-loader 将文件复制到输出的目录中

vue-loader 用于解析.vue文件

webpack.dev.js 开发环境使用
    1 不需要压缩代码
    2 需要热更新
    3 css不需要提取到css文件
webpack.prod.js 生产环境使用
    1 需要压缩代码
    2 不需要热更新
    3 css需要提取到css文件
    4 构建前清除上一次构建的内容
webpack.conf.js 公用配置

git add命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行git commit就可以一次性把暂存区的所有修改提交到分支。


场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。


要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；

关联后，使用命令git push -u origin master第一次推送master分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

git checkout -b <name>
git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
git branch dev
git checkout dev

git branch命令查看当前分支：
*dev
master

我们把dev分支的工作成果合并到master分支上
git merge命令用于合并指定分支到当前分支
git merge dev

删除分支：git branch -d <name>

用来测试下分支~~~