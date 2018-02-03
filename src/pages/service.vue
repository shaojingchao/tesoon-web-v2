<template>
  <div class="page-service">
    <page-header/>
    <page-banner :picture="pageBanner"/>
    <router-view></router-view>
    <page-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {supportWebp} from '../util/isSupportWebp'

  const pageBanner = {
    mobile: supportWebp() ? require('../assets/img_mobile/webp/product_banner.webp') : require('../assets/img_mobile/product_banner.jpg'),
    web: supportWebp() ? require('../assets/img/webp/product_banner.webp') : require('../assets/img/product_banner.jpg')
  }
  export default {
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      },
      pageBanner () {
        return this.isMobile ? pageBanner.mobile : pageBanner.web
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-service {
  }
</style>
