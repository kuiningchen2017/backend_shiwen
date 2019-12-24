/**
 * Created by WuHe on 2019/12/23.
 */
import { Loading } from 'element-ui'

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

export default {showLoading, hideloading}
