<template>
  <div class="topic-demand">
    <div class="title">
      <span>悬赏问答：</span>
      <div v-if="haveWinner()" class="reward-box">
        <span>
          {{ winner }}
        </span>
        <img src="@assets/img/winner.png" />
      </div>
      <div v-else class="reward-box">
        <span>
          {{ reward }}
        </span>
        <img src="@assets/img/reward.png" />
      </div>
    </div>
    <div class="text-area" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'topic-demand',
  props: {
    topicHeader: Object
  },
  data() {
    return {
      reward: this.topicHeader.demand.reward,
      content: this.topicHeader.demand.content,
      winner: this.topicHeader.demand.winnerUsername
    }
  },
  methods: {
    haveWinner() {
      let winner = this.winner
      return winner != null && winner !== undefined && winner.length !== 0
    }
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

.reward-box {
  float: right;
}

.reward-box span {
  line-height: 20px;
  float: left;
  margin-right: 5px;
}

.reward-box img {
  width: 20px;
  height: 20px;
  float: left;
}
</style>
