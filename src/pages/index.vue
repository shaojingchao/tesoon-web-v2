<template>
  <div class="page-index">
    <page-header/>
    <Slider class="slider-wrap" :bannerPics="bannerPics" :style="{height:'600px'}" :time="4"/>
    <div class="platform-data">
      <div class="content clearfix">
        <div class="data-item wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
          <div class="num hide-xs">5000<sup>+</sup></div>
          <p>5000余位特优级教师加盟</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.5s">
          <div class="num hide-xs">7</div>
          <p>开创7大教辅品牌</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
          <div class="num hide-xs">26</div>
          <p>推出26大畅销系列</p>
        </div>
        <div class="data-item wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.9s">
          <div class="num hide-xs">2000<sup>+</sup></div>
          <p>单品研发2000余册</p>
        </div>
      </div>
    </div>

    <!--天星动态-->
    <div class="index-section bg-white wow fadeInUp" data-wow-offset="100">
      <h1 class="section-title">天星动态<br>
        <small>STAR EDUCATION</small>
      </h1>

      <div class="content dynamic-content clearfix">

        <div class="clearfix" v-if="dynamicList.length > 0">
          <div class="dynamic-focus news-wow fadeInUp">
            <router-link class="ds-list-item"
                         :title="dynamicList[0].title"
                         :to="{path:'/dynamic/0/'+dynamicList[0].id}">
              <div class="ds-list-item-img">
                <img :src="baseUrl + dynamicList[0].thumb">
              </div>
              <div class="ds-list-item-text" :title="dynamicList[0].title">
                <div class="item-time" :title="dynamicList[0].add_time">
                  <b class="year">{{dynamicList[0].add_time.substr(0,4)}}</b>
                  <span class="date">{{dynamicList[0].add_time.substr(5)}}</span>
                </div>
                <h3 class="elli">{{dynamicList[0].title}}</h3>
                <p class="elli item-desc">{{dynamicList[0].mydesc}}</p>
              </div>
            </router-link>
          </div>

          <ul class="dynamic-show">
            <router-link
              class="news-wow dynamic-item-hover fadeInUp"
              :data-wow-delay="(index*0.15)+'s'"
              tag="li"
              v-for='(item,index) in dynamicList.slice(1,5)'
              key="item.id"
              :to="{path:'/dynamic/0/'+item.id}">
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
        <div class="tc text-muted f16 p20" v-else>暂无内容</div>
      </div>
      <div class="content tc pt30 mt30 pb30" v-if="dynamicList.length>0">
        <router-link class="known-more-btn btn" to="/dynamic">更多</router-link>
      </div>
    </div>

    <!--教育出版-->
    <div class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">教育出版<br>
        <small>EDUCATION PUBLISHING</small>
      </h1>
      <div class="content jiaoyu-list">
        <div class="jiaoyu-item"
             v-for="(item, index) in jiaoyuList">
          <div class="item-body"
               :style="{'background-image':'url('+item.img+')', 'background-position': item.bgPosition}">
            <h3>{{item.title}}</h3>
            <p>{{item.subTitle}}</p>
            <a :href="item.to" class="link-btn iconfont tx-icon-right1"></a>
          </div>
        </div>
      </div>
      <div class="content tc pt30 mt30 pb30">
        <router-link class="known-more-btn btn" to="/dynamic">更多</router-link>
      </div>
    </div>

    <!--综合出版-->
    <div class="index-section bg-white wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">综合出版<br>
        <small>COMPREHENSIVE PUBLICATION</small>
      </h1>
      <div class="content zonghe-list">
        <div class="zonghe-item"
             v-for="(item, index) in zongheList">
          <div class="item-body">
            <div class="item-bg"
                 :style="{'background-image':'url('+item.img+')', 'background-position': item.bgPosition}"></div>
            <a :href="item.to" class="link-btn iconfont tx-icon-right1"></a>
            <h3>{{item.title}}</h3>
            <p>{{item.subTitle}}</p>
          </div>
        </div>
      </div>
      <div class="content tc pt30 mt30 pb30">
        <router-link class="known-more-btn btn" to="/dynamic">更多</router-link>
      </div>
    </div>

    <!--数字出版-->
    <div id="website" class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">数字出版<br>
        <small>DIGITAL PUBLISHING</small>
      </h1>
      <div class="content website-list">
        <div class="screen-shot"
             :class="{'is-active': siteScreenshotActiveIndex === index}"
             v-for="(site,index) in websiteList"
             @mouseenter="siteScreenshotActive(index)"
             @mouseleave="siteScreenshotActiveIndex = siteScreenshotDefIndex"
             :key="index">
          <img :src="site">
        </div>
      </div>
      <div class="content tc pt30 mt30 pb30">
        <router-link class="known-more-btn btn" to="/dynamic">更多</router-link>
      </div>
    </div>

    <!--了解天星-->
    <div id="know-us" class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <div class="content text-content">
        <h1 class="section-title">了解天星<br>
          <small>KNOW THE STARS</small>
        </h1>
        <div class="context">
          天星教育是一家致力于教育图书出版及提供教育信息服务的文化教育机构，自1998年成立以来，已发展成为河南民营书业的旗舰品牌。公司坐落于历史文化源远流长的中原大地，秉承着中原儿女自强不息、上下求索的民族精神，积极投身于文化产业发展的大潮中，为了民族教育的振兴和发展，贡献着自己的智慧和热忱。
        </div>
        <div class="tc mt30"><a href="" class="text-muted">更多</a></div>
      </div>
      <div class="bg-content">
        <div class="content">
          <div class="ku-icon">
            <div class="ku-item">
              <div class="icon" style="animation-name: iconEffect2"><i class="iconfont tx-icon-mingpian"></i></div>
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
        <div :style="{transform: 'translateY('+(-313 * (ratingCurrentPage - 1))+'px)'}" class="rating-list">
          <div class="rating-item rating-list-effect"
               v-on="{mouseenter: ratingMouseenter, mouseleave: ratingNextAutoPlay}"
               v-for="(item, index) in userRatingList"
               :key="item.id">
            <div class="item-body">
              <div class="item-context">
                <h3>{{item.userName}}
                  <small>{{item.jobTitle}}</small>
                </h3>
                <p>{{item.comment}}</p>
              </div>
              <div class="item-photo"
                   :style="{'background-image':'url('+item.photo+')'}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-pointer">
        <span :class="{current: ratingCurrentPage === pointerItem}"
              v-for="(pointerItem,index) in Math.ceil(userRatingList.length / 3)"
              v-on="{mouseenter: ratingMouseenter, mouseleave: ratingNextAutoPlay}"
              @click="ratingNextPage(pointerItem)"></span>
      </div>
    </div>

    <!--联系我们-->

    <div id="contact" class="wow fadeInUp" data-wow-offset="200">
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
  import MyHeader from '../components/indexHeader'
  import Slider from '../components/common/slider'
  import WOW from '../bower_components/wow/dist/wow.min'
  import CF from '../api/index'

  export default {
    name: 'PageIndex',
    components: {
      MyHeader,
      Slider
    },
    metaInfo () {
      return {
        title: '天星教育 - 首页',
        meta: [{
          name: '河南天星教育传媒股份有限公司',
          content: '天星教育是一家致力于教育图书出版及提供教育信息服务的文化教育机构，自1998年成立以来，已发展成为河南民营书业的旗舰品牌。公司坐落于历史文化源远流长的中原大地，秉承着中原儿女自强不息、上下求索的民族精神，积极投身于文化产业发展的大潮中，为了民族教育的振兴和发展，贡献着自己的智慧和热忱。'
        }]
      }
    },
    data () {
      return {
        baseUrl: CF.baseUrl,
        bannerPics: [
          require('../assets/img/banner/banner1.png'),
          require('../assets/img/banner/idx_banner_1.png')
        ],
        clientSize: {},
        dynamicList: [],
        jiaoyuList: [
          {
            title: '试题调研',
            subTitle: '天星教育精品图书',
            img: require('../assets/img/index/jycb_item1.png'),
            bgPosition: '85% 30px',
            to: ''
          },
          {
            title: '试题调研',
            subTitle: '天星教育精品图书',
            img: require('../assets/img/index/jycb_item2.png'),
            bgPosition: '100% 30px',
            to: ''
          },
          {
            title: '试题调研',
            subTitle: '天星教育精品图书',
            img: require('../assets/img/index/jycb_item3.png'),
            bgPosition: '96% 30px',
            to: ''
          },
          {
            title: '试题调研',
            subTitle: '天星教育精品图书',
            img: require('../assets/img/index/jycb_item4.png'),
            bgPosition: '90% 30px',
            to: ''
          }
        ],
        zongheList: [
          {
            title: '疯狂阅读',
            subTitle: '专注所以疯狂，激情成就梦想',
            img: require('../assets/img/index/zhcb_item1.png'),
            bgPosition: '50% 45px',
            to: ''
          },
          {
            title: '疯狂作文',
            subTitle: '高考满分作文系列为高中必备工具书',
            img: require('../assets/img/index/zhcb_item2.png'),
            bgPosition: '50% 45px',
            to: ''
          },
          {
            title: '天星童书',
            subTitle: '天星童书系列专为0-12岁幼儿设计',
            img: require('../assets/img/index/zhcb_item3.png'),
            bgPosition: '50% 45px',
            to: ''
          }
        ],
        websiteList: [
          require('../assets/img/index/szcb_item2.png'),
          require('../assets/img/index/szcb_item2.png'),
          require('../assets/img/index/szcb_item2.png')
        ],
        siteScreenshotDefIndex: 1,
        siteScreenshotActiveIndex: 1,
        userRatingList: [
          {
            id: 1,
            userName: '刘**2',
            jobTitle: '',
            photo: require('../assets/img/index/user_photo1.png'),
            comment: '已经第6次买了吧，从第一辑开始就一直在买 给亲弟弟买的，希望能对他学习有帮助。距离高考没有多少时间了，祝他可以保持成绩，高考超常发挥！'
          },
          {
            id: 2,
            userName: '水**阿',
            jobTitle: '特级教师',
            photo: require('../assets/img/index/user_photo2.png'),
            comment: '从第一辑买到现在，虽然有点小贵但是觉得还是有价值的。里面内容很详细，有一些小的知识点，总体来说还是可以的。支持天星教育！'
          },
          {
            id: 3,
            userName: 'p**你',
            jobTitle: '',
            photo: require('../assets/img/index/user_photo3.png'),
            comment: '超级棒，有很大的帮助，找到了580分瓶颈的突破口，而且性价比很高，复习效率明显提高，方法也更科学高效。'
          },
          {
            id: 4,
            userName: '刘**2-1',
            jobTitle: '',
            photo: require('../assets/img/index/user_photo2.png'),
            comment: '已经第6次买了吧，从第一辑开始就一直在买 给亲弟弟买的，希望能对他学习有帮助。距离高考没有多少时间了，祝他可以保持成绩，高考超常发挥！'
          },
          {
            id: 5,
            userName: '水**阿-1',
            jobTitle: '特级教师',
            photo: require('../assets/img/index/u-pic.png'),
            comment: '从第一辑买到现在，虽然有点小贵但是觉得还是有价值的。里面内容很详细，有一些小的知识点，总体来说还是可以的。支持天星教育！'
          },
          {
            id: 6,
            userName: 'p**你-1',
            jobTitle: '',
            photo: require('../assets/img/index/u-pic_1.jpg'),
            comment: '超级棒，有很大的帮助，找到了580分瓶颈的突破口，而且性价比很高，复习效率明显提高，方法也更科学高效。'
          }
        ],
        ratingCurrentPage: 1,
        ratingTimer: null,
        ratingDuration: 6, // 秒
        pjCurrentIndex: 0
      }
    },
    computed: {
      isMobile () {
        return document.body.clientWidth <= 767
      },
      mobileWidth () {
        return document.body.clientWidth
      },
      computedWidth () {
        return this.isMobile ? this.mobileWidth * 0.78 : 1000
      }
    },
    mounted () {
      this.initWOW('wow').init()
      this.$http.get(CF.getDynamicsList + '?pagesize=' + 6).then(res => {
        console.log(res)
        if (!res.data.data) {
          return false
        }
        this.dynamicList = res.data.data
        this.$nextTick(() => {
          this.initWOW('news-wow').init()
        })
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
          live: true
        })
      },
      siteScreenshotActive (i) {
        console.log('4232434')
        this.siteScreenshotActiveIndex = i
      },
      ratingNextPage (i) { /* 用户评价 */
        this.ratingCurrentPage = i
      },
      ratingMouseenter () {
        clearInterval(this.ratingTimer)
      },
      ratingNextAutoPlay () {
        clearInterval(this.ratingTimer)
        this.ratingTimer = setInterval(() => {
          if (this.ratingCurrentPage < Math.ceil(this.userRatingList.length / 3)) {
            this.ratingCurrentPage += 1
          } else {
            this.ratingCurrentPage = 1
          }
        }, this.ratingDuration * 1000)
      },
      scrollPingJia (i) {
        if (i < 0 || i > this.pingJiaList.length - 1) {
          return false
        } else {
          this.pjCurrentIndex = i
        }
      },
      scrollPingJiaRight () {
        this.scrollPingJia(this.pjCurrentIndex + 1)
      },
      scrollPingJiaLeft () {
        this.scrollPingJia(this.pjCurrentIndex - 1)
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/css/base.less";

  @effectFunc: cubic-bezier(0.19, 1, 0.22, 1);

  .page-index {
    /*更多按钮*/
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
        transform: translateY(-2px);
      }
    }

    /*教育出版*/
    .jiaoyu-list {
      display: flex;
      flex-wrap: wrap;
      .jiaoyu-item {
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

    /*综合出版*/
    .zonghe-list {
      display: flex;
      .zonghe-item {
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
    .section-text {
      width: 75%;
      margin: 0 auto;
      font-size: 16px;
      color: #666;
      text-align: center;
      padding-bottom: 30px;
    }
    .section-img {
      margin-top: 20px;
      margin-bottom: 30px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
    .section-img, .sub-img {
      text-align: center;
      img {
        max-width: 90%;
      }
    }
  }

  .index-section-gray {
    background-color: #f3f5f7;
  }

  /*天星动态*/
  .dynamic-content {
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

  /*了解天星*/
  #know-us {
    .text-content {
      position: relative;
      z-index: 1;
      margin-bottom: -148px;
      max-width: 1020px;
      box-sizing: border-box;
      padding: 50px 50px 40px;
      border-radius: 6px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, .2);
      .context {
        color: #9fa5ac;
        line-height: 1.7;
      }
    }
    .bg-content {
      box-sizing: border-box;
      height: 500px;
      padding-top: 200px;
      background: #fff url(../assets/img/index/about_us_bg.png) 50% 0 no-repeat;
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
            background-position: 50% 50%;
            transform: translateZ(0);
            transition: background-size .3s, box-shadow .3s;
            background-size: 100% 100%;
          }
          &:hover {
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
              background-size: 115% 115%;
              box-shadow: 0 5px 30px -5px rgba(0, 0, 0, .2);
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
  @endAngle: 360deg;
  @keyframes iconEffect1 {
    0% {
      transform: perspective(@perspective) translateZ(0);
    }
    30% {
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
    30% {
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
    30% {
      transform: perspective(@perspective) rotate3d(1, -1, 0, @startAngle);
    }
    100% {
      transform: perspective(@perspective) rotate3d(1, -1, 0, @endAngle);
    }
  }

  /*平台数据*/
  .platform-data {
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

  /*数字出版*/
  #website{
    .website-list{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      padding:45px 0;
      .screen-shot{
        position: relative;
        width:33.33%;
        box-shadow:0 3px 10px -2px rgba(0,0,0,.2);
        transform: scale(0.93);
        transition: transform 0.8s @effectFunc;
        &.is-active{
          z-index: 1;
          transform: scale(1.23);
          box-shadow:0 10px 30px -8px rgba(0,0,0,.2);
        }
        img{
          max-width: 100%;
        }
      }
    }
  }

  /*用户评价*/
  .user-pingjia {
    background-color: @primary-darken;
    color: #fff;
  }

  /*地址*/
  #contact {
    height: 652px;
    background: #fff url(../assets/img/index/address_map.png) 50% 0 no-repeat;
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
        margin-top:-@angleSize;
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
            text-align: center;
            font-size: 20px;
            color: rgba(255, 255, 255, .7);
          }
          p {
            font-size: 16px;
            line-height: 2.1;
            color: #fff;
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

    /*平台数据*/
    .platform-data {
      text-align: center;
      .data-item {
        float: none;
        width: 147px;
        font-size: 13px;
        line-height: 2.1em;
        display: inline-block;
        &:not(:first-child):after {
          display: none;
        }
      }
    }

    .index-section {
      padding: 30px 0;
      .section-img {
        margin-top: 0;
        margin-bottom: 10px;
        padding-top: 0;
        padding-bottom: 10px;
      }
      .section-img, .sub-img {
        text-align: center;
        img {
          max-width: 90%;
        }
      }
    }

    .section-title {
      font-size: 36px;
      padding: 0 0 20px;
    }

    /*新闻动态*/
    .dynamic-show {
      li {
        display: block;
        width: 100%;
        height: auto;
        margin: 10px 0 0;
        transition: none;
        &:hover {
          box-shadow: none;
        }
        h3 {
          margin-top: 8px;
          height: auto;
        }
      }
      .ds-list-item {
        height: auto;
        padding: 10px 10px 6px;
      }
    }

    @height: 180px;
    /*评价内容-滑动效果*/
    .slide-scroll-wrap {
      padding: 30px 0;
      .slide-btn {
        display: block;
        font-size: 30px;
        height: @height;
        width: 11vw;
        line-height: @height;
      }
      .slide-scroll-content {
        width: 78vw;
        height: @height;
        .slide-item {
          width: 78vw;
          padding: 0 1vw;
          .u-pic {
            width: 12vw;
            height: 12vw;
            margin-top: 20px;
          }
          .text {
            width: 60vw;
            height: @height;
            line-height: 1.5;
            font-size: 12px;
          }
        }
      }
    }

    /*地址*/
    .address-wrap {
      font-weight: 400;
      height: 400px;
      background-size: 1420px;
      background-position: -690px 0;
      .address {
        padding-top: 10px;
        position: relative;
        .map-tips {
          position: absolute;
          top: 162px;
          left: 50%;
          margin-left: -120px;
          font-size: 12px;
          margin-top: 0;
          width: 280px;
          height: 100px;
          box-sizing: border-box;
          padding: 10px 20px 10px 30px;
          background: url(../assets/img/index/map_tips.png) 0 0 no-repeat;
          background-size: contain;
          p {
            font-size: 14px;
            margin: 0 0 4px;
            &:nth-child(2) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
