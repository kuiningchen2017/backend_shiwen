/**
 * Created by kuiningchen on 2019/12/19.
 */
import axios from 'axios'
// import Router from 'vue-router'
// import { Loading } from 'element-ui'
import { showLoading, hideloading } from './loading'

/*
let loadingCount = 0
let loading
let startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
let endLoading = () => {
  loading.close()
}
let showLoading = () => {
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount += 1
}
let hideloading = () => {
  if (loadingCount <= 0) {
    return
  }
  loadingCount -= 1
  if (loadingCount === 0) {
    endLoading()
  }
}
*/

// let router = new Router()
// 使用自定义配置新建一个axios的实例
const Axios = axios.create({
  // baseURL: config.apiBaseUrl,
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'http://www.shiwen123.com/admin/',
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 10000,
  responseType: 'json',
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'content-type': 'application/json'
  }
})
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  showLoading()
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('请求错误:')
  console.log(error)
  return Promise.reject(error)
})
// 添加响应拦截器
Axios.interceptors.response.use(
  (response) => {
    // console.log(response)
    const requestUrl = response.request.responseURL.match(/(\/{1}\w+\/\w+)+/)[0]
    console.log(`————————————接口：${requestUrl} ，正确返回————————————`)
    hideloading()
    return response
  }, (error) => {
    hideloading()
    // router.push('test');
    const errRes = error.response
    const {status, request} = errRes
    const requestUrl = request.responseURL.match(/(\/{1}\w+\/\w+)+/)[0]
    const errorInfo = {requestUrl, message: '系统异常', status}
    console.log(`————————————接口： ${requestUrl} ，请求错误————————————`)
    console.dir(error)
    console.table([errorInfo])
    /*
    Toast({
      message: `${errorInfo.message}`,
      duration: 2000
    })
    */
    return Promise.reject(error)
  }
)
export default Axios
