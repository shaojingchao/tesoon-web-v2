<template>
  <div class="page-header-banner">
    <img :src="picture">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'PageBanner',
    data () {
      return {}
    },
    props: {
      picture: String
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/_mixins-wln.less";
  //页面通用banner
  .page-header-banner {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      max-height: 100%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (max-width: 767px) {
    @bannerHeight: (360 / 750 ) * 100vw; // 图片大小 750 * 360
    .page-header-banner {
      height: @bannerHeight;
    }
  }

</style>
