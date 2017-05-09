<template>
  <div id="app">
 <!--  头部导航 -->
    <div class="container-top">
    <!-- 弹出层控制按钮-左边框弹出 -->
      <div class="drawer"></div>
      <top-nav></top-nav>
    </div>
   <!--  主要内容 -->
    <div class="container-content">
      <div class="patch"></div>
        <router-view></router-view>
        <div class="patch"></div>
    </div>
   <!--  尾部tab -->
  <div class="container-bottom">
    <bottom-tab class="tab"></bottom-tab>
  </div>
<!-- 主页左侧弹出层 -->
<my-sidebar style="z-index:10000000;"></my-sidebar>
<!-- 对话界面 -->
<my-dialog class="my-dialog" v-if="dialog"></my-dialog>
<!-- 个人主页 -->
<my-personindex class="my-personindex" v-if="personindex"></my-personindex>
<my-search v-if="search"></my-search>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
