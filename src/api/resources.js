// import Vue from 'vue'
import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../store/types.js'
import router from '../router'
import store from '../store'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://test-api.mei57.com/api/doctor/'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (Cookies.get('access_token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      // config.headers.Authorization = `token ${Cookies.get('access_token')}`
      config.headers.Authorization = 'Bearer ' + Cookies.get('access_token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit(types.ACCOUNT_LOGOUT)
          router.replace({
            path: 'signin',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  }
)
export default axios
/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
         // reject(err)
        console.log(err)
      })
  })
}
/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}
/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}
/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
  })
}