<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <side-bar/>
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
    created () {
      this.$Progress.start()
    },
    mounted () {
      this.$Progress.finish()
    }
  }
</script>

<style lang="less">
  #app {
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0.4
  }
</style>
