<template>
  <div class="index-main">
    <basic-panel class="panel" :noPadding="true">
      <template v-slot:header>
        <topics-nav @getTopicByTag="switchPage" ref="nav" />
      </template>
      <!-- <template v-slot:header>
        <topics-nav ref="nav" />
      </template> -->

      <template class="inner">
        <topics-list :topics="topics" />
        <!-- <pagination
          :totalTopics="totalTopics"
          @switchPage="switchPage"
          @go="go"
          ref="page"
        /> -->
      </template>
      <!-- <template class="inner">
        <topics-list :topics="topics" />
        <pagination :totalTopics="totalTopics" ref="page" />
      </template> -->
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'
import TopicsList from '@components/common/TopicsList.vue'
import TopicsNav from './childComp/TopicsNav.vue'
// import Pagination from '@components/common/Pagination.vue'

export default {
  name: 'topics-panel',
  components: {
    BasicPanel,
    TopicsList,
    TopicsNav
    // Pagination
  },
  data() {
    return {
      name: '',
      topics: null,
      totalTopics: 0
    }
  },
  methods: {
    switchPage: function() {
      // console.log(index)
      // var i = this.$refs.nav.isActive
      // var i = 0
      let data = this.$refs.nav
      let index = data.isActive
      // console.log(data.isActive)
      switch (index) {
        case 0:
          this.getTopic()
          break
        case 1:
          this.getBoutique()
          break
        case 2:
          this.getDemand()
          break
        // default:
        //   break;
      }
    },
    getDemand() {
      let _this = this
      this.axios.get('/api/topic/demand').then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          console.log(_this.topics)
        } else {
          console.log('请求topics失败')
        }
      })
    },
    getBoutique() {
      let _this = this
      this.axios.get('/api/topic/getBoutique').then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          console.log(_this.topics)
        } else {
          console.log('请求topics失败')
        }
      })
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
    }
  },
  // 获取topic列表
  created() {
    this.getTopic()
    // this.switchPage(0)
  }
}
</script>

<style scoped></style>
