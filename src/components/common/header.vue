<template>
  <header class="page-header header wow fadeInDown clearfix" data-wow-duration="0.5s" data-wow-delay="0.1s">
    <div class="content">
      <router-link class="logo fl cur-poi" title="首页" tag="div" to="/"></router-link>
      <MyNav/>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  import MyNav from '../header-nav.vue'

  export default {
    name: 'PageHeader',
    components: {
      MyNav
    }
  }
</script>
<style lang="less">
  .page-header{
    position: relative;
    z-index:100;
    box-shadow:0 4px 15px -2px rgba(0,0,0,.2);
    .logo {
      float: left;
      width: 146px;
      height: 80px;
      background: url(../../assets/img/logo-2.png) 50% 50% no-repeat;
    }
  }
  @media screen and (max-width: 767px) {
    .page-header{
      .logo {
        width: 100px;
        height: 48px;
        background-size: contain;
      }
    }
  }
</style>
