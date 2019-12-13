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

https://lin-xin.gitee.io/example/work/#/login


dependencies 生成环境   dependencies 依赖性

devDependencies 开发环境

vue-cli 是 vue官方提供的构建工具（脚手架） 大大降低了我们自己用webpack配置项目的难度

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

webpack.dev.js 开发环境使用  development 开发

    1 不需要压缩代码

    2 需要热更新

    3 css不需要提取到css文件

webpack.prod.js 生产环境使用   production 生产

    1 需要压缩代码

    2 不需要热更新

    3 css需要提取到css文件

    4 构建前清除上一次构建的内容



webpack.conf.js 公用配置

项目结构：

    build文件夹  用来存放项目构建脚本

        build.js 命令npm run build的入口配置文件，主要用于生产环境。

    config文件夹  存放项目的一些基本配置信息，最常用的就是修改端口号。

    node_modules 这个目录存放的是项目的所有依赖，即 npm install 命令下载下来的文件

    src 这个目录下存放项目的源码，即开发者写的代码放在这里

        assets 一般存放项目ui设计图

        components 目录用来存放组件（一些可复用，非独立的页面），当然开发者也可以在 components 中直接创建完整页面。

        推荐在 components 中存放组件，另外单独新建一个 page 文件夹，专门用来放完整页面。

        App.vue 是一个Vue组件，也是项目的第一个Vue组件

            有三部分： 1， 页面模板（template） 2， 页面脚本（script） 3，页面样式（style）

            页面模板中有一个router-view 这个指展示路由页面的位置，可以理解为一个占位符，这个占位符展示的内容将根据URL地址来决定

                具体展示内容，要参考路由表，即router/index.js文件

            页面脚本主要是实现当前页面数据初始化、事件处理等等操作。

        main.js相当于Java中的main方法，是整个项目的入口js

            在main.js中首先导入Vue对象

            导入第一个Vue组件App.vue

            导入router

            所有东西都导入成功后，创建一个Vue对象。 设置Vue处理的节点'#app'。

            Vue配置项里 声明components导入App这个组件。

                       template中定义了页面模板，即将App组件中的内容渲染到'#app'这个div中。

    static 用来存放静态资源

    index.html 则是项目的首页，入口页，也是整个项目唯一的HTML页面

    package.json 中定义了项目的所有依赖，包括开发时依赖和发布时依赖



git add命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行git commit就可以一次性把暂存区的所有修改提交到分支。

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。


要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；  remote遥远的  origin起源

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

    git merge 命令用于合并指定分支到当前分支

    git merge dev

删除分支：git branch -d <name>

用来测试下分支~~~

我在我自己的分支kuiningchen上修改了内容~~~


fork

当选择 fork，相当于你自己有了一份原项目的拷贝，当然这个拷贝只是针对当时的项目文件，如果后续原项目文件发生改变，你必须通过其他的方式去同步。

一般来说，我们不需要使用 fork 这个功能，除非有一些项目，可能存在 bug 或者可以继续优化的地方，你想帮助原项目作者去完善这个项目或者单纯的想在原来项目基础上己维护一个属于自己项目（比如我 fork 的 AndroidWeekly 客户端，那么你可以 fork 一份项目下来，然后自己对这个项目进行修改完善，当你觉得项目没问题了，你就可以尝试发起 pull request 给原项目作者了。

然后就静静等待他的 merge 邮件通知了。

watch

watch 翻译过来可以称之为观察，点击 watch 可以看到如下的列表。

对于别人的项目，默认自己都处于 Not watching 的状态，当你选择 Watching，表示你以后会关注这个项目的所有动态，这个项目以后只要发生变动，如被别人提交了 pull request、被别人发起了issue等等情况，你都会在自己的个人通知中心，收到一条通知消息，如果你设置了个人邮箱，那么你的邮箱也可能收到相应的邮件。


Vue:
    一套用于构建用户界面的渐进式框架 自底向上逐层应用 vue核心库只关注图层

    对项目具有较小的侵入性，比如对我们使用Jquery开发的后台管理项目，可以部分组件使用vue来构建用户界面，对整体项目并没有很大的影响。也可以全部使用vue框架构建整个项目。

    灵活性：比如我们可以在项目中只使用vue.js来做视图。部分组件使用vue.js来写，其他组件不变。这就是vue的灵活性看，也是vue所说的渐进式框架。


Vue特点：

    我们使用jQuery 和 vue 分别操作按钮的加减 和 加减后的数字展示。

        jQuery要考虑的有两大部分： 一，获取按钮DOM元素 绑定事件 二， 修改完数据后（数字的增减）要映射页面上

            jQuery是面向DOM的编程思想

        Vue则不需要考虑数字改变后是如何映射到页面中。vue让我们关注的点是数据如何变化。 数据驱动视图。

            Vue则是面向数据的编程思想


Vue是如何实现数据驱动的呢？

使用MVVM的设计模式（设计架构）

    Model （业务数据相关，从后台获取的列表数据，纯JS对象） model模型  module模块

    View  （业务展示相关，html/css）

    ViewModel （vue实例对象控制）
        View --> DOM Listeners --> Model
        Model  --> Data Bindings --> View


文本节点 {{}}  v-text v-html

使用v-html指令防止xss攻击

    var vm = new Vue({
        el: '#app',
        data: {
            // 没有xxx这个图片所在地， 就会被img的onerror事件捕捉 执行脚本代码
            text: '<img src="xxx" onerror="alert('xss攻击')">',
            protocol: 'http:',
            host: 'www.qq.com',
            location: {
                protocol: 'http:',
                host: 'www.qq.com'
            },
        },
        methods: {
            m_getUrl () {
                return this.protocol + '//' + this.host;
            }
        },
        // 依赖条件（protocol 和 host）不变的前提下 计算属性中的方法只会执行一次，全部采用第一次调用的计算结果
        // 计算属性会缓存上一次计算的结果
        // Vue建议我们computed计算属性处理同步的计算方法  异步的操作交给侦听器完成
        computed: {
            c_getUrl () {
                return this.protocol + '//' + this.host;
            }

            c_getUrl: {
                get () {
                   return this.protocol + '//' + this.host;
                },
                set (val) {
                    // 在template里调用 c_getUrl('https://www.qq.com')
                    var tmp = val.split('//');
                    if (tmp.length > 1) {
                        this.protocol = tmp[0];
                        this.host = tmp[1];
                    }
                }
            },

            // watch侦听器初始化（也就是页面一加载）的时候并不会执行 想要初始化就执行则需要immediate配置项
            // 相比较来说computed计算属性则初始化就会执行 这是它俩之间的差异
            watch: {
                // 监听protocol的改变 页面上来没有url地址 需要等到改变protocol的值才会显示到页面中
                protocol (newVal, oldVal) {
                    this.url = newVal + '//' + this.host;
                }
                // 另外一种方式 页面一加载就有默认url地址
                protocol: {
                    immediate: true,
                    handler (newVal, oldVal) {
                         this.url = newVal + '//' + this.host;
                    }
                }

                /*
                    如果watch的是一个对象 location: { protocol:'http', host:'www.qq.com' }
                    那么我们监视对象location，当location对象下的属性值发生改变时，watch并不能监听到
                    因为根据js对象基础知识我们知道 js对象是引用数据类型
                    对象名是一个类似于指针的存在 它是存储在内存结构的栈内存 而对象的值是存储在堆内存 指针指向存储的地址
                    改变了对象的值，但是并没有改变对象指针，所有watch不能监听到，想要监听到需要配置deep为true。
                */
            }
        }
        var unwatch = vm.$watch('location', function(newVal, oldVal){
            this.url = newVal + '//' + this.host;
        }, {
            deep: true,
            immediate: true,
        });
        unwatch(); // 调用之后则不再监听location的变化
    })

属性节点 v-bind： 属性不可以使用{{}}的形式  分清楚字面量（不使用v-bind指令）和 动态表达式（使用v-bind指令）


双大括号{{}}模板内的表达式非常便利，但不适合太多的运算  {{ message.split('').reverse().join('') }} 这种方法Vue不建议

Vue建议对于任何复杂的逻辑计算，使用计算属性computed

    computed: {
        reverseMessage () {
            return message.split('').reverse().join('')
        }
    }

在template里直接 {{ reverseMessage }}

也可以将其抽离出来，定义一个 转换翻转字符串方法（函数） 放在 methods 中 然后在表达式中调用达到同样的效果 ==> {{ reverseMessage[reverseMessage()] }}


computed VS methods

相同点：

    都可以实现复杂的逻辑计算

不同点：

    computed 是基于依赖的改变执行计算属性的方法 会缓存计算后的结果

    methods 是每次调用总会执行一次方法

    这样会增加无谓的开销


computed VS watch

场景 fullName firstName lastName

    computed: { fullName () { return this.firstName + '.' + this.lastName } }


    watch: {
         // 需要监听firstName 和 lastName这两个数据的改变
         firstName (newVal, oldVal) {
            this.fullName = newVal + '.' + this.lastName;
         },
         lastName (newVal, oldVal) {
            this.fullName = this.firstName + '.' + newVal;
         }
    }


相同点：

    都可以监听数据 computed的getter和setter

不同点：

    watch 监听数据 页面加载初始化的时候默认不会监听 需要配置immediate为true  immediate立即的

    computed 则默认就会执行一次getter

    watch 更适合需要在数据变化时执行异步操作的时候使用。