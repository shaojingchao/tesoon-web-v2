<template>
  <div class="page-service-szcb">
    <div class="service-detail content">
      <h2 class="main-title">数字出版</h2>
      <div class="detail-context">
        <div class="main-section">
          <img class="fr ml20" v-lazy="require('../assets/img/szcb_pro_01.png')">
          <p>
            秉持“致力于打造真正有效的智能教与学解决方案”的基本理念，追求“让科技走向课堂，教师轻松教，学生高效学”的基本目标，利用信息技术为老师实现高效教学提供最方便、最有效的辅助，将老师从繁重的基础工作中解放出来，使之可以专注于传道授业解惑。</p>
          <p>数字出版是天星教育旗下的在线教育平台，平台以兴趣圈子社群为纽带，致力于连接全国知名教育机构、团队和名师资源，为K12阶段学生及家长提供在线知识专栏和在线课程服务。</p>
        </div>
      </div>

      <div class="router-nav">
        <router-link class="btn"
                     v-for="(item,index) in routerNav"
                     :key="index"
                     :to="item.to">
          {{item.name}}
        </router-link>
      </div>

      <div class="service-szcb-view-wrap">
        <transition name="fadeIn-down" :duration="{ enter: 500, leave: 0 }" appear mode="out-in">
          <router-view></router-view>
        </transition>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'ServiceSzcb',
    data () {
      return {
        pageBanner: require('../assets/img/banner/dynamic_banner.png'),
        routerNav: [
          {
            name: '天星教育网',
            to: {
              name: 'shuzichuban_tianxingjiaoyu',
              meta: {
                scrollToTop: false
              }
            }
          },
          {
            name: '微学习圈',
            to: {
              name: 'shuzichuban_weixuexiquan',
              meta: {
                scrollToTop: false
              }
            }
          },
          {
            name: '未来脑',
            to: {
              name: 'shuzichuban_weilainao',
              meta: {
                scrollToTop: false
              }
            }
          }
        ]
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 数字出版'
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/css/_mixins-wln.less";

  .page-service-szcb {

    .service-detail {
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
        font-size: 14px;
        line-height: 2;
        .main-section {
          margin-top: 10px;
          color: #7b7b7b;
          padding-bottom: 40px;
          text-indent: 2em;
        }
        p {
          margin-bottom: 1.1em;
        }
        img {
          max-width: 100%;
        }
      }
    }

    .router-nav {
      text-align: center;
      .btn {
        width: 10em;
        padding: 6px 0;
        line-height: 1;
        margin: 0 0.5em;
        border-color: #eee;
        color: #999;
        border-radius: 1px;
        background-color: #fff;
        &.exact-active {
          border-color: @primary;
          color: #fff;
          background-color: @primary;
        }
      }
    }

    .service-szcb-view-wrap {
      .intro-item {
        padding: 30px 10px 40px;
        border-bottom: 1px solid #eee;
        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        p {
          text-indent: 2em;
          line-height: 1.8;
          color: #7b7b7b;
        }
        .img-view {
          padding-top: 30px;
          img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .page-service-szcb {

      .service-detail {
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
          font-size: 14px;
          line-height: 2;
          .main-section {
            margin-top: 10px;
            color: #7b7b7b;
            padding-bottom: 40px;
            text-indent: 2em;
          }
          p {
            margin-bottom: 1.1em;
          }
          img {
            max-width: 100%;
          }
        }
      }

      .router-nav {
        text-align: center;
        .btn {
          width: 6em;
          padding: 6px 0;
          line-height: 1;
          margin: 0 0.3em;
          border-color: #eee;
          color: #999;
          border-radius: 1px;
          background-color: #fff;
          &.exact-active {
            border-color: @primary;
            color: #fff;
            background-color: @primary;
          }
        }
      }

      .service-szcb-view-wrap {
        .intro-item {
          padding: 30px 10px 40px;
          border-bottom: 1px solid #eee;
          h3 {
            font-size: 18px;
            margin-bottom: 10px;
          }
          p {
            text-indent: 2em;
            line-height: 1.8;
            color: #7b7b7b;
          }
          .img-view {
            padding-top: 30px;
            img {
              display: block;
              margin: 0 auto;
              max-width: 100%;
            }
          }
        }
      }
    }
  }
</style>
