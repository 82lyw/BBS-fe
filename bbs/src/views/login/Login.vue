<template>
  <basic-panel>
    <template #header>
      <span class="main-title">登录</span>
    </template>

    <template>
      <form class="input-form">
        <div class="input-box">
          <label for="email">用户名</label>
          <div class="right-box">
            <div class="good-input">
              <input
                type="text"
                name="username"
                v-model="username"
                id="username"
              />
            </div>
          </div>
        </div>
        <div class="input-box">
          <label for="password">密码</label>
          <div class="right-box">
            <div class="good-input">
              <input
                type="password"
                name="password"
                v-model="password"
                id="password"
              />
            </div>
          </div>
        </div>
        <div class="submit-box">
          <button class="submit" @click.prevent="submit">登录</button>
          <a @click="$router.push('/register')">未有账号？前往注册</a>
        </div>
      </form>
    </template>
  </basic-panel>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    BasicPanel
  },
  methods: {
    // 登录
    submit() {
      if (!this.username || !this.password) {
        alert('登录邮箱或密码不能为空')
        return
      }
      let _this = this
      this.axios
        .post('/api/user/token', {
          username: _this.username,
          password: _this.password
        })
        .then(res => {
          if (res.data.status === 1) {
            console.log(res.data)
            this.$store.commit('setUser', _this.username)
            localStorage.setItem('token', res.data.token)
            _this.getProfile()
            _this.$router.push('/')
          } else {
            console.log('登录失败')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProfile() {
      let _this = this
      this.axios.get('/api/user/profile').then(res => {
        console.log(res.data.data)
        if (res.data.status === 1) {
          _this.user = res.data.data
          this.$store.commit('setUserInfo', _this.user)
        } else {
          alert('获取个人信息失败！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-title {
  @include main-title;
}
.input-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-box {
  margin-bottom: 10px;
  display: flex;
  label {
    width: 100px;
    text-align: right;
    margin-right: 10px;
    margin-left: -50px;
    font-size: 16px;
    padding-top: 3px;
  }
  .right-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    .good-input {
      @include good-input;
    }
    .alert {
      margin-top: 10px;
    }
  }
}
.submit-box {
  .submit {
    @include basic-button;
    margin-left: 65px;
  }
  a {
    margin-left: 10px;
    color: #1e88e5;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
