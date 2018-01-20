<template>
  <div class="page-dynamic">
    <page-header/>
    <page-banner :picture="pageBanner"/>
    <div class="dynamic-page content clearfix">
      <div class="dynamic-cate">
        <div class="cate-item">
          <h3 class="cate-item-title">天星动态<br>
            <small>STAR DYNAMIC</small>
          </h3>
          <div class="split-line"></div>
          <ul class="cate-list">
            <router-link
              :class="{current:currentNav === item.tid}"
              v-for="(item,index) in navList"
              key="{{item.id}}"
              tag="li"
              :to="{path:'/dynamic/'+item.tid}"><a class="db">{{item.name}}</a></router-link>
          </ul>
        </div>
      </div>

      <div class="dynamic-list-content" v-if="newList.length>0">
        <dynamic-list :list="newList"/>
        <Pager class="pt30 mt10"
               @goToPage="goToPage"
               :pageNum="pages.pageNum"
               :currentPage="pages.currentPage"
               :totalCount="pages.totalCount"
               v-if="pages.pageNum > 1"/>
      </div>
    </div>
    <page-footer/>
  </div>
</template>
<script type="text/ecmascript-6">
  import DynamicList from '../components/dynamic-list.vue'
  import Pager from '../components/common/pager.vue'
  import CF from '../api/index'

  export default {
    components: {
      DynamicList,
      Pager
    },
    metaInfo () {
      return {
        title: '天星教育 - 天星动态'
      }
    },
    data () {
      return {
        baseUrl: CF.baseUrl,
        pageBanner: require('../assets/img/banner/dynamic_banner.png'),
        navList: [
          {
            tid: '0',
            cate: 'all',
            name: '全部'
          },
          {
            tid: '9',
            cate: 'jt',
            name: '集团新闻'
          },
          {
            tid: '10',
            cate: 'hy',
            name: '行业新闻'
          },
          {
            tid: '11',
            cate: 'yg',
            name: '员工活动'
          }
        ],
        navItemTag: ['0', '9', '10', '11'],
        currentNav: '',
        newList: [],
        pages: {
          totalCount: 0,
          pageNum: 0,
          currentPage: 1
        }
      }
    },
    created () {
      this.routeFunc(this.$route)
    },
    // 导航路由钩子
    beforeRouteUpdate (to, from, next) {
      this.routeFunc(to)
      next()
    },
    methods: {
      routeFunc (to) {
        console.log('beforeRouteUpdate')
        let params = {
          tid: 0,
          page: 1
        }
        if (to.params.tid) {
          params.tid = to.params.tid
          this.currentNav = to.params.tid
        }
        if (to.query.page) {
          params.page = to.query.page
        }
        this.getNewList(params, (res) => {
          this.newList = res.data.data
          this.pages.pageNum = parseInt(res.data.pages.pageNum)
          this.pages.totalCount = parseInt(res.data.pages.totalCount)
          this.pages.currentPage = parseInt(params.page)
        })
      },
      goToPage (index) {
        this.$router.push({query: {page: index}})
      },

      // 获取列表数据
      getNewList (p, cb) {
        let _paramStr = '?tid=' + p.tid + '&page=' + p.page
        this.$http.get(CF.getDynamicsList + _paramStr).then((res, rev) => {
          cb && cb(res)
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../assets/css/_mixins-wln.less";
  //天星动态
  .page-dynamic {
    .dynamic-page {
      padding-top: 50px;
      padding-bottom: 200px;
      .dynamic-list-content {
        float: right;
        width: 840px;
      }
      .dynamic-cate {
        width: 210px;
        float: left;
        box-sizing: border-box;
        background-color: @primary;
        border-radius: 4px;
        padding: 30px;
        color: #fff;
        .split-line {
          height: 1px;
          background-color: #3d84dc;
          margin: 20px -30px 10px;
        }
        .cate-item-title {
          font-size: 24px;
          line-height: 1.8;
          small {
            display: block;
            border-top: 1px solid rgba(255, 255, 255, .13);
            font-size: 14px;
            padding-top: 5px;
            color: rgba(255, 255, 255, .6);
          }
        }
        .cate-list {
          li {
            font-size: 12px;
            line-height: 45px;
            overflow: hidden;
            border-top: 1px solid rgba(255, 255, 255, .13);
            border-bottom: 1px solid rgba(255, 255, 255, .13);
            margin-top: -1px;
            transition: all .3s;
            &:first-child {
              border-top: none;
            }
            &:last-child {
              border-bottom: none;
            }
            a {
              padding: 0 10px;
              color: rgba(255, 255, 255, .8);
              transition: transform .3s;
            }
            &:hover {
              a {
                transform: translateX(10px);
              }
            }
            &.current {
              position: relative;
              z-index: 10;
              background-color: #3985e4;
              border-color: #3985e4;
              a {
                cursor: default;
                transform: translateX(10px);
              }
              &:hover {
                background-color: #3985e4;
              }
            }
          }
        }
        .cate-ewm {
          text-align: center;
          padding: 15px 0;
          border-bottom: 2px solid #eee;
        }
        .cate-ewm-img {
          display: block;
          width: 137px;
          margin: 0 auto;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    //天星动态
    .dynamic-page {
      padding-bottom: 40px;
      .page-body {
        float: none;
        width: auto;
        padding-top: 5px;
      }

      .dynamic-nav {
        width: auto;
        float: none;
        text-align: left;
        .rn-item-title {
          display: none;
        }
        .nav-list {
          white-space: nowrap;
          overflow: scroll;
          border-bottom: 1px solid #eee;
          li {
            display: inline-block;
            font-size: 15px;
            line-height: 46px;
            height: 46px;
            box-sizing: border-box;
            margin-right: 4px;
            padding: 0 2px;
            border-bottom: none;
            transition: all 0.3s;
            &:hover {
              background-color: #fff;
            }
          }
          .router-link-exact-active {
            color: @primary;
            border-bottom: 2px solid @primary;
          }
        }
      }
    }

    /*新闻列表*/
    .news-list {
      .nl-item {
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: 0;
        &:hover {
          box-shadow: none;
        }
      }
      .item-context {
        width: auto;
        float: none;
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
      .nl-item-img {
        width: 120px;
        height: 80px;
        margin-right: 10px;
      }
    }

    .pagination-wrap {
      text-align: center;
      margin-top: 20px;
    }
  }

</style>
