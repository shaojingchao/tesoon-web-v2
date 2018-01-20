<template>
  <div class="page-header-banner">
    <img :src="picture">
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'PageBanner',
    data () {
      return {
      }
    },
    props: {
      picture: String
    }
  }
</script>

<style lang="less" scoped>
  //页面通用banner
  .page-header-banner{
    position: relative;
    width:100%;
    height:200px;
    img{
      position: absolute;
      left:50%;
      top:50%;
      display: block;
      transform:translate(-50%,-50%);
    }
  }

</style>
