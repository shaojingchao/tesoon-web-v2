<template>
  <div class="news-list">
    <router-link
      class="nl-item clearfix"
      v-for="(item,index) in list"
      :key="item.id"
      :to="{path:'/dynamic/'+item.tid+'/'+item.id}">

      <!--配图-->
      <div class="nl-item-img">
        <img v-lazy="baseUrl + item.thumb">
      </div>

      <!--内容-->
      <div class="item-context">
        <div class="title elli" :title="item.title">{{item.title}}</div>
        <div class="context">
          {{item.mydesc}}
        </div>
      </div>

      <div class="item-other">
        <span class="info-item" :title="item.add_time">{{isMobile ? item.add_time : item.add_time.substr(5)}}</span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import CF from '../api/index'

  export default {
    name: 'DynamicList',
    data () {
      return {
        baseUrl: CF.baseUrl
      }
    },
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    },
    props: {
      list: Array
    }
  }
</script>

<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  // 图片宽高比
  @listItemImgRate: 180px / 120px;

  /*新闻列表*/
  .news-list {
    .nl-item {
      display: block;
      padding: 30px 0;
      border-bottom: 1px solid #eeeeee;
      overflow: hidden;
      transition: all 0.2s;
      &:first-child {
        border-top: 1px solid #eeeeee;
      }
      &:hover {
        box-shadow: 0 8px 20px -1px rgba(0, 0, 0, .12);
        border-bottom-color: transparent;
        .nl-item-img {
          transform: translateX(30px);
        }
        .item-context {
          transform: translateX(30px);
        }
      }
    }
    .nl-item-img {
      position: relative;
      float: left;
      width: 180px;
      height: 180px / @listItemImgRate;
      margin-right: 20px;
      background-color: @bg-body;
      overflow: hidden;
      transition: transform .3s;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
    }
    .item-context {
      float: left;
      width: 508px;
      padding-top: 18px;
      transition: transform .3s;
      .title {
        font-size: 16px;
        color: #444;
      }
      .context {
        color: #afafaf;
        line-height: 1.7;
        margin-top: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .info-item {
        display: inline-block;
        margin-right: 20px;
        color: #aaa;
      }
    }
    .item-other {
      float: right;
      width: 110px;
      padding-top: 42px;
      font-family: 'Microsoft Yahei', sans-serif;
      text-align: center;
      font-weight: 100;
      color: #afafaf;
      font-size: 28px;
    }
  }

  @media screen and (max-width: 767px) {

    /*新闻列表*/
    .news-list {
      .nl-item {
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 0;
        &:hover {
          box-shadow: none;
          .nl-item-img {
            transform: translateX(0);
          }
          .item-context {
            transform: translateX(0);
          }
        }
      }
      .nl-item-img {
        width: 120px;
        height: 120px / @listItemImgRate;
        margin-right: 10px;
      }
      .item-context {
        width: auto;
        float: none;
        padding-top: 0;
        .title {
          font-size: 15px;
          white-space: normal;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .context {
          display: none;
        }
        .info-item {
          font-size: 14px;
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .item-other {
        float: none;
         width: auto;
        padding-top: 0;
        margin-top: 15px;
        text-align: left;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
</style>
