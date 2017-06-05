<template>
  <div id="app">
 <!--  头部导航 -->
    <div class="container-top">
      <top-nav></top-nav>
    </div>
   <!--  主要内容 -->
    <div class="container-content">
      <div class="patch"></div>
        <router-view></router-view>
    </div>
   <!--  尾部tab -->
  <div class="container-bottom">
    <bottom-tab class="tab"></bottom-tab>
  </div>

  </div>
</template>

<script>
// 加载需要用到的组件
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
@import './common/sass/mixin.scss';
#app {
  position:relative;
  min-height:100vh;
  width:100%;
  .container-top{
    position:fixed;
    z-index:999;
    top:0;
    left:0;
    width:100%;
    height:10%;
  }
  .container-bottom{
    position:fixed;
    z-index:999;
    bottom:0;
    left:0;
    width:100%;
    height:10%;
  }
  .container-content{
    width:100%;
    .patch{
      position: relative;
      top:0;
      left:0;
      width:100%;
      height:10vh;
    }
  }
}
</style>
