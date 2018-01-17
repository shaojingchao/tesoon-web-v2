<template>
  <div>
    <!--<MyHeader/>-->
    <div class="error-page">
      咦~页面不见了~
    </div>
    <div class="tc mt30">
      <p class="f20 text-muted">请核对您输入的页面地址是否正确哦~</p>
      <div class="mt10">
        <a class="btn btn-primary" href="/">返回首页</a>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .error-page{
    padding-top: 200px;
    font-size:40px;
    text-align: center;
  }
</style>

<script>
import MyHeader from '../components/common/header.vue'
export default {
  components: {
    MyHeader
  }
}
</script>
