<template>
  <div class="porfile-info">
    <form class="input-form">
      <div class="input-box">
        <label for="name">姓名</label>
        <div class="right-box">
          <div class="good-input">
            <input type="text" name="name" v-model="name" id="name" />
          </div>
        </div>
      </div>

      <div class="input-box">
        <label for="contact">联系方式</label>
        <div class="right-box">
          <div class="good-input">
            <input type="text" name="contact" v-model="contact" id="contact" />
          </div>
        </div>
      </div>

      <div class="input-box">
        <label for="nature">工作性质</label>
        <div class="right-box">
          <div class="good-input">
            <input type="text" name="natural" v-model="natural" id="natural" />
          </div>
        </div>
      </div>

      <div class="input-box">
        <label for="workPlace">工作地点</label>
        <div class="right-box">
          <div class="good-input">
            <input
              type="text"
              name="workPlace"
              v-model="workPlace"
              id="workPlace"
            />
          </div>
        </div>
      </div>

      <div class="submit-box">
        <button class="submit" @click.prevent="submit">提交修改</button>
      </div>
    </form>
  </div>
</template>

<script>
// import { modPwd } from '@network/sendData.js'

export default {
  name: 'profile-info',
  data() {
    return {
      name: '',
      contact: '',
      natural: '',
      workPlace: ''
    }
  },
  methods: {
    submit() {
      if (this.name && this.contact && this.natural && this.workPlace) {
        let _this = this
        this.axios
          .post('/api/user/profile', {
            name: _this.name,
            contact: _this.contact,
            nature: _this.natural,
            workPlace: _this.workPlace
          })
          .then(res => {
            if (res.data.status === 1) {
              console.log(res.data)
              alert('修改成功')
              _this.$router.push('/profile/main')
            } else {
              console.log('修改失败')
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
