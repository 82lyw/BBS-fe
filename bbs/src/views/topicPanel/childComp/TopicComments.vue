<template>
  <div>
    <basic-panel>
      <template #header> {{ topicComments.length }} 回复 </template>

      <template>
        <div
          class="reply-item"
          v-for="(comment, index) in topicComments"
          :key="index"
        >
          <!-- <div class="avatar">
            <img :src="avatarSrc(comment.commenter_avatar)" alt="" />
          </div> -->
          <!-- <div class="agree">
            <img src="../../../assets/img/svg/agree-normal.svg" alt="" />
            <span>{{ comment.prefer }}</span>
          </div> -->
          <a href="" class="replyer">{{ comment.userName }}</a>
          <a href="" class="reply-timer"
            >{{ comment.location }}楼 • {{ getDate(comment.createTime) }}</a
          >
          <p class="reply-content">{{ comment.content }}</p>
        </div>
      </template>
    </basic-panel>

    <!-- 回复模块 -->
    <basic-panel class="add-panel">
      <template #header>
        添加回复
      </template>

      <template>
        <wang-editor type="comment" ref="editor"></wang-editor>
        <button class="submit" @click="submit">回复</button>
      </template>
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'
import WangEditor from '@components/common/WangEditor.vue'

export default {
  name: 'topic-comments',
  components: {
    BasicPanel,
    WangEditor
  },
  props: {
    topicComments: Array,
    topicHeader: Object
  },
  computed: {},
  methods: {
    updateComment() {
      let _this = this
      this.axios.get('/api/comment/' + this.topicHeader.id).then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topicComments = res.data.data
          console.log(_this.topicComments)
        } else {
          console.log('请求comments失败')
        }
      })
    },
    getDate(create_time) {
      var createDate = new Date(create_time)
      var year = createDate.getFullYear()
      var month = createDate.getMonth()
      var date = createDate.getDate()
      return `${year}年${month}月${date}日`
    },
    // 提交评论
    submit() {
      // 获取基础数据
      var text = this.$refs.editor.editor.txt.text()
      var username = this.$store.state.user.username

      this.id = this.topicHeader.id
      // console.log(text)
      // console.log(topic_id)
      // var timestamp = new Date().getTime()
      // 评论非空
      if (!text.replace(/&nbsp;| /g, '')) {
        alert('请输入评论内容')
        return
      }
      // 发表评论需要用户登录
      if (!username) {
        alert('请登录后再尝试')
        return
      }

      let _this = this
      this.axios
        .post('/api/comment', {
          topicId: _this.id,
          content: text
        })
        .then(res => {
          if (res.data.status === 1) {
            console.log(res.data.date)
            alert(res.data.message)
            _this.updateComment()
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.reply-item {
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
.reply-item:nth-last-child(1) {
  border: none;
}
.avatar {
  height: 30px;
  width: 30px;
  float: left;
  margin-right: 10px;
  img {
    width: 100%;
  }
}
.replyer {
  color: #666666;
  font-weight: bold;
  margin-right: 5px;
}
.reply-timer {
  color: #0088cc;
}
.reply-content {
  margin: 5px 0 0 50px;
}
.agree {
  float: right;
  height: 20px;
}
.agree img {
  width: 20px;
}
.agree span {
  vertical-align: top;
}
.add-panel {
  margin-top: 10px;
}
.submit {
  @include basic-button;
  margin-top: 10px;
}
</style>
