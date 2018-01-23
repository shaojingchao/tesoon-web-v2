<template>
  <div class="page-dynamic-detail">
    <page-header/>
    <div class="content hide-xs">
      <div class="page-crumbs">天星动态 <span v-if="content.tname"> > {{content.tname}} > 正文</span></div>
    </div>
    <div class="dynamic-detail content">
      <h2 class="main-title">{{content.title}}</h2>
      <p class="main-info">
        <span class="mr15">{{content.add_time}}</span>
        <!--<span class="mr15">{{content.add_user}}</span>-->
        <!--<span>{{content.dept}}</span>-->
      </p>
      <div class="detail-context" v-html="content.content">
      </div>
      <part-loading v-if="isLoading"/>
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
        isLoading: true
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 天星动态'
      }
    },
    created () {
      console.log(this)
      this.$http(CF.getDynamicsInfo + '?article_id=' + this.$route.params.id).then(res => {
        this.isLoading = false
        this.content = res.data
        this.$metaInfo.title = this.$metaInfo.title + ' - ' + this.content.title
      })
    }
  }
</script>
<style lang="less">
  @import "../assets/css/_mixins-wln.less";

  .dynamic-detail {
    padding-top: 30px;
    padding-bottom: 80px;
    .main-title {
      font-size: 24px;
      line-height: 1.5;
      &:after {
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
      color: #9fa5ac;
      padding-left: 13px;
      margin-top: 5px;
    }
    .detail-context {
      padding-top: 40px;
      font-size: 14px;
      color: #7b7b7b;
      line-height: 1.8;
      img {
        max-width: 100%;
      }
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
