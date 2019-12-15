<template>
  <div class="admin-edit">
    <template>
      <div class="main-title">
        修改帖子
      </div>

      <div class="input-form">
        <form action="">
          <!-- 输入标题 -->
          <div class="title">
            <input type="text" placeholder="标题" v-model="title" />
          </div>
        </form>
      </div>

      <div class="header-detail">
        <span class="separate"
          >发布于
          <!-- {{ getDate(topicHeader.createTime) }} -->
        </span>
        <span class="separate"
          >作者
          <!-- {{ topicHeader.createUserName }} -->
        </span>
        <!-- <span class="separate">来自 {{ topicHeader.tag }} </span> -->
      </div>

      <!-- 富文本编辑器 -->
      <wang-editor ref="editor"></wang-editor>
    </template>
  </div>
</template>

<script>
import WangEditor from '@components/common/WangEditor.vue'
export default {
  name: 'admin-edit',
  data() {
    return {
      title: null,
      content: null,
      need: false,
      question: null,
      score: null
    }
  },
  components: {
    WangEditor
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.main-title {
  @include main-title;
}
.input-form {
  margin: 10px 0;
}
.tag {
  span {
    font-size: 16px;
  }
  select {
    display: inline-block;
    width: 100px;
    height: 30px;
    border: 1px solid $bgGrey;
    border-radius: 5px;
    outline: none;
    text-align: center;
    transition: box-shadow 0.25s ease;
    &:hover {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    }
  }
}
.title {
  margin-top: 10px;
  width: 80%;
  height: 30px;
  border: 1px solid $bgGrey;
  border-radius: 5px;
  padding-left: 8px;
  transition: box-shadow 0.25s ease;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  input {
    border: none;
    outline: none;
    line-height: 30px;
    width: 100%;
    background: none;
  }
}
.need {
  margin-top: 10px;
  width: 80%;
  height: 30px;
}
.question {
  border: none;
  outline: none;
  line-height: 30px;
  width: 97%;
  background: none;
  border: 1px solid $bgGrey;
  border-radius: 5px;
  padding-left: 8px;
  transition: box-shadow 0.25s ease;
  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
}
.submit {
  @include basic-button;
  margin: 10px auto 0 auto;
}
</style>
