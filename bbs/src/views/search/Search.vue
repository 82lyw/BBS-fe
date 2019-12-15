<template>
  <div class="index-main">
    <basic-panel class="panel" :noPadding="true">
      <template v-slot:header>
        <span>查询结果</span>
      </template>
      <template class="inner">
        <topics-list :topics="topics" />
      </template>
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from '@components/common/panel/BasicPanel.vue'
import TopicsList from '@components/common/TopicsList.vue'

export default {
  name: 'search',
  components: {
    BasicPanel,
    TopicsList
  },
  data() {
    return {
      query: null,
      topics: null
    }
  },
  created() {
    this.query = this.$route.params.query
    this.search()
  },
  methods: {
    search: function() {
      let _this = this
      this.axios.get('/api/topic/find?title=' + this.query).then(resp => {
        if (resp.data.status === 1) {
          _this.topics = resp.data.data.topics
        } else {
          console.log(resp.data.message)
        }
      })
    }
  },
  watch: {
    $route() {
      this.query = this.$route.params.query
      this.search()
    }
  }
}
</script>
