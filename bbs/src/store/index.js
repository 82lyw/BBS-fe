import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: localStorage.getItem('username')
    },
    info: JSON.parse(localStorage.getItem('info'))
  },
  mutations: {
    // 登录后设定数据
    setUser(state, username) {
      localStorage.setItem('username', username)
      state.user.username = localStorage.getItem('username')
    },
    setUserInfo(state, user) {
      localStorage.setItem('info', JSON.stringify(user))
      state.info = JSON.parse(localStorage.getItem('info'))
    },
    // 退出登录删除数据
    logout(state) {
      state.user.username = null
    }
  },
  actions: {},
  modules: {}
})
