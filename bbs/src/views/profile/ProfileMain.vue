<template>
  <div>
    <h3>个人资料</h3>
    <p>这里是我的个人信息哦~</p>
    <p>用户名：{{ $store.state.user.username }}</p>
    <p v-show="$store.state.info.name">姓名：{{ $store.state.info.name }}</p>
    <p v-show="$store.state.info.contact">
      联系方式：{{ $store.state.info.contact }}
    </p>
    <p v-show="$store.state.info.nature">
      nature：{{ $store.state.info.nature }}
    </p>
    <p>积分：{{ $store.state.info.score }}</p>
    <br />
    <br />
    <h3>我发布的帖子</h3>
    <p>这里是帖子列表哦~</p>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: 'profile-main',
  data() {
    return {
      user: {
        id: '',
        name: '',
        contact: '',
        nature: '',
        score: ''
      }
    }
  },
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      let _this = this
      this.axios.get('/api/user/profile').then(res => {
        console.log(res.data.data)
        if (res.data.status === 1) {
          _this.user = res.data.data
          // localStorage.setItem('info',JSON.stringify(_this.user))
          this.$store.commit('setUserInfo', _this.user)
          console.log(_this.user)
        } else {
          alert('获取个人信息失败！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
