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
    <div class="index-section index-section-gray wow fadeInUp" data-wow-offset="200">
      <h1 class="section-title">数字出版<br>
        <small>DIGITAL PUBLISHING</small>
      </h1>
      <div class="content">
        <div class="section-img pt30 mt10" style="margin-bottom:0;padding-bottom:0;">
          <img src="../assets/img/index/shuzi_pic.png">
        </div>
      </div>
      <div class="content tc pt30 mt30 pb30">
        <router-link class="known-more-btn btn" to="/dynamic">更多</router-link>
      </div>
    </div>

    <!--用户评价-->
    <div class="user-pingjia  un-select wow fadeInUp" data-wow-offset="200">
      <div class="content slide-scroll-wrap">
        <a class="slide-btn fl" :class="{disabled:pjCurrentIndex===0}" @click="scrollPingJiaLeft"><</a>
        <div class="slide-scroll-content">
          <ul :style="{width:pingJiaList.length*computedWidth+'px',left:-pjCurrentIndex*computedWidth+'px'}">
            <li class="slide-item" v-for="item in pingJiaList">
              <img class="u-pic" :src="item.photo">
              <div class="text">
                <p>{{item.text}}</p>
                <p class="mt5">{{item.user}}</p>
              </div>
            </li>
          </ul>
        </div>
        <a class="slide-btn fr" :class="{disabled:pjCurrentIndex===pingJiaList.length-1}"
           @click="scrollPingJiaRight">></a>
      </div>
    </div>

    <!--联系我们-->

    <div class="address-wrap wow fadeInUp" data-wow-offset="200">
      <div class="content address">
        <div class="map-tips">
          <p class="f20 fw6 mb15 mt5">河南天星教育传媒股份有限公司</p>
          <p class="f16">地址：郑州市高新区翠竹街1号企业总部基地51-52栋 电话：0371-68698013</p>
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
        pingJiaList: [
          {
            text: '挺推荐这本的——高考复习讲义适合对象:高三一轮复习的孩子（细心的同学可以观察第一张照片里的第一排，这个系列的物理数学英语化学生物我都做过）这本书真的超级厚，但是也特别适合高三第一轮复习。重难点有划分，也有往年高考原题和创新题。',
            user: '特级教师 - 王老师',
            photo: require('../assets/img/index/u-pic_1.jpg')
          },
          {
            text: '挺推荐这本的——高考复习讲义适合对象:高三一轮复习的孩子（细心的同学可以观察第一张照片里的第一排，这个系列的物理数学英语化学生物我都做过）这本书真的超级厚，但是也特别适合高三第一轮复习。重难点有划分，也有往年高考原题和创新题。',
            user: '特级教师 - 王老师',
            photo: require('../assets/img/index/u-pic_1.jpg')
          },
          {
            text: '挺推荐这本的——高考复习讲义适合对象:高三一轮复习的孩子（细心的同学可以观察第一张照片里的第一排，这个系列的物理数学英语化学生物我都做过）这本书真的超级厚，但是也特别适合高三第一轮复习。重难点有划分，也有往年高考原题和创新题。',
            user: '特级教师 - 王老师',
            photo: require('../assets/img/index/u-pic_1.jpg')
          }
        ],
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
          padding:0 30px 26px;
          transform: translateZ(0);
          transition: box-shadow .3s;
          .item-bg{
            height:230px;
            margin:0 -30px;
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
            bottom:36px;
            right:30px;
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
            .item-bg{
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

  /*平台数据*/
  .platform-data {
    position: relative;
    height: 150px;
    margin-top: -55px;
    .content {
      height: 100%;
      background-color: #fff;
      box-shadow: 0 10px 30px -8px fade(@primary-lighter, 20%);
      align-content: center;
    }
    .data-item {
      height: 100%;
      box-sizing: border-box;
      padding-top: 28px;
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
        /*&:after {*/
        /*content: '';*/
        /*display: block;*/
        /*background-color: rgba(0, 51, 202, 0.12);*/
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*z-index: 10;*/
        /*}*/
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

  /*用户评价*/
  .user-pingjia {
    background-color: @primary-darken;
    color: #fff;
  }

  @height: 140px;
  /*评价内容-滑动效果*/
  .slide-scroll-wrap {
    padding: 130px 0;
    overflow: hidden;
    .slide-btn {
      font-size: 40px;
      font-weight: 100;
      color: #fff;
      height: @height;
      width: 50px;
      line-height: @height;
      text-align: center;
      font-family: Simsun, sans-serif;
      cursor: pointer;
      .disabled {
        opacity: 0.5;
        cursor: default;
        &:hover {
          color: #fff;
        }
      }
      &:hover {
        color: #00adef;
      }

    }
    .slide-scroll-content {
      width: 1000px;
      height: @height;
      float: left;
      overflow: hidden;
      position: relative;
      ul {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        transition: left .6s ease;
      }
      .slide-item {
        float: left;
        width: 1000px;
        box-sizing: border-box;
        padding: 0 75px;
        overflow: hidden;
        .u-pic {
          float: left;
          width: 130px;
          height: 130px;
          margin-top: 5px;
          box-sizing: border-box;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, .8);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .4);
        }
        .text {
          height: @height;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          float: right;
          width: 670px;
          font-size: 16px;
        }
      }
    }
  }

  /*地址*/
  .address-wrap {
    height: 567px;
    background: #fff url(../assets/img/index/address_map.png) 50% 0 no-repeat;
    font-weight: 400;
    .address {
      padding-top: 10px;
      .map-tips {
        margin-top: 200px;
        margin-left: 624px;
        width: 480px;
        height: 155px;
        box-sizing: border-box;
        padding: 20px 50px;
        background: url(../assets/img/index/map_tips.png) 0 0 no-repeat;
      }
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
