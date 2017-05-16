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

  </div>
</template>

<script>
//加载需要用到的组件
import bottomTab from './components/bottomtab/bottom-tab'
import topNav from './components/topnav/top-nav'

export default {
    name: 'app',
   components: {
    bottomTab,
    topNav
 }
  }
</script>
 
<style lang="scss">
#app {
  
}
</style>
