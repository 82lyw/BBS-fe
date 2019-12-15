<template>
  <div class="topic-demand">
    <div class="title">
      <span>悬赏问答：</span>
      <span class="reward">
        {{topicHeader.demandReward}}
      </span>
      <img class="reward-icon" src="@assets/img/reward.png">
    </div>
    <div class="text-area" v-html="topicHeader.demandContent"></div>
  </div>
</template>

<script>
export default {
    name: 'topic-demand',
    props: {
      topicHeader: Object
    }
}
</script>

<style>
@import url('~@assets/css/text.css');

.topic-demand {
  border-top: 1px solid #e5e5e5;
  margin-top: 10px;
}

.title {
  font-size: 15px;
  font-weight: bold;
  padding-top: 10px;
  padding-right: 10px;
  margin: 5px;
}

.reward {
  line-height: 20px;
  float: right;
}

.reward-icon {
  width: 20px;
  height: 20px;
  float: right;
}
</style>
