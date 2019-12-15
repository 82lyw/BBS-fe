<template>
  <div>
    <h3>管理员权限</h3>
    <h3>我发布的帖子</h3>
    <p>这里是帖子列表哦~</p>
    <br />
    <br />
    <div id="table">
      <div class="add">
        <span>没想好，姑且这么放着吧</span>
      </div>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>序号</th>
            <th>ID</th>
            <th>标题</th>
            <th>发布人</th>
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
            <td width="5%">{{ topic.id }}</td>
            <td width="10%" @click="clickTopic(topic.id)">{{ topic.title }}</td>
            <td width="8%">{{ topic.createUserName }}</td>
            <td width="14%">{{ getDate(topic.createTime) }}</td>
            <td>
              <button
                v-if="!topic.boutique"
                class="primary"
                @click="addBoutique(topic.id, index)"
              >
                加精
              </button>
              <div v-else>
                <button class="success is-plain">精华</button>
                <button class="warning">撤消</button>
              </div>
            </td>
            <td>
              <button
                class="primary"
                v-if="!topic.top"
                @click="addTop(topic.id, index)"
              >
                置顶
              </button>
              <div v-else>
                <button class="success is-plain">已置顶</button>
                <button class="warning">撤消</button>
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
  name: 'admin-main',
  data() {
    return {
      topics: []
      // user: {
      //   id: '',
      //   name: '',
      //   contact: '',
      //   nature: '',
      //   score: ''
      // }
    }
  },
  created() {
    // this.getProfile()
    this.getTopic()
  },
  methods: {
    getProfile() {
      // let _this = this
      // this.axios.get('/api/user/profile').then(res => {
      // })
    },
    clickTopic(id) {
      this.$router.push({
        name: 'topic',
        params: { id: id }
      })
    },
    getDate(create_time) {
      var createDate = new Date(create_time)
      var year = createDate.getFullYear()
      var month = createDate.getMonth()
      var date = createDate.getDate()
      return `${year}-${month}-${date}`
    },
    getTopic() {
      let _this = this
      this.axios.get('/api/topic/find').then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          console.log(_this.topics)
        } else {
          console.log('请求topics失败')
        }
      })
    },
    deleteTopic(id, i) {
      this.axios.delete('/api/admin/topic?id=' + id).then(res => {
        if (res.data.status === 1) {
          alert('删除成功！')
          this.topics.splice(i, 1)
          // this.getTopic()
        }
      })
      console.log(id)
    },
    edit(id) {
      console.log(id)
      this.$router.push({
        name: 'edit',
        params: { id: id }
      })
    },
    addBoutique(id, i) {
      this.axios.post('/api/admin/boutique?id=' + id).then(res => {
        if (res.data.status === 1) {
          alert('加精成功！')
          // this.getTopic()
          this.topics[i].boutique = true
        }
      })
    },
    addTop(id, i) {
      this.axios.post('/api/topTopic', { id: id }).then(res => {
        if (res.data.status === 1) {
          alert('置顶成功！')
          // this.getTopic()
          this.topics[i].top = true
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
