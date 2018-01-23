<template>
  <div id="app">
    <side-bar></side-bar>
    <!--<div class="g-components-view">-->
    <!--</div>-->
    <router-view class="view-content"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SideBar from './components/common/side-bar.vue'
  export default {
    name: 'app',
    data () {
      return {
        pageName: 'loading'
      }
    },
    components: {
      SideBar
    },
    beforeRouteUpdate (to, from, next) {
      alert('ds')
      console.log('sdfsdfdsddfssdfsd')
      console.log(to, from, next)
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    },
    mounted () {
      setTimeout(() => {
        this.pageName = 'async'
      }, 2000)
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0.4
  }
</style>
