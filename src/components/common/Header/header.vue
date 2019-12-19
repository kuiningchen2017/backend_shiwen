<template>
    <div class="header">
        <div class="title">
            师问号后台管理系统
        </div>
        <div class="user_info">
            <!-- trigger属性设置为click即可改变我click激活 -->
            <el-dropdown  trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" :src=avatar>
                    {{username}}
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <div v-for="(item, index) in SW_Numbers" :key="index">
                        <el-dropdown-item :command="item.command ? item.command : index">{{item.username}}</el-dropdown-item>
                    </div>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import avatar from '../../../assets/login-background.jpg'
export default {
  // vue.esm.js [Vue warn]: Do not use built-in or reserved HTML elements as component id: header
  // name: 'header',
  data () {
    return {
      username: '师问号姓名',
      avatar: avatar,
      SW_Numbers: [
        {username: '师问号一', avatar: avatar, command: '师问号一'},
        {username: '师问号二', avatar: avatar, command: '师问号二'},
        {username: '师问号三', avatar: avatar, command: '师问号三'},
        {username: '退出登录', avatar: avatar, command: 'loginout'}
      ]
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('切换到师问号：' + command)
      // 修改header头部的切换后的状态
      this.username = command
      if (command === 'loginout') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        display: flex;
        box-sizing: border-box;
        padding: 0 50px;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        color: #fff;
        /*background-color: #333333; 在static文件夹下已经定义了全局部分样式*/
    }
    .header .title {
        font-size: 22px;
        color: #fff;
    }
    .header .user_info {
        cursor: pointer;
    }
    .header .user_info .user-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>
