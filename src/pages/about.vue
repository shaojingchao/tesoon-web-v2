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
  import {supportWebp} from '../util/isSupportWebp'

  const pageBanner = {
    mobile: supportWebp() ? require('../assets/img_mobile/webp/about_banner.webp') : require('../assets/img_mobile/about_banner.jpg'),
    web: supportWebp() ? require('../assets/img/webp/about_banner.webp') : require('../assets/img/about_banner.jpg')
  }

  export default {
    name: 'About',
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
  .page-about {
  }
</style>
