import axios from 'axios'
import { getToken } from '@/utils/auth'
import { message } from 'antd'
import { tansParams } from './tools'
import errorCode from './errorCode'

// 是否显示重新登录
export const isRelogin = { show: false }

const service = axios.create({
  baseURL: '/api',
  timeout: 10000
})
/**
 * @description: 请求拦截
 */
service.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (getToken() && !isToken) {
      config.headers.Authorization = 'Bearer ' + getToken() // 让每个请求携带自定义token 可以请根据实际情况自行修改
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = config.url + '?' + tansParams(config.params)
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
/**
 * @description: 响应拦截
 */
service.interceptors.response.use(
  res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode.default
    if (code === 401) {
      if (!isRelogin.show) {
        isRelogin.show = true
      }
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
    } else if (code === 500) {
      message.open({ content: msg, type: 'error' })
      return Promise.reject(new Error(msg))
    } else if (code === 601) {
      message.open({ content: msg, type: 'warning' })
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      return Promise.reject('error')
    }
    return Promise.resolve(res.data)
  },
  error => {
    let { msg } = error
    if (msg === 'Network Error') {
      msg = '后端接口连接异常'
    } else if (msg?.includes('timeout')) {
      msg = '系统接口请求超时'
    } else if (msg?.includes('Request failed with status code')) {
      msg = '系统接口' + msg?.substr(msg.length - 3) + '异常'
    }
    message.open({ content: msg, type: 'error', duration: 5 * 1000 })
    return Promise.reject(error)
  }
)

export default service
