/**
 * Created by Echonessy on 2019/4/23.
 */
import axios from 'axios'

// 创建axios实例
const request = axios.create({
  timeout: 5000 // 请求超时时间
})

// request拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

export default request
