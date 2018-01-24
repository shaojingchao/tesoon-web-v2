<template>
  <div>
    <div class="mask-layer" v-if="weixinIsVisible" @click="weixinIsVisible = false">
      <transition name="fadeIn-up" appear>
        <div class="ewm-wrap">
          <img src="../../assets/img/ewm.png">
        </div>
      </transition>
    </div>
    <div class="side-bar-wrap">
      <div class="content pos-r auto">
        <transition name="fadeIn-up">
          <div class="side-bar" v-if="isShowSideBar">
            <a class="iconfont tx-icon-weixin" @click="weixinIsVisible = true"></a>
            <!--<a class="iconfont tx-icon-tubiao215"></a>-->
            <!--<a class="iconfont tx-icon-shoujiduan"></a>-->
            <a class="go-top" :class="{'is-show': isShow}" @click="backTop" title="返回顶部">
              <i class="iconfont tx-icon-down" :class="{clicked: pageIsBackingTop}"></i>
            </a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tween from '../../util/tween'

  require('../../util/animFrame')
  import MyEvent from '../../util/event'

  export default {
    name: 'SideBar',
    data () {
      return {
        weixinIsVisible: false,
        offsetHeight: 800,
        isShowSideBar: false,
        scrollTop: null,
        duration: 1200,
        pageIsBackingTop: false
      }
    },
    computed: {
      isShow () {
        return this.scrollTop > this.offsetHeight
      }
    },
    mounted () {
      // 加载时激活动画效果
      this.isShowSideBar = true
      this.$nextTick(() => {
        this.addScrollEvent()
      })
    },
    methods: {
      getScrollTop () {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
      },
      animateStep (start, end, duration) {
        let _time = 0
        let _handler = null
        const _step = () => {
          _time += 1000 / 60
          let _top = this.getScrollTop()
          let process = Tween.Cubic.easeInOut(_time, start, end - start, duration)
          if (_top > 0) {
            _handler = window.requestAnimationFrame(_step)
            window.scrollTo(0, process)
          } else {
            window.cancelAnimationFrame(_handler)
          }
        }
        _step()
      },
      backTop () {
        let start = this.getScrollTop()
        let end = 0
        this.animateStep(start, end, this.duration)

        // 记录页面返回顶部时的滚动状态
        let timer
        clearTimeout(timer)
        this.pageIsBackingTop = true
        timer = setTimeout(() => {
          this.pageIsBackingTop = false
        }, this.duration)
      },
      addScrollEvent () {
        MyEvent.addEvent(window, 'scroll', () => {
          this.scrollTop = this.getScrollTop()
        })
      }
    }
  }
</script>



<style lang="less" scoped>
  .mask-layer {
    z-index: 10001;
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
  }
  .ewm-wrap{
    position: absolute;
    top:50%;
    left:50%;
    width:150px;
    height:150px;
    margin-top:-75px;
    margin-left:-75px;
    img{
      display: block;
      max-height: 100%;
      max-width:100%;
    }
  }

  @media screen and (max-width: 767px) {
    .ewm-wrap{
      width:120px;
      height:120px;
      margin-top:-60px;
      margin-left:-60px;
    }
  }
</style>

<style lang="less" rel="stylesheet/less" scoped>
  .side-bar-wrap {
    z-index: 10000;
    position: fixed;
    bottom: 40px;
    left: 0;
    right: 0;
    height: 0;
  }

  .side-bar {
    @size: 40px;
    @borderColor: #eee;
    position: absolute;
    right: -80px;
    bottom: 0;
    width: @size;
    min-height: @size;
    line-height: @size;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 3px 10px -1px rgba(0, 0, 0, .1);
    overflow: hidden;
    a {
      position: relative;
      font-size: 24px;
      color: #999999;
      height: @size;
      display: block;
      border: 1px solid @borderColor;
      border-bottom: 0;
      transition: all .3s;
      &:last-child {
        border-bottom: 1px solid @borderColor;
      }
      &.go-top {
        height: 0;
        border-top-width:0;
        border-bottom-width: 0;
        overflow: hidden;
        transition: height .3s;
        i {
          height: @size;
          font-size: 20px;
          display: block;
          transform: rotateZ(180deg) rotateY(35deg);
          transition: transform 0.3s;
          &.clicked {
            transform: scale(1) translateY(-50px) rotateZ(180deg) !important;
          }
        }
        &.is-show {
          height: @size;
          border-bottom-width: 1px;
          border-top-width:1px;
          overflow: hidden;
        }
        &:hover {
          background-color: #444;
          border-color: #444;
          i {
            color: #fff;
            transform: scale(1) translateY(5px) rotateZ(180deg);
          }
        }
      }
      &:hover:not(.go-top) {
        color: #fff;
        z-index: 100;
        background-color: #999;
        border-color: #999;
      }
    }
  }

  @media screen and (max-width:767px) {
    .side-bar-wrap {
      bottom: 20px;
    }

    .side-bar {
      right: 10px;
    }
  }
</style>
