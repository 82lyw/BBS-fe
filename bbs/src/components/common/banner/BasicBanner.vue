<template>
  <div class="basic-banner">
    <!-- 轮播图 -->
    <transition-group tag="ul" class="slide-ul" name="list"> </transition-group>
  </div>
</template>

<script>
export default {
  name: 'basic-banner',
  data() {
    return {
      imgs: [
        {
          img: '../../../assets/img/food/food1.png',
          id: 1
        },
        {
          img: '../../../assets/img/food/food2.png',
          id: 2
        },
        {
          img: '../../../assets/img/food/food3.png',
          id: 3
        }
      ],
      flag: 0,
      interval: null
    }
  },
  methods: {
    // 鼠标放上去，停止轮播
    change(index) {
      this.flag = index
      clearInterval(this.interval)
    },
    run() {
      this.interval = setInterval(
        function() {
          if (this.flag == 2) {
            this.flag = 0
            return
          }
          this.flag++
        }.bind(this),
        4000
      )
    }
  },
  mounted() {
    // 轮播图定时器
    this.run()
  }
}
</script>

<style scoped>
.basic-banner {
  /* 占满父元素 */
  width: 100%;
  height: 125px;
  position: relative;
}

/* 图片 */
.slide-ul {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}
.slide-ul li img {
  width: 100%;
}
/* 指示切换器 */
.carousel-items {
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 10;
  bottom: 5px;
  margin: 0 auto;
  font-size: 0;
}
.carousel-item {
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: #b2b2b2;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 5px;
}
/* 指示器高亮 */
.active {
  background-color: #ffffff;
}
/* 过渡效果 */
.list-enter {
  transform: translateX(100%);
}
.list-enter-to {
  transform: translateX(0);
}

.list-leave-active,
.list-enter-active {
  transition: all 1s ease;
}
.list-leave {
  transform: translateX(0);
}
.list-leave-to {
  transform: translateX(-100%);
}
</style>
