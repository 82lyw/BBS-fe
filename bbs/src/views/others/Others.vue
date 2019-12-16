<template>
  <div>
    <basic-panel>
      <template #header>
        <span class="title">{{ user.name }}资料</span>
      </template>
      <template>
        <h3>个人资料</h3>
        <p>用户名：{{ user.username }}</p>
        <p v-show="user.name">姓名：{{ user.name }}</p>
        <p v-show="user.contact">联系方式：{{ user.contact }}</p>
        <p v-show="user.nature">nature：{{ user.nature }}</p>
        <p>积分：{{ user.score }}</p>
      </template>
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel'

export default {
  name: 'others',
  components: { BasicPanel },
  data() {
    return {
      user_id: null,
      user: {
        name: '',
        contact: '',
        nature: '',
        score: ''
      }
    }
  },
  created() {
    this.user_id = this.$route.params.id
    this.getProfile()
  },
  methods: {
    getProfile() {
      let _this = this
      this.axios.get('/api/user/profile/' + _this.user_id).then(res => {
        console.log(res.data.data)
        if (res.data.status === 1) {
          _this.user = res.data.data
          console.log(res.data.data)
          console.log(_this.user)
        } else {
          alert('获取他人信息失败！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &::after {
    content: '';
    display: inline-block;
    height: 20px;
    width: 20px;
    position: relative;
    top: 4px;
    background: url('~@assets/img/svg/go-right.svg') no-repeat;
    background-size: 20px;
    margin-right: 5px;
  }
}
.nav {
  display: inline-block;
  li {
    display: inline-block;
    margin-right: 10px;
    cursor: default;
    &:not(.exclude-li) {
      color: #1e88e5;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
