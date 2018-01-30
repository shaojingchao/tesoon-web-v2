<!--vue slider components-->
<template>
  <div class="wln-slider">
    <div class="hd" v-if="bannerPic && bannerPic.length>1">
      <div class="nav-bar">
        <span
          v-for="(item,index) in bannerPic.length"
          :class="{'active':(index === currentIndex)}"
          @click="showThisBanner(index)"
          @mouseover="hoverThisBannerBar"
          @mouseout="bannerAutoPlay"
        >
        </span>
      </div>
    </div>
    <div class="bd" :class="{'start-load': banner.length === 0}">
      <ul>
        <li v-for="(item,index) in banner"
            :class="{active: currentIndex===index}"
            v-lazy:background-image="item">
          <!--<div class="banner-words" v-if="index === 1"/>-->
          <!--<Sky v-if="index === 1"/>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  // import Sky from './sky.vue'
  // import $ from 'jquery'
  import CF from '../../api/index'

  export default {
    props: {
      duration: {
        type: Number,
        default: 5
      },
      bannerPic: {
        type: Array,
        required: true
      }
    },
    components: {
      // Sky
    },
    data () {
      return {
        baseUrl: CF.baseUrl,
        timer: null,
        currentIndex: 0,
        lazyObj: {
          error: require('../../../static/img_error.png'),
          loading: require('../../../static/loading.gif')
        }
      }
    },
    computed: {
      banner () {
        return this.bannerPic.map((item) => {
          return {
            src: this.baseUrl + item,
            error: this.lazyObj.error,
            loading: this.lazyObj.loading
          }
        })
      }
    },
    mounted () {
      this.bannerAutoPlay()
      // $('.banner-words').addClass('in')
    },
    methods: {
      bannerAutoPlay () {
        if (this.bannerPic > 2) return false
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.currentIndex < this.bannerPic.length - 1) {
            this.currentIndex++
          } else {
            this.currentIndex = 0
          }
        }, this.duration * 1000)
      },
      showThisBanner (i) {
        this.currentIndex = i
      },
      hoverThisBannerBar (i) {
        clearInterval(this.timer)
      }
    }
  }
</script>
<style lang="less" scoped>

  /*.banner-words {*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background: url(../../assets/img/banner/banner_words.png) 50% 40% no-repeat;*/
    /*transition: all 1.8s;*/
    /*transform: translateY(10%);*/
    /*opacity: 0;*/
    /*&.in {*/
      /*transform: translateY(0);*/
      /*opacity: 1;*/
    /*}*/
  /*}*/

  .wln-slider {
    //min-width:1200px;
    position: relative;
    height: 100%;
    overflow: hidden;
    .bd {
      position: relative;
      z-index: 0;
      height: 100%;
      &.start-load{
        background: url(../../../static/loading.gif) 50% 50% no-repeat;
      }
      ul {
        position: relative;
        height: 100%;
        width: 100%;
        li {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          background-position: center center !important;
          background-repeat: no-repeat;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.9s, visibility 0.9s;
          &[lazy=loading]{ // 重要！懒加载适用
            display: none;
          }
          &.active {
            display: block;
            left: 0;
            visibility: visible;
            opacity: 0.6;
            &[lazy=loaded]{
              opacity: 1;
            }
          }
        }
      }
    }
    .hd {
      width: 1000px;
      margin-left: -500px;
      position: absolute;
      bottom: 60px;
      left: 50%;
      text-align: center;
      z-index: 1;
      .nav-bar {
        height: 10px;
        cursor: default;
        span {
          width: 10px;
          height: 10px;
          font-size: 0;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          opacity: 0.5;
          background-color: #fff;
          box-shadow: 0 1px 4px -1px rgba(0, 0, 0, .4);
          &.active {
            cursor: default;
            opacity: 1;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    @height: (600 / 1200) * 100vw; //图片大小 1080 * 600
    .banner-wrap {
      height: @height;
    }

    .banner-words {
      background-size: 80%;
    }

    .wln-slider {
      min-width: 0;
      height: @height;
      .bd {
        ul {
          height: @height;
          li {
            height: @height;
            background-size: cover;
            &[lazy=loading]{
              background-size: 26px 26px;
            }
          }
        }
      }
      .hd {
        width: 100%;
        bottom: 10px;
        margin-left: -50vw;
        .nav-bar {
          span {
            transform: scale(0.9);
          }
        }
      }
    }
  }
</style>


