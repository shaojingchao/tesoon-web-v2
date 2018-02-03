<template>
  <div class="page-dynamic">
    <page-header/>
    <page-banner :picture="pageBanner" v-if="!isMobile"/>
    <div class="dynamic-page content clearfix">
      <div class="dynamic-cate" v-if="dynamicNav && dynamicNav.children.length">
        <div class="cate-item">
          <h3 class="cate-item-title">{{dynamicNav.name}}<br>
            <small>{{dynamicNav.subName}}</small>
          </h3>
          <div class="split-line"></div>
          <ul class="cate-list">
            <router-link
              :class="{current:currentNav === item.tid}"
              v-for="(item,index) in dynamicNav.children"
              :key="item.tid"
              tag="li"
              :to="item.to"><a class="db">{{item.name}}</a></router-link>
          </ul>
        </div>
      </div>

      <div class="dynamic-list-content" v-if="newList.length>0">
        <dynamic-list :list="newList"/>
        <pager class="pt30 mt10"
               @goToPage="goToPage"
               :pageNum="pages.pageNum"
               :currentPage="pages.currentPage"
               :totalCount="pages.totalCount"
               v-if="pages.pageNum > 1"/>
      </div>
      <p class="text-muted tc p30" v-if="newList.length === 0 && !isLoading">未找到相关信息~</p>
      <part-loading v-if="isLoading"/>
    </div>
    <page-footer/>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import DynamicList from '../components/dynamic-list.vue'
  import Pager from '../components/common/pager.vue'
  import CF from '../api/index'
  import {supportWebp} from '../util/isSupportWebp'
  const pageBanner = {
    mobile: supportWebp() ? require('../assets/img_mobile/webp/dynamic_banner.webp') : require('../assets/img_mobile/dynamic_banner.jpg'),
    web: supportWebp() ? require('../assets/img/webp/dynamic_banner.webp') : require('../assets/img/dynamic_banner.jpg')
  }
  export default {
    components: {
      DynamicList,
      Pager
    },
    computed: {
      ...mapGetters([
        'dynamicNav'
      ]),
      isMobile () {
        return this.$store.state.isMobile
      },
      pageBanner () {
        return this.isMobile ? pageBanner.mobile : pageBanner.web
      }
    },
    data () {
      return {
        isLoading: false,
        baseUrl: CF.baseUrl,
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
          this.isLoading = false
          if (res.data && res.data.data) {
            this.newList = res.data.data
            this.pages.pageNum = parseInt(res.data.pages.pageNum)
            this.pages.totalCount = parseInt(res.data.pages.totalCount)
            this.pages.currentPage = parseInt(params.page)
          }
        })
      },
      goToPage (page) {
        this.$router.push({query: {page: page}})
      },

      // 获取列表数据
      getNewList (p, cb) {
        let _paramStr = '?tid=' + p.tid + '&page=' + p.page
        this.newList = []
        this.isLoading = true
        this.$http.get(CF.getDynamicsList + _paramStr).then((res, rev) => {
          cb && cb(res)
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .page-dynamic {
    .page-header {
      box-shadow: 0 1px 0 rgba(0, 0, 0, .1) !important;
    }
  }
</style>
<style lang="less" scoped>
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
            border-top: 1px solid rgba(255, 255, 255, .1);
            border-bottom: 1px solid rgba(255, 255, 255, .1);
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
                background-color: #3985e4;
              }
            }
            &.current {
              position: relative;
              z-index: 10;
              background-color: #3985e4;
              a {
                cursor: default;
              }
              &:hover {
                background-color: #3985e4;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {

    .page-dynamic {
      .dynamic-page {
        padding-top: 20px;
        padding-bottom: 100px;
        .dynamic-list-content {
          float: none;
          width: auto;
          margin-top: 20px;
        }
        .dynamic-cate {
          width: auto;
          float: none;
          padding: 10px;
          .split-line {
            margin: 10px -10px 10px;
          }
          .cate-item-title {
            font-size: 16px;
            small {
              font-weight: 300;
              font-size: 11px;
              padding-top: 2px;
            }
          }
          .cate-list {
            li {
              line-height: 40px;
            }
          }
        }
      }
    }
  }

</style>
