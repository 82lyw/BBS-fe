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
    <!--<p>这里是帖子列表哦~</p>-->
    <br />
    <br />
    <div class="table">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>序号</th>

            <th>标题</th>

            <th>发布时间</th>
            <th>加精</th>
            <th>置顶</th>

            <th>修改</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(topic, index) in topics" :key="index">
            <td width="5%">{{ index + 1 }}</td>

            <td width="10%" @click="clickTopic(topic.id)">{{ topic.title }}</td>

            <td width="14%">{{ getDate(topic.createTime) }}</td>
            <td width="14%">
              <button
                v-if="topic.boutique"
                class="primary"
                @click="addBoutique(topic.id, index)"
              >
                已加精
              </button>
              <div v-else>
                <button class="success is-plain">未加精</button>
              </div>
            </td>
            <td width="14%">
              <button
                v-if="topic.top"
                class="primary"
                @click="addBoutique(topic.id, index)"
              >
                已置顶
              </button>
              <div v-else>
                <button class="success is-plain">未置顶</button>
              </div>
            </td>
            <td>
              <button class="success" @click="edit(topic.id)">
                修改
              </button>
            </td>
            <td>
              <button
                class="danger"
                type="button"
                @click="deleteTopic(topic.id, index)"
              >
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-main',
  data() {
    return {
      topics: [],
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
    this.getMyTopics()
    this.getProfile()
  },
  methods: {
    deleteTopic(id, i) {
      this.axios.delete('/api/topic?id=' + id).then(res => {
        if (res.data.status === 1) {
          alert('删除成功！')
          this.topics.splice(i, 1)
          // this.getTopic()
        }
      })
      console.log(id)
    },
    getDate(create_time) {
      var createDate = new Date(create_time)
      var year = createDate.getFullYear()
      var month = createDate.getMonth()
      var date = createDate.getDate()
      return `${year}-${month}-${date}`
    },
    edit(id) {
      console.log(id)
      this.$router.push({
        name: 'update',
        params: { id: id }
      })
    },
    getProfile() {
      let _this = this
      this.axios.get('/api/user/profile').then(res => {
        console.log(res.data.data)
        if (res.data.status === 1) {
          _this.user = res.data.data
          // console.log(res.data.data)
          // console.log(_this.user)
          this.$store.commit('setUserInfo', _this.user)
        } else {
          alert('获取个人信息失败！')
        }
      })
    },
    getMyTopics() {
      let _this = this
      this.axios.get('/api/user/topics').then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          console.log(_this.topics)
        } else {
          console.log('请求topics失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#table table {
  width: 100%;
  font-size: 14px;
  border: 1px solid #eee;
}

#table {
  padding: 0 10px;
}

table thead th {
  background: #f5f5f5;
  padding: 10px;
  text-align: left;
}

table tbody td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
}

table tbody td span {
  margin: 0 10px;
  cursor: pointer;
}

button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 4px;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 5px 7px;
  font-size: 14px;
  border-radius: 4px;
}

.primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}

.success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:focus,
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
}

.danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:focus,
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

.warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:focus,
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.title {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.title span {
  float: right;
  cursor: pointer;
}
</style>
