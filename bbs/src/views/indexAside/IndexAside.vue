<template>
  <div class="index-aside">
    <basic-panel class="panel my">
      <template v-slot:header>个人信息</template>
      <template>
        <div class="my-holder">
          <button v-if="!isLogin" class="please-login" @click="login">
            请登录
          </button>
          <div v-else>
            <div class="user-name">
              <!-- <span @click="profile">{{ username }}</span> -->
              <span @click="profile">{{
                this.$store.state.user.username
              }}</span>
            </div>
          </div>
        </div>
      </template>
    </basic-panel>

    <!-- <basic-panel class="panel admin" :isHeader="false">
      <template v-slot:header>管理员权限</template>
      <template>
        <div class="my-holder"></div>
        <button class="admin-button" @click="admin">去管理</button>
      </template>
    </basic-panel> -->

    <basic-panel class="panel admin">
      <template v-slot:header>管理员权限</template>
      <template>
        <div class="my-holder"></div>
        <button class="admin-button" @click="admin">去管理</button>
      </template>
    </basic-panel>

    <basic-panel class="panel create" :isHeader="false">
      <template>
        <div class="my-holder"></div>
        <button class="create-button" @click="create">发布话题</button>
      </template>
    </basic-panel>

    <!-- <basic-panel class="panel banner">
      <template v-slot:header>今日美食</template>
      <template>
        <img
          style="width:270px;height:123px"
          src="~@assets/img/food/food4.png"
          alt="今日美食"
        />
      </template>
    </basic-panel> -->

    <!-- <basic-panel class="panel community">
      <template v-slot:header>Node.js 开源技术社区</template>
      <template>
        <a href="https://cnodejs.org/" target="_blank">
          <div class="logo">
            <img src="~@assets/img/svg/cnodejs.svg" alt="Node.js社区" />
          </div>
        </a>
      </template>
    </basic-panel>

    <basic-panel class="panel focus-me">
      <template v-slot:header>关于我</template>
      <template>
        <p>
          github:
          <a class="my-github" href="https://github.com/82lyw" target="_blank"
            >https://github.com/82lyw</a
          >
        </p>
      </template>
    </basic-panel> -->
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'

export default {
  name: 'index-aside',
  data() {
    return {
      // token: JSON.parse(localStorage.getItem('token')),
      // username: JSON.parse(localStorage.getItem('username'))
    }
  },
  components: {
    BasicPanel
  },
  methods: {
    router(path) {
      if (this.$route.path == path) return
      this.$router.replace(path)
    },
    create() {
      if (this.$store.state.user.username) {
        this.router('/create')
      } else {
        alert('请先登录')
        if (this.$route.path != '/login') this.$router.push('/login')
      }
    },
    profile() {
      if (this.$store.state.user.username) {
        this.router('/profile')
      }
    },
    login() {
      this.router('/login')
    },
    admin() {
      if (this.$store.state.user.username) {
        this.router('/admin')
      }
    }
  },
  computed: {
    // 判断是否登录
    isLogin() {
      if (this.$store.state.user.username) return true
      else return false
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  width: 290px;
  margin-bottom: 12px;
}
.my-holder {
  position: relative;
  height: 50px;
}
// 登录提示
.please-login {
  @include dark-button;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
// 用户头像
.user-avatar {
  width: 48px;
  border: 1px solid $bgGrey;
  margin-right: 10px;
}
.user-name {
  height: 50px;
  width: 200px;
  display: inline-block;
  position: relative;
  span {
    font-size: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
.create {
  position: relative;
  .create-button {
    @include basic-button;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .my-holder {
    display: none;
  }
}

.admin {
  position: relative;
  .admin-button {
    @include basic-button;
    position: absolute;
    top: 65%;
    transform: translateY(-50%);
  }
  .my-holder {
    display: none;
  }
}

.logo {
  background-color: #444444;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}
.my-github {
  color: #00f;
  &:hover {
    text-decoration: underline;
  }
}

// 移动端
@media (max-width: $action-width) {
  .panel {
    width: 100%;
    margin: 10px auto;
  }
  .my {
    display: none;
  }
  .create {
    .my-holder {
      display: block;
    }
    .create-button {
      right: 15px;
    }
  }
  .community {
    display: none;
  }
  .banner {
    display: none;
  }
  .focus-me {
    display: none;
  }
}
</style>
