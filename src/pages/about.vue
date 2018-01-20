<template>
  <div class="page-about">
    <page-header/>
    <page-banner :picture="pageBanner"/>
    <transition name="fadeIn-down" :duration="{ enter: 500, leave: 0 }" appear mode="out-in">
      <router-view></router-view>
    </transition>
    <page-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        pageBanner: require('../assets/img/banner/about_banner.png')
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 了解天星'
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-about {
  }
</style>
