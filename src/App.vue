<template>
  <div id="app">
 <!--  头部导航 -->
    <div class="container-top">
   <!--  弹出层控制按钮-边框弹出 -->
   <div class="drawer" @click="toggle(true)"></div>
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
   <!--  主页弹出层 -->
   <mu-drawer :open="open" :docked="docked" @close="toggle()">
     <mu-list @itemClick="docked?'':toggle()">
     <mu-list-item title="Menu Item 1"/>
     <mu-list-item title="Menu Item 2"/>
     <mu-list-item title="Menu Item 3"/>
     <mu-list-item @click.native="open=false" title="Close"/>  
     </mu-list>
   </mu-drawer>
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
  },
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
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
    z-index:100;
    top:0;
    left:0;
    width:100%;
    height:10%;
    .drawer{
      position: fixed;
      z-index:1;
      top:0;
      left:0;
      width:6vw;
      height:100%;
    }
  }
  .container-bottom{
    position:fixed;
    z-index:1;
    bottom:0;
    left:0;
    width:100%;
    height:10%;
    .tab{
      .mu-bottom-item-active .mu-bottom-item-icon{
        color:#2e2c6b;
      }
      .mu-bottom-item-active .mu-bottom-item-text{
        font-weight:700;
        color:#2e2c6b;
      }
    }
  }
  .container-content{
    width:100%;
    .patch{
      position: relative;
      top:0;
      left:0;
      width:100%;
      height:10.2vh;
    }
  }
}
//friend-tab
.t-1{
      color: #2e2c6b;
    .mu-tab-text.has-icon
    {
      margin-top: -4px;
    }
    .i-1{
      font-size: 2.5em;
      color: #64dd17;
    } 
    .i-2{
      font-size: 2.5em;
      color: #f44336;
    }   
    .i-3{
      font-size: 2.5em;
      color: #00bfa5;
    }
    .ii-1{
      font-size: 2.5em;
      color: #ffd600;
    }
    .ii-2{
      font-size: 2.5em;
      color: #e64a19;
    }
    .ii-3{
      font-size: 2.5em;
      color: #2962ff;
    }
}
</style>
