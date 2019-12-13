<template>
  <ul class="topic">
    <li
      v-for="(topic, index) in topics"
      :key="index"
      @click="clickTopic(topic.id)"
    >
      <div :title="topic.createUserName">
        <span class="author separate">作者{{ topic.createUserName }}</span>
      </div>
      <!-- 评论数、浏览量 -->
      <!-- <div class="number">
        <span class="comments" title="回复数">{{ topic.comments.length }}</span>
        /
        <span class="browsed" title="浏览量">{{ topic.browsed }}</span>
      </div> -->
      <!-- tag -->
      <!-- <span class="tag-box"
        ><span>{{ getTag(topic.tag, topic.status) }}</span></span
      > -->
      <!-- 标签 -->
      <span class="tag-box" v-show="topic.boutique"><span>精华</span></span>
      <!-- 标题 -->
      <div class="title">{{ topic.title }}</div>

      <span class="time">{{ getDate(topic.createTime) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'topics-list',
  props: ['topics'],
  computed: {
    getTag() {
      return function(tag, status) {
        if (status == 1) {
          return '置顶'
        } else return tag
      }
    }
  },
  methods: {
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
      return `${year}年${month}月${date}日`
    }
  }
}
</script>

<style lang="scss" scoped>
/* 帖子 */
.topic li {
  height: 50px;
  padding: 0 12px 0 10px;
  border-bottom: 1px solid #dddddd;
  cursor: pointer;
  position: relative;
  display: flex;
  &:hover {
    background: #f6f6f6;
  }
}
.owner-avatar {
  height: 36px;
  width: 36px;
  margin-top: 7px;
  border: 1px solid #000000;
}

.separate::before {
  content: '• ';
}

.author {
  color: #838383;
  font-size: 12px;
  flex: 1;
  margin-left: 5px;
  line-height: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    text-decoration: underline;
  }
}

.time {
  color: #838383;
  font-size: 12px;
  // flex: 1;
  // margin-left: 5px;
  line-height: 50px;
  // white-space: nowrap;
  // text-overflow: ellipsis;
  // overflow: hidden;
  // &:hover {
  //   text-decoration: underline;
  // }
}

.number {
  margin-left: 10px;
  height: 50px;
  width: 40px;
  line-height: 50px;
  .comments {
    font-size: 14px;
    color: #9e78c6;
    &:hover {
      text-decoration: underline;
    }
  }
  .browsed {
    font-size: 12px;
    &:hover {
      text-decoration: underline;
    }
  }
}

.tag-box {
  margin-left: 10px;
  span {
    @include tag-box;
  }
  // 禁止折行
  white-space: nowrap;
  display: flex;
  align-items: center;
}

.title {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  flex: 1;
  margin-left: 5px;
  line-height: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    text-decoration: underline;
  }
}

.last-commenter-avatar {
  float: right;
  height: 20px;
  margin: 15px 25px 0 0;
  border: 1px solid #000;
}
.last-comment-date {
  float: right;
  font-size: 12px;
  line-height: 50px;
}
</style>
