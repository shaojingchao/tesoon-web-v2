<template>
  <div class="side-bar-wrap">
    <div class="content pos-r auto">
      <transition name="fadeIn-up">
        <div class="side-bar" v-if="isShowSideBar">
          <a class="iconfont tx-icon-weixin"></a>
          <a class="iconfont tx-icon-tubiao215"></a>
          <a class="iconfont tx-icon-shoujiduan"></a>
          <a class="go-top" ref="goTop" @click="backTop" title="返回顶部"></a>
        </div>
      </transition>
    </div>
  </div>
</template>

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
    a {
      font-size: 24px;
      color: #999999;
      height: @size;
      display: block;
      border: 1px solid #eee;
      border-bottom: none;
      transition: all .3s;
      &:last-child {
        border-bottom: 1px solid #eee;
      }
      &.go-top {
        background: #f8f8f8 url(../../assets/img/top.png) center center no-repeat;
        background-size: 45%;
        transition: background-color .3s;
        &:hover {
          background-color: #eee;
        }
      }
      &:hover:not(.go-top) {
        color: #fff;
        background-color: #999;
        border-color: #999;
      }
    }
  }
</style>

<script type="text/ecmascript-6">
  import Tween from '../../util/tween'

  require('../../util/animFrame')
  import MyEvent from '../../util/event'

  export default {
    data () {
      return {
        offsetHeight: 800,
        isShowSideBar: false,
        scrollTop: null,
        duration: 600
      }
    },
    computed: {
      isShow () {
        return this.scrollTop > this.offsetHeight
      }
    },
    watch: {
      isShow (val) {
        let _goTop = $(this.$refs.goTop)
        if (val === true) {
          _goTop.slideDown(250)
        } else {
          _goTop.slideUp(250)
        }
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
          let process = Tween.Cubic.easeOut(_time, start, end - start, duration)
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
      },
      addScrollEvent () {
        MyEvent.addEvent(window, 'scroll', () => {
          this.scrollTop = this.getScrollTop()
        })
      }
    }
  }
</script>
