<template>
  <div class="page-service">
    <page-header/>
    <page-banner :picture="pageBanner"/>
    <router-view></router-view>
    <page-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        pageBanner: require('../assets/img/banner/product_banner.png')
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 公司业务'
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-service {
  }
</style>
