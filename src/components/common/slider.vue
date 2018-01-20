<!--vue slider components-->

<template>
  <div class="wln-slider">
    <div class="hd">
      <div class="nav-bar">
        <span
          v-if="bannerPics && bannerPics.length>1"
          v-for="(item,index) in bannerPics.length"
          :class="{on:(index === currentIndex)}"
          @click="showThisBanner(index)"
          @mouseover="hoverThisBannerBar"
          @mouseout="bannerAutoPlay"
        >
        </span>
      </div>
    </div>
    <div class="bd">
      <ul>
        <li v-for="(item,index) in bannerPics"
            :style="{background: 'url('+item+') 50% 50% no-repeat',
              'background-size': 'cover',
              visibilty:(currentIndex===index?'visible':'hidden'),
              opacity:(currentIndex===index?'1':'0')}">
          <div class="banner-words" v-if="index === 1"/>
          <Sky v-if="index === 1"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sky from './sky.vue'
  import $ from 'jquery'

  export default {
    props: {
      duration: {
        type: Number,
        default: 5
      },
      bannerPics: {
        type: Array,
        required: true,
        validator: function (len) {
          return len.length >= 1
        }
      }
    },
    components: {
      Sky
    },
    data () {
      return {
        timer: null,
        currentIndex: 0
      }
    },
    mounted () {
      this.bannerAutoPlay()
      $('.banner-words').addClass('in')
    },
    methods: {
      bannerAutoPlay () {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.currentIndex < this.bannerPics.length - 1) {
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

  .banner-words {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../../assets/img/banner/banner_words.png) 50% 40% no-repeat;
    transition: all 1.8s;
    transform: translateY(10%);
    opacity: 0;
    &.in {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .wln-slider {
    //min-width:1200px;
    position: relative;
    height: 100%;
    overflow: hidden;
    .bd {
      position: relative;
      z-index: 0;
      height: 100%;
      ul {
        position: relative;
        height: 100%;
        width: 100% !important;
        li {
          width: 100% !important;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          transition: opacity .9s;
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
        cursor: default;
      }
      span {
        width: 14px;
        height: 14px;
        font-size:0;
        display: inline-block;
        margin: 0 5px;
        background: url(../../assets/img/banner/circlebutton.png) -3px -25px no-repeat;
        cursor: pointer;
        &.on {
          background-position: -3px -3px;
          cursor: default;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    @height: 500px;
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
            background-position: center center !important;
            background-size: cover !important;
          }
        }
      }
      .hd {
        width: 100%;
        margin-left: -50vw;
      }
    }
  }
</style>


