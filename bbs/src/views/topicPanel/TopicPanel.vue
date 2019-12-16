<template>
  <div class="topic">
    <basic-panel :isHeader="false">
      <topic-header :topicHeader="topicHeader" />
      <topic-content :topicContent="topicContent" />
      <topic-demand v-if="haveDemand()" :topicHeader="topicHeader" />
    </basic-panel>

    <topic-comments
      class="reply"
      :topicComments="topicComments"
      :topicHeader="topicHeader"
    />
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'
import TopicHeader from './childComp/TopicHeader'
import TopicDemand from './childComp/TopicDemand'
import TopicContent from './childComp/TopicContent'
import TopicComments from './childComp/TopicComments'
// import {getTopic} from '@network/getData'

export default {
  name: 'topic-panel',
  data() {
    return {
      topic_id: null,
      topicHeader: {},
      topicContent: '',
      topicComments: []
    }
  },
  components: {
    BasicPanel,
    TopicHeader,
    TopicDemand,
    TopicContent,
    TopicComments
  },
  created() {
    // 向服务器请求文章相关数据,回复后需要再次调用
    this.topic_id = this.$route.params.id
    this.getTopic()
    this.getComments()
  },
  methods: {
    getTopic() {
      let _this = this
      this.axios.get('/api/topic/' + _this.topic_id).then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          // _this.topics = res.data.data
          _this.topicHeader = res.data.data
          _this.topicContent = res.data.data.content
          console.log(_this.topicHeader)
        } else {
          console.log('请求topics失败')
        }
      })
    },
    getComments() {
      let _this = this
      this.axios.get('/api/comment/' + _this.topic_id).then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          console.log(res.data.data)
          _this.topicComments = res.data.data
          console.log(_this.topicComments)
        } else {
          console.log('请求comments失败')
        }
      })
    },
    haveDemand() {
      console.log(this.topicHeader.demand)
      let content = this.topicHeader.demand
      return content !== null && content !== undefined && content.length !== 0
    }
  }
}
</script>

<style scoped>
.reply {
  margin-top: 10px;
}
</style>
