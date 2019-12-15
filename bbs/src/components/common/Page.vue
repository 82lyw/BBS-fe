<template>
  <div>
    <ul>
      <div @click="go(-1)" class="go-left">
        <span>上一页</span>
        <img src="~@assets/img/svg/go-left.svg" alt="" />
      </div>
      <!-- <li v-if="current > 3">...</li> -->
      <li
        v-for="n in totalTopics"
        :key="n"
        @click="select(n)"
        :class="{ active: current == n - 1 }"
      >
        {{ n }}
      </li>
      <div @click="go(1)" class="go-right">
        <span>下一页</span>
        <img src="~@assets/img/svg/go-right.svg" alt="" />
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: ['tagNumber', 'totalTopics'],
  data() {
    return {
      //   currentPage: 1,
      index: 0,
      current: 0
    }
  },
  // watch: {
  //   current: function() {
  //     if (this.tagNumber !== 0) {
  //       this.current = 0
  //     }
  //   }
  // },
  created() {
    this.current = 0
  },
  methods: {
    select(n) {
      this.current = n - 1
      console.log(this.current)

      this.$emit('getPageNumber', 'current')
    },

    go(n) {
      // 下一页
      if (n == 1 && this.current < this.totalTopics - 1) {
        this.current++
        this.$emit('getPageNumber')
      }
      // 上一页
      else if (n == -1 && this.current > 0) {
        this.current--
        this.$emit('getPageNumber')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-top: 10px;
  margin-left: 20px;
  display: inline-block;

  .go-left {
    float: left;
    cursor: pointer;
    margin-right: 5px;

    img {
      float: right;
      display: block;
      height: 20px;
      width: 20px;
      transition: transform 1s;
    }

    span {
      float: right;

      &:hover {
        + img {
          transform: rotateX(180deg);
        }
      }
    }
  }

  .go-right {
    float: left;
    cursor: pointer;
    margin-left: 5px;

    img {
      float: left;
      display: block;
      height: 20px;
      width: 20px;
      transition: transform 1s;
    }

    span {
      float: left;

      &:hover {
        + img {
          transform: rotateX(180deg);
        }
      }
    }
  }

  li {
    float: left;
    font-size: 16px;
    line-height: 20px;
    padding: 0 5px;
    text-align: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &::after {
    content: '';
    clear: left;
    display: block;
    background: none;
  }
}

.active {
  color: #c24f4a;
}
</style>
