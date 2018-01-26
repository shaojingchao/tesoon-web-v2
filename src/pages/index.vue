<template>
  <div class="page-index">
    <page-header/>
    <Slider class="slider-wrap" :bannerPic="bannerPic" :style="{height:!isMobile ? '600px' : 'auto'}" :duration="6"/>
    <div id="platform-data">
      <div class="content clearfix">
        <div class="data-item wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
          <div class="num">5000<sup>+</sup></div>
          <p>5000余位特优级教师加盟</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.5s">
          <div class="num">7</div>
          <p>开创7大教辅品牌</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
          <div class="num">26</div>
          <p>推出26大畅销系列</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.9s">
          <div class="num">2000<sup>+</sup></div>
          <p>单品研发2000余册</p>
        </div>
      </div>
    </div>

    <!--天星动态-->
    <div id="dynamic" class="index-section bg-white wow fadeInUp" data-wow-offset="100">
      <h1 class="section-title">天星动态<br>
        <small>TIANXING NEWS</small>
      </h1>

      <div class="content clearfix">

        <div class="clearfix" v-if="dynamicList.length > 0">
          <div class="dynamic-focus news-wow fadeInUp">
            <router-link class="ds-list-item"
                         :title="focusDynamic.title"
                         :to="{name:'dynamicdetail',params:{tid: focusDynamic.tid, id: focusDynamic.id}}">
              <div class="ds-list-item-img">
                <img v-lazy="baseUrl + focusDynamic.thumb">
              </div>
              <div class="ds-list-item-text" :title="focusDynamic.title">
                <div class="item-time" :title="focusDynamic.add_time">
                  <b class="year">{{focusDynamic.add_time.substr(0,4)}}</b>
                  <span class="date">{{focusDynamic.add_time.substr(5)}}</span>
                </div>
                <h3 class="elli">{{focusDynamic.title}}</h3>
                <p class="elli item-desc">{{focusDynamic.mydesc}}</p>
              </div>
            </router-link>
          </div>

          <ul class="dynamic-show">
            <router-link
              v-for='(item,index) in dynamicList.slice(1)'
              tag="li"
              class="news-wow dynamic-item-hover fadeInUp"
              :data-wow-delay="(index*0.15)+'s'"
              key="item.id"
              :to="{name:'dynamicdetail',params:{tid: item.tid, id: item.id}}">
              <a class="ds-list-item-text" :title="item.title">
                <div class="item-time" :title="item.add_time">
                  <b class="year">{{item.add_time.substr(0,4)}}</b>
                  <span class="date">{{item.add_time.substr(5)}}</span>
                </div>
                <h3 class="elli">{{item.title}}</h3>
                <p class="elli item-desc">{{item.mydesc}}</p>
              </a>
            </router-link>
          </ul>
        </div>
        <part-loading v-else/>
      </div>
      <div class="known-more-wrap" v-if="dynamicList.length>0">
        <router-link class="known-more-btn btn" :to="{name: 'dynamic'}">更多</router-link>
      </div>
    </div>

    <!--教育出版-->
    <div id="jiaoyu" class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">教育出版<br>
        <small>EDUCATION PUBLISHING</small>
      </h1>
      <div class="content jiaoyu-list">
        <router-link class="jiaoyu-item"
                     v-for="(item, index) in jiaoyuList"
                     :key="index"
                     :to="item.to">
          <div class="item-body"
               v-lazy:background-image="item.img"
               :style="{'background-position': item.bgPosition}">
            <h3>{{item.title}}</h3>
            <p>{{item.subTitle}}</p>
            <span class="link-btn iconfont tx-icon-right1"></span>
          </div>
        </router-link>
      </div>
      <div class="known-more-wrap">
        <router-link class="known-more-btn btn" :to="{name: 'jiaoyuchuban'}">更多</router-link>
      </div>
    </div>

    <!--综合出版-->
    <div id="zonghe" class="index-section bg-white wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">综合出版<br>
        <small>COMPREHENSIVE PUBLISHING</small>
      </h1>
      <div class="content zonghe-list">
        <router-link class="zonghe-item"
                     v-for="(item, index) in zongheList"
                     :key="index"
                     :to="item.to">
          <div class="item-body">
            <div class="item-bg"
                 v-lazy:background-image="item.img"
                 :style="{'background-position': item.bgPosition}"></div>
            <span class="link-btn iconfont tx-icon-right1"></span>
            <h3>{{item.title}}</h3>
            <p>{{item.subTitle}}</p>
          </div>
        </router-link>
      </div>
      <div class="known-more-wrap">
        <router-link class="known-more-btn btn" :to="{name: 'zonghechuban'}">更多</router-link>
      </div>
    </div>

    <!--数字出版-->
    <div id="website" class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">数字出版<br>
        <small>DIGITAL PUBLISHING</small>
      </h1>
      <div class="website-list-scroll-wrap">
        <span class="scroll-to-left" :class="{'disabled':webCurrentPage === 0}" @click="webGoLeft" v-if="isMobile">
          <i class="iconfont tx-icon-down"></i>
        </span>
        <span class="scroll-to-right" :class="{'disabled':webCurrentPage === 2}" @click="webGoRight" v-if="isMobile">
          <i class="iconfont tx-icon-down"></i>
        </span>
        <div class="website-list-scroll">
          <div :style="{transform: 'translate(-'+(33.333 * webCurrentPage)+'%,0)'}" class="content website-list">
            <router-link class="screen-shot"
                         :class="{'is-active': siteScreenshotActiveIndex === index}"
                         v-for="(site,index) in websiteList"
                         :to="site.to"
                         @mouseenter.native="siteScreenshotActive(index)"
                         @mouseleave.native="siteScreenshotActiveIndex = siteScreenshotDefIndex"
                         :key="index">
              <img v-lazy="site.src">
            </router-link>
          </div>
        </div>
      </div>
      <div class="known-more-wrap">
        <router-link class="known-more-btn btn" :to="{name: 'shuzichuban'}">更多</router-link>
      </div>
    </div>

    <!--了解天星-->
    <div id="know-us" class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <div class="content text-content">
        <h1 class="section-title">了解天星<br>
          <small>KNOW TIANXING</small>
        </h1>
        <div class="context">
          天星教育是一家致力于教育图书出版及提供教育信息服务的文化教育机构，自1998年成立以来，已发展成为河南民营书业的旗舰品牌。公司坐落于历史文化源远流长的中原大地，秉承着中原儿女自强不息、上下求索的民族精神，积极投身于文化产业发展的大潮中，为了民族教育的振兴和发展，贡献着自己的智慧和热忱。
        </div>
        <div class="tc mt30">
          <router-link class="text-muted" :to="{name: 'aboutgongsijianjie'}">更多</router-link>
        </div>
      </div>
      <div class="bg-content" v-lazy:background-image="require('../assets/img/index/about_us_bg.png')">
        <div class="content">
          <div class="ku-icon">
            <div class="ku-item">
              <div class="icon"><i class="iconfont tx-icon-mingpian"></i></div>
              <div class="title">公司员工</div>
              <div class="desc">公司现已拥有900+员工</div>
            </div>
            <div class="ku-item">
              <div class="icon"><i class="iconfont tx-icon-rili"></i></div>
              <div class="title">企业创立</div>
              <div class="desc">公司创立于1998年</div>
            </div>
            <div class="ku-item">
              <div class="icon"><i class="iconfont tx-icon-piechart"></i></div>
              <div class="title">业务市场</div>
              <div class="desc">已覆盖全国30个省市地区</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--用户评价-->
    <div id="user-rating" class="index-section bg-white wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">用户评价<br>
        <small>USER RATING</small>
      </h1>
      <div class="rating-list-wrap content">
        <div :style="{transform: !isMobile ? 'translateY('+(-313 * (ratingCurrentPage - 1))+'px)' : ''}"
             class="rating-list">
          <div class="rating-item rating-list-effect"
               v-on="{mouseenter: ratingMouseenter, mouseleave: ratingNextAutoPlay}"
               v-for="(item, index) in userRatingList"
               :key="item.id">
            <div class="item-body" :class="{'active': userRatingListActive === index}">
              <div class="item-context">
                <h3>{{item.username}}
                  <small>{{item.honor}}</small>
                </h3>
                <p v-html="item.content"></p>
              </div>
              <div class="item-photo">
                <img v-lazy="baseUrl + item.icon">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-pointer" v-if="!isMobile && userRatingList.length > 3">
        <span :class="{current: ratingCurrentPage === pointerItem}"
              v-for="(pointerItem,index) in Math.ceil(userRatingList.length / 3)"
              v-on="{mouseenter: ratingMouseenter, mouseleave: ratingNextAutoPlay}"
              @click="ratingNextPage(pointerItem)"></span>
      </div>
    </div>

    <!--联系我们-->

    <div id="contact" v-lazy:background-image="require('../assets/img/index/address_map.png')">
      <div class="content contact-content">
        <div class="position-tips" role="位置标记"></div>
        <div class="content address-info">
          <div class="map-tips">
            <div class="contact-us">
              <h2>联系我们</h2>
              <p>CONTACT US</p>
            </div>
            <div class="contact-info">
              <p class="f16"><i class="iconfont tx-icon-weizhi"></i>河南省郑州市高新区翠竹街1号企业总部基地51-52栋</p>
              <p class="f16"><i class="iconfont tx-icon-shoujiduan"></i>0371-68698036</p>
              <p class="f16"><i class="iconfont tx-icon-email"></i>tianxing@163.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <page-footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from '../components/common/slider'
  import WOW from 'wowjs'
  import {supportWebp} from '../util/isSupportWebp'
  import CF from '../api/index'

  const isSupportWebp = supportWebp()

  export default {
    name: 'PageIndex',
    components: {
      Slider
    },
    metaInfo () {
      return {
        meta: [{
          name: '河南天星教育传媒股份有限公司',
          content: '天星教育是一家致力于教育图书出版及提供教育信息服务的文化教育机构，自1998年成立以来，已发展成为河南民营书业的旗舰品牌。公司坐落于历史文化源远流长的中原大地，秉承着中原儿女自强不息、上下求索的民族精神，积极投身于文化产业发展的大潮中，为了民族教育的振兴和发展，贡献着自己的智慧和热忱。'
        }]
      }
    },
    data () {
      return {
        baseUrl: CF.baseUrl,
        bannerPicNormal: [
          require('../assets/img/banner/banner1.png')
        ],
        bannerPicWebp: [
          require('../assets/img/banner/webp/banner1.webp')
        ],
        dynamicList: [],
        jiaoyuList: [
          {
            title: '试题调研',
            subTitle: '天星教育精品图书',
            img: isSupportWebp ? require('../assets/img/index/webp/jycb_item1.webp') : require('../assets/img/index/jycb_item1.png'),
            bgPosition: '85% 30px',
            to: {name: 'jiaoyuchuban', hash: '#stdy'}
          },
          {
            title: '金考卷',
            subTitle: '天星教育精品图书',
            img: isSupportWebp ? require('../assets/img/index/webp/jycb_item2.webp') : require('../assets/img/index/jycb_item2.png'),
            bgPosition: '100% 30px',
            to: {name: 'jiaoyuchuban', hash: '#jkj'}
          },
          {
            title: '教材帮',
            subTitle: '天星教育精品图书',
            img: isSupportWebp ? require('../assets/img/index/webp/jycb_item3.webp') : require('../assets/img/index/jycb_item3.png'),
            bgPosition: '96% 30px',
            to: {name: 'jiaoyuchuban', hash: '#jcb'}
          },
          {
            title: '一遍过',
            subTitle: '天星教育精品图书',
            img: isSupportWebp ? require('../assets/img/index/webp/jycb_item4.webp') : require('../assets/img/index/jycb_item4.png'),
            bgPosition: '90% 30px',
            to: {name: 'jiaoyuchuban', hash: '#ybg'}
          }
        ],
        zongheList: [
          {
            title: '疯狂阅读',
            subTitle: '专注所以疯狂，激情成就梦想',
            img: isSupportWebp ? require('../assets/img/index/webp/zhcb_item1.webp') : require('../assets/img/index/zhcb_item1.png'),
            bgPosition: '50% 45px',
            to: {name: 'zonghechuban', hash: '#fkyd'}
          },
          {
            title: '疯狂作文',
            subTitle: '高考满分作文系列为高中必备工具书',
            img: isSupportWebp ? require('../assets/img/index/webp/zhcb_item2.webp') : require('../assets/img/index/zhcb_item2.png'),
            bgPosition: '50% 45px',
            to: {name: 'zonghechuban', hash: '#fkzw'}
          },
          {
            title: '天星童书',
            subTitle: '天星童书系列专为0-12岁幼儿设计',
            img: isSupportWebp ? require('../assets/img/index/webp/zhcb_item3.webp') : require('../assets/img/index/zhcb_item3.png'),
            bgPosition: '50% 45px',
            to: {name: 'zonghechuban', hash: '#qqjx'}
          }
        ],
        websiteList: [
          {
            src: isSupportWebp ? require('../assets/img/index/webp/szcb_item1.webp') : require('../assets/img/index/szcb_item1.jpg'),
            to: {name: 'shuzichuban_tianxingjiaoyu', query: {top: 1}}
          },
          {
            src: isSupportWebp ? require('../assets/img/index/webp/szcb_item2.webp') : require('../assets/img/index/szcb_item2.jpg'),
            to: {name: 'shuzichuban_weixuexiquan', query: {top: 1}}
          },
          {
            src: isSupportWebp ? require('../assets/img/index/webp/szcb_item3.webp') : require('../assets/img/index/szcb_item3.jpg'),
            to: {name: 'shuzichuban_weilainao', query: {top: 1}}
          }
        ],
        siteScreenshotDefIndex: 1,
        siteScreenshotActiveIndex: 1,
        webCurrentPage: 0,
        userRatingList: [],
        userRatingListActive: 0,
        ratingCurrentPage: 1,
        ratingTimer: null,
        ratingDuration: 6, // 秒
        pjCurrentIndex: 0
      }
    },
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      },
      focusDynamic () {
        if (this.dynamicList.length > 0) {
          return this.dynamicList[0]
        }
        return false
      },
      bannerPic () {
        return isSupportWebp ? this.bannerPicWebp : this.bannerPicNormal
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.initWOW('wow')
      })
      this.$http.get(CF.getDynamicsList, {
        params: {
          pagesize: 5
        }
      }).then(res => {
        if (!res.data.data) {
          return false
        }
        this.dynamicList = res.data.data
        this.$nextTick(() => {
          this.initWOW('news-wow')
        })
      })
      // 用户评价
      this.$http.get(CF.getReviews, {
        params: {
          pagesize: 6
        }
      }).then(res => {
        if (res.data) {
          this.userRatingList = res.data
        }
      })
      /* 用户评价 自动循环 */
      this.ratingNextAutoPlay()
    },
    methods: {
      initWOW (cls) {
        return new WOW.WOW({
          boxClass: cls,
          animateClass: 'animated',
          offset: 0,
          mobile: false,
          live: false
        }).init()
      },
      siteScreenshotActive (i) {
        if (this.isMobile) return false
        this.siteScreenshotActiveIndex = i
      },
      webGoRight () { // 数字出版滑动效果
        if (!this.isMobile) return false
        if (this.webCurrentPage < 2) {
          this.webCurrentPage++
        }
      },
      webGoLeft () { // 数字出版滑动效果
        if (!this.isMobile) return false
        if (this.webCurrentPage > 0) {
          this.webCurrentPage--
        }
      },
      ratingNextPage (i) { /* 用户评价 */
        this.ratingCurrentPage = i
      },
      ratingMouseenter () {
        this.userRatingListActive = false
        if (this.isMobile) return false
        clearInterval(this.ratingTimer)
      },
      ratingNextAutoPlay () {
        if (this.isMobile) return false
        clearInterval(this.ratingTimer)
        this.ratingTimer = setInterval(() => {
          if (this.ratingCurrentPage < Math.ceil(this.userRatingList.length / 3)) {
            this.ratingCurrentPage += 1
          } else {
            this.ratingCurrentPage = 1
          }
        }, this.ratingDuration * 1000)
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/css/base.less";

  @effectFunc: cubic-bezier(0.19, 1, 0.22, 1);

  .page-index {
    /*section*/
    .section-title {
      font-weight: 400;
      padding: 0 0 30px;
      line-height: 1.2;
      text-align: center;
      font-size: 24px;
      small {
        font-size: 14px;
        color: #ccc;
      }
    }

    .index-section {
      padding: 60px 0;
      background-color: #fff;
    }

    .index-section-gray {
      background-color: #f3f5f7;
    }

    /*更多按钮*/
    .known-more-wrap {
      padding: 40px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 2px;
    }
    .known-more-btn {
      border-color: #e1e1e1;
      background-color: #fff;
      color: #9fa5ac;
      font-size: 14px;
      padding: 0.55em 4.5em;
      transition: all 0.3s;
      transform: translateZ(0);
      &:hover {
        color: #fff;
        border-color: @primary;
        background-color: @primary;
        box-shadow: 0 6px 32px fade(#1C3C68, 20%);
      }
    }
  }

  /*平台数据*/
  #platform-data {
    position: relative;
    height: 150px;
    margin-top: -44px;
    .content {
      height: 100%;
      background-color: #fff;
      box-shadow: 0 10px 30px -8px fade(@primary-lighter, 20%);
      align-content: center;
    }
    .data-item {
      height: 100%;
      box-sizing: border-box;
      padding-top: 34px;
      position: relative;
      float: left;
      width: 25%;
      text-align: center;
      .num {
        font-size: 36px;
        margin-bottom: 5px;
        sup {
          top: -20px;
          font-size: 14px;
          color: #aaa;
        }
      }
      &:not(:first-child):after {
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        content: '';
        width: 1px;
        height: 26px;
        margin-top: -13px;
        background-color: #eee;
      }
      p {
        color: #999;
      }
    }
  }

  /*天星动态*/
  #dynamic {
    .dynamic-focus {
      float: left;
      width: 610px;
      border-radius: 3px;
      background-color: #f3f5f7;

      .ds-list-item {
        display: block;
        width: 570px;
        padding: 20px;
        transition: box-shadow 0.3s;
        &:hover {
          box-shadow: 0 5px 30px -4px rgba(0, 0, 0, .2);
        }
      }
      .ds-list-item-text {
        padding-top: 18px;
        padding-left: 65px;
        .item-time {
          /*padding-left: 0;*/
        }
      }
      .ds-list-item-img {
        width: 570px;
        position: relative;
        height: 279px;
        overflow: hidden;
        img {
          max-width: 100%;
          display: block;
        }
      }
    }

    .dynamic-item-hover {
      position: relative;
      overflow: hidden;
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: @primary;
        transform: translate3d(0, 110%, 0);
        opacity: 0.9;
        transition: transform 0.4s cubic-bezier(.19, 1, .22, 1);
      }
      &:hover {
        &:after {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    }

    .dynamic-show {
      float: right;
      width: 464px;
      li {
        box-sizing: border-box;
        margin-bottom: 15px;
        border-radius: 3px;
        transition: all 0.2s;
        background-color: #f3f5f7;
      }
      .ds-list-item-text {
        position: relative;
        z-index: 1;
        padding: 20px 20px 20px 85px;
        &:hover {
          p, h3 {
            color: #fff;
          }
          .item-time {
            b, span {
              color: #fff;
            }
          }
        }
      }
    }

    .ds-list-item-text {
      display: block;
      box-sizing: border-box;
      padding-left: 85px;
      img {
        width: 100%;
      }
      h3 {
        font-size: 14px;
        color: #7b7b7b;
        font-weight: 400;
        height: 1.3em;
        line-height: 1.3;
        margin-top: 1px;
        margin-bottom: 8px;
        text-overflow-ellipsis: ellipsis;
        overflow: hidden;
        transition: all 0.3s;
      }
      .item-desc {
        height: 1.3em;
        line-height: 1.3;
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #afafaf;
        transition: all 0.3s;
      }
      .item-time {
        text-align: center;
        float: left;
        margin-left: -85px;
        padding-left: 20px;
        .year {
          font-size: 16px;
          color: #999999;
          display: block;
          border-bottom: 1px solid #eee;
        }
        .date {
          color: #999999;
          font-size: 13px;
          display: block;
        }
      }
    }
  }

  /*教育出版*/
  #jiaoyu {
    .jiaoyu-list {
      display: flex;
      flex-wrap: wrap;
      .jiaoyu-item {
        display: block;
        padding: 10px;
        box-sizing: border-box;
        width: 50%;
        .item-body {
          background-color: #fff;
          background-position: 90% 45px;
          background-repeat: no-repeat;
          padding: 30px;
          transform: translateZ(0);
          transition: box-shadow .3s, background-position .3s;
          h3 {
            font-size: 16px;
          }
          p {
            color: #9fa5ac;
            margin-top: 6px;
          }
          .link-btn {
            display: block;
            margin-top: 25px;
            width: 34px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            border-radius: 50%;
            border: 1px solid #eee;
            color: #ddd;
            font-size: 18px;
            transition: all .3s;
          }
          &:hover {
            background-position-y: 15px !important;
            box-shadow: 0 5px 20px -5px rgba(0, 0, 0, .2);
            .link-btn {
              background-color: @primary;
              border-color: @primary;
              color: #fff;
            }
          }
        }
      }
    }
  }

  /*综合出版*/
  #zonghe {
    .zonghe-list {
      display: flex;
      .zonghe-item {
        display: block;
        width: 33.333%;
        padding: 10px;
        .item-body {
          position: relative;
          padding: 0 30px 26px;
          transform: translateZ(0);
          transition: box-shadow .3s;
          .item-bg {
            height: 230px;
            margin: 0 -30px;
            background-color: #f3f5f7;
            background-position: 50% 40px;
            background-repeat: no-repeat;
            transform: translateZ(0);
            transition: background-position .3s;
          }
          h3 {
            margin-top: 25px;
            font-size: 16px;
          }
          p {
            color: #9fa5ac;
            margin-top: 6px;
          }
          .link-btn {
            position: absolute;
            bottom: 36px;
            right: 30px;
            display: block;
            margin-top: 25px;
            width: 34px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            border-radius: 50%;
            border: 1px solid #eee;
            color: #ddd;
            font-size: 18px;
            transition: all .3s;
          }
          &:hover {
            .item-bg {
              background-position-y: 20px !important;
            }
            box-shadow: 0 5px 20px -5px rgba(0, 0, 0, .2);
            .link-btn {
              background-color: @primary;
              border-color: @primary;
              color: #fff;
              transform: translateY(-48px);
            }
          }
        }
      }
    }
  }

  /*了解天星*/
  #know-us {
    padding-top: 0;
    .text-content {
      position: relative;
      z-index: 1;
      max-width: 1020px;
      box-sizing: border-box;
      padding: 50px 50px 40px;
      margin-bottom: -148px;
      border-radius: 6px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      .context {
        color: #9fa5ac;
        line-height: 1.7;
      }
    }
    .bg-content {
      box-sizing: border-box;
      height: 500px;
      padding-top: 200px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      .ku-icon {
        display: flex;
        flex-wrap: nowrap;
        padding: 30px 50px;
        .ku-item {
          width: 33.33%;
          text-align: center;
          transition: transform .3s;
          .icon {
            box-sizing: border-box;
            width: 106px;
            height: 106px;
            margin: 0 auto;
            background-color: rgba(255, 255, 255, .02);
            border: 1px solid rgba(139, 158, 204, 0.3);
            border-radius: 50%;
            line-height: 106px;
            box-shadow: 0 8px 30px -6px rgba(0, 0, 0, .2);
            transform-style: preserve-3d;
            .iconfont {
              /*transition:all .4s;*/
              display: inline-block;
              font-size: 33px;
              color: rgba(255, 255, 255, .7);
              transition: font-size 0.3s;
            }
          }
          .title {
            padding-top: 30px;
            font-size: 16px;
            color: #fff;
          }
          .desc {
            margin-top: 13px;
            font-size: 13px;
            color: rgba(255, 255, 255, .4);
          }

          @itemScale: 1.01;
          @fontSizeScale: 40px;
          &:nth-child(1):hover {
            transform: scale(@itemScale);
            .iconfont {
              font-size: @fontSizeScale;
              animation: iconEffect1 2.5s 0.25s cubic-bezier(0.19, 1, 0.22, 1);
            }
          }
          &:nth-child(2):hover {
            transform: scale(@itemScale);
            .iconfont {
              font-size: @fontSizeScale;
              animation: iconEffect2 2.5s 0.25s cubic-bezier(0.19, 1, 0.22, 1);
            }
          }
          &:nth-child(3):hover {
            transform: scale(@itemScale);
            .iconfont {
              font-size: @fontSizeScale;
              animation: iconEffect3 2.5s 0.25s cubic-bezier(0.19, 1, 0.22, 1);
            }
          }
        }
      }
    }
  }

  /*用户评价*/
  #user-rating {
    .rating-list-wrap {
      height: 313px;
      position: relative;
      overflow: hidden;
    }
    .rating-list {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      transition: transform 1.4s @effectFunc;
      .rating-item {
        width: 33.333%;
        padding: 13px;
        box-sizing: border-box;
        .item-body {
          transform: translateZ(0);
          transition: transform .3s;
          .item-context {
            position: relative;
            height: 186px;
            box-sizing: border-box;
            padding: 26px 30px;
            border-radius: 4px;
            background-color: #f3f5f7;
            background-position: 50% 40px;
            background-repeat: no-repeat;
            transform: translateZ(0);
            transition: background-color .3s, box-shadow .3s, transform .3s;
            &:after {
              position: absolute;
              bottom: -4px;
              left: 35px;
              margin-left: -8px;
              content: '';
              display: block;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 4px 10px 0 10px;
              border-color: #f3f5f7 transparent transparent transparent;
              transition: all .3s;
            }
            h3 {
              font-size: 16px;
              transition: color .3s;
              small {
                font-size: 13px;
                color: #9fa5ac;
                margin-left: 10px;
                transition: color .3s;
              }
            }
            p {
              color: #9fa5ac;
              margin-top: 15px;
              font-size: 13px;
              line-height: 1.9;
              transition: color .3s;
            }
          }
          .item-photo {
            display: block;
            width: 70px;
            height: 70px;
            margin-top: 30px;
            border-radius: 50%;
            transform: translateZ(0);
            transition: box-shadow .3s;
            overflow: hidden;
            img {
              display: block;
              width: 100%;
              height: 100%;
              transition: transform .3s;
            }
          }
          &:hover, &.active {
            .item-context {
              background-color: @primary;
              transform: translateY(-8px);
              box-shadow: 0 10px 30px -8px rgba(0, 0, 0, .2);
              &:after {
                bottom: -12px;
                border-width: 12px 10px 0 10px;
                border-color: @primary transparent transparent transparent;
              }
              h3 {
                color: #fff;
                small {
                  color: #fff;
                }
              }
              p {
                color: #fff;
              }
            }
            .item-photo {
              box-shadow: 0 5px 30px -5px rgba(0, 0, 0, .2);
              img {
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }

    /*slider-pointer*/
    .slide-pointer {
      padding-top: 30px;
      text-align: center;
      font-size: 0;
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 0 5px;
        border-radius: 50%;
        border: 1px solid #cececf;
        background-color: #fff;
        transition: all 0.3s;
        cursor: pointer;
        &.current {
          cursor: default;
          background-color: @primary;
          border-color: @primary;
        }
        &:hover {
          border-color: @primary;
        }
      }
    }
  }

  /*数字出版*/
  #website {
    .website-list {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      padding: 45px 0;
      .screen-shot {
        display: block;
        position: relative;
        width: 33.33%;
        box-shadow: 0 3px 10px -2px rgba(0, 0, 0, .2);
        transform: scale(0.93);
        transition: transform 0.8s @effectFunc;
        &.is-active {
          z-index: 1;
          transform: scale(1.23);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, .2);
        }
        img {
          max-width: 100%;
        }
      }
    }
  }

  /*地址*/
  #contact {
    height: 652px;
    background-position: 50% 0;
    background-repeat: no-repeat;
    font-weight: 400;
    .contact-content {
      height: 652px;
      position: relative;
    }

    .position-tips {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 54%;
      left: 31.89%;
      border-radius: 50%;
      background-color: @primary;
      transform: translate3d(-50%, -50%, 0);
      &:before, &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate3d(-50%, -50%, 0);
        content: '';
        display: block;
        background-color: @primary;
      }
      &:before {
        width: 40px;
        height: 40px;
        opacity: 0.7;
        animation: position-tips-effect 3s 0.3s infinite;
      }
      &:after {
        width: 90px;
        height: 90px;
        opacity: 0.7;
        animation: position-tips-effect 3s infinite;
      }
    }
    .address-info {
      position: absolute;
      top: 54%;
      left: 66.9%;
      transform: translate3d(-50%, -50%, 0);
      &:after {
        @angleSize: 153px;
        position: absolute;
        top: 50%;
        left: -@angleSize + 5px;
        margin-top: -@angleSize;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: @angleSize @angleSize @angleSize 0;
        border-color: transparent fade(@primary, 25%) transparent transparent;
        transition: all .3s;
        overflow: hidden;
      }
      .map-tips {
        background-color: @primary;
        width: 480px;
        box-sizing: border-box;
        border-radius: 4px;
        .contact-us {
          padding: 30px 30px 20px;
          border-bottom: 1px solid #3d84dc;
          color: #fff;
          h2 {
            font-size: 24px;
            &:after {
              margin-top: 3px;
              content: '';
              display: block;
              height: 0;
              border-bottom: 1px solid #60a1f2;
              width: 6em;
            }
          }
          p {
            opacity: 0.7;
            margin-top: 8px;
          }
        }
        .contact-info {
          padding: 30px 30px 35px 20px;
          .iconfont {
            display: inline-block;
            width: 30px;
            margin-left: -30px;
            text-align: center;
            font-size: 20px;
            color: rgba(255, 255, 255, .7);
          }
          p {
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            padding-top: 5px;
            padding-bottom: 5px;
            &:nth-child(1) {
              .iconfont {
                font-size: 20px;
              }
            }
            &:nth-child(2) {
              .iconfont {
                font-size: 22px;
              }
            }
            &:nth-child(3) {
              .iconfont {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  /* 动画 */

  /*rating-list-transition*/
  .rating-list-effect {
    transition: opacity 0.3s;
  }

  .rating-list-effect-enter, .rating-list-effect-leave-to {
    opacity: 0;
  }

  .rating-list-effect-enter-to, .rating-list-effect-leave {
    opacity: 1;
  }

  /*icon-animation*/
  @perspective: 70px;
  @startAngle: 20deg;
  @endAngle: -360deg;
  @keyframes iconEffect1 {
    0% {
      transform: perspective(@perspective) translateZ(0);
    }
    20% {
      transform: perspective(@perspective) rotateY(@startAngle);
    }
    100% {
      transform: perspective(@perspective) rotateY(@endAngle);
    }
  }

  @keyframes iconEffect2 {
    0% {
      transform: perspective(@perspective) translateZ(0);
    }
    20% {
      transform: perspective(@perspective) rotate3d(-1, -1, 0, @startAngle);
    }
    100% {
      transform: perspective(@perspective) rotate3d(-1, -1, 0, @endAngle);
    }
  }

  @keyframes iconEffect3 {
    0% {
      transform: perspective(@perspective) translateZ(0);
    }
    20% {
      transform: perspective(@perspective) rotate3d(1, -1, 0, @startAngle);
    }
    100% {
      transform: perspective(@perspective) rotate3d(1, -1, 0, @endAngle);
    }
  }

  /* 公司位置提示动画 */
  @keyframes position-tips-effect {
    0% {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) scale(0.3);
    }
    95% {
      opacity: 0.1;
      transform: translate3d(-50%, -50%, 0) scale(1.15);
    }
    100% {
      opacity: 0;
      transform: translate3d(-50%, -50%, 0) scale(1.2);
    }
  }

  @media screen and (max-width: 767px) {
    .page-index {
      .known-more-wrap {
        padding: 20px;
        padding-bottom: 2px;
      }

      /*section*/
      .section-title {
        padding: 0 0 20px;
        small {
          font-weight: 300;
        }
      }

      .index-section {
        padding: 30px 0;
      }
    }

    /*平台数据*/
    #platform-data {
      /*position: relative;*/
      height: auto;
      margin-top: 0;
      .content {
        padding: 30px 10px;
        /*height: 100%;*/
        background-color: #fff;
        box-shadow: 0 10px 30px -8px fade(@bg-body, 90%);
        align-content: center;
      }
      .data-item {
        height: auto;
        padding: 5px 0 10px;
        box-sizing: border-box;
        float: left;
        width: 50%;
        text-align: center;
        .num {
          font-size: 26px;
          margin-bottom: 0;
          sup {
            top: -20px;
            font-size: 12px;
            color: #aaa;
          }
        }
        &:not(:first-child):after, &:nth-child(4):before {
          display: block;
          content: '';
          position: absolute;
          width: 1px;
          height: 1px;
          top: 0;
          left: 0;
          margin-top: 0;
          background-color: #eee;
        }
        &:nth-child(2):after {
          bottom: 0;
          height: 100%;
        }
        &:nth-child(3):after {
          width: 100%;
          top: 0;
          height: 1px;
        }
        &:nth-child(4):before {
          width: 100%;
        }
        &:nth-child(4):after {
          height: 100%;
        }
        p {
          font-size: 12px;
          color: #999;
        }
      }
    }

    /*天星动态*/
    #dynamic {
      @itemPdLeft: 70px;
      .dynamic-focus {
        float: none;
        width: auto;
        .ds-list-item {
          width: auto;
          padding: 10px;
          &:hover {
            box-shadow: none;
          }
        }
        .ds-list-item-text {
          padding-top: 10px;
          padding-left: @itemPdLeft - 10px;
        }
        .ds-list-item-img {
          width: auto;
          height: auto;
        }
      }

      .dynamic-show {
        float: none;
        width: auto;
        margin-top: 10px;
        li {
          margin-bottom: 10px;
        }
        .ds-list-item-text {
          padding: 10px 10px 10px @itemPdLeft;
        }
      }

      .ds-list-item-text {
        padding-left: @itemPdLeft;
        .item-time {
          margin-left: -@itemPdLeft;
          padding-left: 15px;
        }
      }
    }

    /*教育出版*/
    #jiaoyu {
      .jiaoyu-list {
        .jiaoyu-item {
          padding: 6px 5px;
          width: 100%;
          .item-body {
            background-size: 50%;
            padding: 15px;
            h3 {
              font-weight: 700;
            }
          }
        }
      }
    }

    /*综合出版*/
    #zonghe {
      .zonghe-list {
        flex-wrap: wrap;
        .zonghe-item {
          width: 100%;
          padding: 6px 5px;
          .item-body {
            padding: 0 15px 14px;
            border: 1px solid #f3f5f7;
            .item-bg {
              height: 140px;
              margin: 0 -15px;
              background-position: 50% 20px !important;
              background-size: 70%;
            }
            h3 {
              font-weight: 700;
              margin-top: 15px;
            }
            .link-btn {
              right: 15px;
              bottom: 23px;
            }
            &:hover {
              box-shadow: none;
              .item-bg {
                background-position: 50% 10px !important;
              }
              .link-btn {
                transform: translateY(-39px);
              }
            }
          }
        }
      }
    }

    /*数字出版*/
    #website {
      .website-list-scroll-wrap{
        position: relative;
        .scroll-to-left,.scroll-to-right{
          height:50px;
          line-height:50px;
          width:50px;
          position: absolute;
          top:50%;
          color:#888;
          margin-top:-25px;
          text-align: center;
          .iconfont{
            font-size:30px;
            display: inline-block;
          }
          &:active{
            color:#666;
          }
          &.disabled{
            opacity: 0.6;
          }
        }
        .scroll-to-left{
          transform: rotateZ(90deg);
          left:0;
        }
        .scroll-to-right{
          right:0;
          transform: rotateZ(-90deg);
        }
      }
      .website-list-scroll {
        width: auto;
        overflow: hidden;
        box-sizing: border-box;
        margin: 0 40px;
      }
      .website-list {
        width: 300%;
        flex-wrap: nowrap;
        margin-bottom: 8px;
        padding:15px 0;
        transition: transform 1.2s @effectFunc;
        .screen-shot {
          width: 98%;
          box-sizing: border-box;
          margin: 8px 1%;
          box-shadow: 0 1px 10px -1px rgba(0, 0, 0, .2);
          transform: scale(1);
          &.is-active {
            transform: scale(1);
            box-shadow: 0 1px 10px -1px rgba(0, 0, 0, .2);
          }
          img {
            display: block;
            max-width: 100%;
          }
        }
      }
    }

    /*了解天星*/
    #know-us {
      padding-top: 0;
      padding-bottom: 0;
      .text-content {
        padding: 30px 30px 20px;
        margin: 0 12px -150px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
      }
      .bg-content {
        padding-top: 220px;
        .ku-icon {
          padding: 20px 0;
          .ku-item {
            .icon {
              @iconSize: 90px;
              width: @iconSize;
              height: @iconSize;
              line-height: @iconSize;
            }
            .title {
              padding-top: 20px;
            }
            .desc {
              margin-top: 4px;
              font-size: 11px;
            }
          }
        }
      }
    }

    /*用户评价*/
    #user-rating {
      .rating-list-wrap {
        height: auto;
      }
      .rating-list {
        position: static;
        width: 100%;
        .rating-item {
          width: 100%;
          padding: 10px 3px 20px;
          .item-body {
            .item-context {
              &:after {
                bottom: -3px;
              }
              h3 {
                font-weight: 700;
              }
            }
            .item-photo {
              margin-top: 20px;
            }
            &:hover {
              .item-context {
                transform: translateY(-6px);
                &:after {
                  bottom: -10px;
                }
              }
              .item-photo {
                background-size: 100%;
                box-shadow: none;
              }
            }
          }
        }
      }

      /*slider-pointer*/
      .slide-pointer {
        padding-top: 30px;
        text-align: center;
        font-size: 0;
        span {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin: 0 5px;
          border-radius: 50%;
          border: 1px solid #cececf;
          background-color: #fff;
          transition: all 0.3s;
          cursor: pointer;
          &.current {
            cursor: default;
            background-color: @primary;
            border-color: @primary;
          }
          &:hover {
            border-color: @primary;
          }
        }
      }
    }

    /*地址*/
    #contact {
      height: 400px;
      background-size: cover;
      .contact-content {
        width: 300px;
        height: 400px;
      }

      .position-tips {
        left: 11.89%;
        transform: scale(.6) translate3d(-50%, -50%, 0);
        transform-origin: top left;
      }
      .address-info {
        left: 66.9%;
        width: 100%;
        transform: scale(0.6) translate3d(-50%, -50%, 0);
        transform-origin: top left;
        &:after {
          @angleSize: 137px;
          left: -@angleSize + 10px;
          margin-top: -@angleSize;
          border-width: @angleSize @angleSize @angleSize 0;
        }
        .map-tips {
          max-width: 100%;
        }
      }
    }
  }
</style>
