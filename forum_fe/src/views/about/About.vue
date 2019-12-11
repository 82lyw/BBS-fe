<template>
  <div>
    <basic-panel>
      <template #header>
        开发日志
      </template>

      <template>
        <p>本项目使用vue cli 4.0.5搭建</p>
        <p>
          引入多种插件：vue-cropper图片剪裁、vue-wangeditor富文本编辑器、axios封装请求、css预处理器sass、分页插件
        </p>
        <br />
        <p>后端使用SpringBoot开发</p>
        <h2>更新内容：（11.23）</h2>
        <ul>
          <li>搭建前端框架</li>
        </ul>
      </template>
    </basic-panel>
  </div>
</template>

<script>
import BasicPanel from "@components/common/panel/BasicPanel";

export default {
  name: "about",
  components: {
    BasicPanel
  }
};
</script>

<style></style>
