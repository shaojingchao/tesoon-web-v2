<template>
  <div class="page-dynamic-detail">
    <page-header/>
    <div class="content hide-xs">
      <div class="page-crumbs" v-if="content.id">
        <router-link :to="{name: 'dynamic'}">天星动态</router-link> &gt;
        <router-link :to="{name: 'dynamictype', params: {tid: content.tid}}">{{content.tname}}
        </router-link> &gt; 正文
      </div>
    </div>
    <part-loading v-if="isLoading"/>
    <div class="dynamic-detail content">
      <h2 class="main-title" v-if="content.title">{{content.title}}</h2>
      <p class="main-info">
        <span class="mr15">{{content.add_time}}</span>
      </p>
      <div class="detail-context" v-html="content.content">
      </div>
    </div>
    <page-footer/>
  </div>

</template>
<script type="text/ecmascript-6">
  import CF from '../api/index'

  export default {
    name: 'DynamicDetail',
    data () {
      return {
        content: {},
        isLoading: false
      }
    },
    created () {
      this.isLoading = true
      this.$http(CF.getDynamicsInfo + '?article_id=' + this.$route.params.id).then(res => {
        this.content = res.data
        document.title = this.content.title + ' - ' + document.title
        this.isLoading = false
      })
    }
  }
</script>
<style lang="less" scoped>
  .page-dynamic-detail {
    .page-header {
      box-shadow: 0 1px 0 rgba(0, 0, 0, .1) !important;
    }
  }
</style>
<style lang="less">
  @import "../assets/css/_mixins-wln.less";

  .dynamic-detail {
    padding-top: 30px;
    padding-bottom: 80px;
    .main-title {
      position: relative;
      font-size: 24px;
      line-height: 1.5;
      padding-left: 13px;
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        float: left;
        display: inline-block;
        margin-top: 0.25em;
        border-left: 4px solid @primary;
        margin-right: 0.3em;
        height: 1em;
      }
    }
    .main-info {
      font-size: 14px;
      color: #999;
      padding-left: 13px;
      margin-top: 5px;
    }
    .detail-context {
      padding-top: 40px;
      font-size: 15px;
      color: #444;
      line-height: 1.8;
      text-align: justify;
    }
  }

  /*@media screen and (max-width: 767px) {*/
  /*.dynamic-detail {*/
  /*!*font-size:14px;*!*/
  /*line-height: 1.5;*/
  /*padding-top: 30px;*/
  /*padding-bottom: 30px;*/
  /*h2 {*/
  /*line-height: 1.4;*/
  /*font-size: 24px;*/
  /*font-weight: 700;*/
  /*padding-bottom: 10px;*/
  /*}*/
  /*}*/
  /*}*/
</style>
<style lang="less"> // 重要！！ scoped 将使得img max-width 不可用
  .detail-context{
    img {
      max-width: 100%;
      height: auto !important;  // 修复img 自带 尺寸使得图片变形
    }
  }
</style>
