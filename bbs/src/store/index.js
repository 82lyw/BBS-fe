import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: localStorage.getItem('username')
    }
  },
  mutations: {
    // 登录后设定数据
    setUser(state, username) {
      localStorage.setItem('username', username)
      state.user.username = localStorage.getItem('username')
    },
    // setUserInfo(state,user) {
    // }
    // 退出登录删除数据
    logout(state) {
      state.user.username = null
    }
  },
  actions: {},
  modules: {}
})
