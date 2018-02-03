<template>
  <div class="about-view">
    <div class="about-detail content">
      <h2 class="main-title">天星大事记</h2>
      <div class="detail-context">
        <div class="pro-list-section" v-for="item in list">
          <div class="pro-cover">
            <b>{{item.year}}</b>
            <small>年</small>
          </div>
          <div class="pro-desc">
            <p v-html="item.content"></p>
          </div>
        </div>
      </div>
      <part-loading v-if="isLoading"/>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CF from '../api/index'

  export default {
    data () {
      return {
        list: [],
        isLoading: false
      }
    },
    mounted () {
      this.isLoading = true
      this.$http.get(CF.getMemorabilia).then(res => {
        if (res.data && typeof res.data === 'object') {
          this.list = res.data
          this.isLoading = false
        }
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  .about-detail {
    padding-top: 30px;
    padding-bottom: 180px;
    .main-title {
      font-size: 24px;
      line-height: 1.5;
      margin-bottom: 30px;
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

    .pro-list-section {
      display: flex;
      padding-top: 30px;
      padding-bottom: 15px;
      border-top: 1px solid #eee;
      overflow: hidden;
      .pro-cover {
        flex: 0 0 auto;
        padding-right: 10px;
        float: left;
        width: 128px;
        line-height: 1.4;
        color: @black-color;
        font-size: 26px;
        small {
          font-size: 14px;
          vertical-align: 2px;
          color: #666;
          font-weight:400;
        }
        &:after {
          content: '';
          float: right;
          margin-top: 0.76em;
          display: inline-block;
          height: 0;
          border-bottom: 1px solid #bbb;
          width: 30px;
        }
      }
      .pro-desc {
        padding-top: 7px;
        line-height: 2;
        p {
          font-size: 14px;
          color: @black-color;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .about-detail {
      padding-bottom: 80px;
    }
  }
</style>
