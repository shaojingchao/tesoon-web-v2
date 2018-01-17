<template>
  <header class="page-header header wow fadeInDown clearfix" data-wow-duration="0.5s" data-wow-delay="0.1s">
    <div class="content">
      <router-link class="logo fl cur-poi" title="首页" tag="div" to="/"></router-link>
      <MyNav/>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  import MyNav from '../myNav.vue'

  export default {
    name: 'PageHeader',
    components: {
      MyNav
    }
  }
</script>
