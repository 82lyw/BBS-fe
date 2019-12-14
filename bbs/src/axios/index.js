'use strict'

import Vue from 'vue'
import axios from 'axios'
import router from './../router'

axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Authorization'] = JSON.parse(
//   localStorage.getItem('token')
// )

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'

let config = {
  // baseURL: 'http://127.0.0.1:8080/',
  baseURL: BASEURL,
  timeout: 3600 * 1000
}

const _axios = axios.create(config)

console.log(process.env.NODE_ENV)

_axios.interceptors.request.use(
  function(config) {
    let token = localStorage.getItem('token')

    if (token) {
      token = 'manage ' + token
      config.headers['Authorization'] = token
      // console.log('这是axios里的token', token)
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response.data && response.data.code) {
      if (parseInt(response.data.status) === 401) {
        response.data.msg = '登录信息已失效，请重新登录'
        this.$message.error(response.data.msg)
        this.router.push('/login')
      }
    }
    return response
  },
  function(error) {
    // Do something with response error
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.clear()
          confirm('请登录')
          router.push({ path: '/login' })
        // this.$router.replace({
        //   path: '/login'
        // })
        // location.reload()
      }
    }
    return Promise.reject(error)
  }
)

// Vue.use(_axios)

// export default _axios

Plugin.install = function(Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
