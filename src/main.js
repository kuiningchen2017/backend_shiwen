import Vue from 'vue'
import App from './App'
import router from './router'
// 引入ElementUi 组件库
import ElementUI from 'element-ui'
// element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
