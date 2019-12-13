<template>
    <div class="sidebar">
        <el-col :span="24">
            <el-menu :default-active="onRoutes"
                     unique-opened
                     class="el-menu-vertical-demo"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     router
                     @open="handleOpen"
                     @close="handleClose">
                <!-- template的作业是模板占位符，可帮助我们包裹元素，并且在循环过程当中，template不会被渲染到页面是， 若我们不想额外增加一个div，就应该使用template -->
                <template v-for="(item, index) in items">
                    <template v-if="item.subs">
                        <el-submenu :key="index" :index="item.index">
                            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                            <el-menu-item v-for="(subItem, index) in item.subs" :key="index" :index="subItem.index">{{ subItem.title }}</el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :key="index" :index="item.index"><i :class="item.icon"></i>{{ item.title }}</el-menu-item>
                    </template>
                </template>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      items: [
        {
          icon: 'el-icon-s-custom',
          index: '2',
          title: '关于师问号',
          subs: [
            {
              index: 'audit',
              title: '审核师问号'
            }
          ]
        },
        {
          icon: 'el-icon-upload2',
          index: 'else',
          title: '其他'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key)
      console.log(keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key)
      console.log(keyPath)
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #324157;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
