<template>
  <div class="index-main">
    <basic-panel class="panel" :noPadding="true">
      <template v-slot:header>
        <topics-nav @getTopicByTag="switchPage" ref="nav" />
      </template>

      <template class="inner">
        <topics-list :topics="topics" :totalTopics="totalTopics" />
        <page
          :totalTopics="totalTopics"
          @getPageNumber="getPageNumber"
          ref="page"
        />
      </template>
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'
import TopicsList from '@components/common/TopicsList.vue'
import Page from '@components/common/Page.vue'
import TopicsNav from './childComp/TopicsNav.vue'

export default {
  name: 'topics-panel',
  components: {
    BasicPanel,
    TopicsList,
    TopicsNav,
    Page

    // Pagination
  },
  data() {
    return {
      name: '',
      topics: null,
      totalTopics: 0,
      currentPage: 1,
      tagNumber: 0
    }
  },
  computed: {},
  methods: {
    getPageNumber: function() {
      // let page = this.$ref.page
      let current_page = this.$refs.page.current
      console.log(current_page)
      // this.getTopic(current_page)
      switch (this.tagNumber) {
        case 0:
          this.getTopic(current_page)
          break
        case 1:
          this.getBoutique(current_page)
          break
        case 2:
          this.getDemand(current_page)
          break
        // default:
        //   break;
      }
    },
    switchPage: function() {
      // console.log(index)
      // var i = this.$refs.nav.isActive
      // var i = 0
      let data = this.$refs.nav
      this.tagNumber = data.isActive
      // console.log(data.isActive)
      switch (this.tagNumber) {
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
    getDemand(a = 0) {
      let _this = this
      this.axios.get('/api/topic/demand?pageNumber=' + a).then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          _this.totalTopics = res.data.data.total
          console.log(_this.topics)
        } else {
          console.log('请求topics失败')
        }
      })
    },
    getBoutique(a = 0) {
      let _this = this
      this.axios.get('/api/topic/boutique?pageNumber=' + a).then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          _this.totalTopics = res.data.data.total
          console.log(_this.topics)
        } else {
          console.log('请求topics失败')
        }
      })
    },
    getTopic(a = 0) {
      let _this = this
      this.axios.get('/api/topic?pageNumber=' + a).then(res => {
        if (res.data.status) {
          console.log(res.data.data)
          _this.topics = res.data.data.topics
          _this.totalTopics = res.data.data.total
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
