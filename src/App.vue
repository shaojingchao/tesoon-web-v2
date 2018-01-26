<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <side-bar/>
    <router-view class="view-content"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SideBar from './components/common/side-bar.vue'
  import SideBarWeixin from './components/common/side-bar-weixin.vue'

  export default {
    name: 'app',
    data () {
      return {
        pageName: 'loading'
      }
    },
    components: {
      SideBar,
      SideBarWeixin
    },
    created () {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          this.$Progress.parseMeta(meta)
        }
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },
    mounted () {
      this.$Progress.finish()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0.4
  }
</style>
