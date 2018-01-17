<template>
  <header class="page-header header clearfix">
    <div class="content wow fadeInUp" data-wow-delay="0.2s">
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
