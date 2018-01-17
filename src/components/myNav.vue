<template>
  <div class="nav-menu" :class="{'nav-open':isShowNavMenu}">
    <span class="menu-toggle show-xs" @click="showNavMenu"><b></b></span>
    <keep-alive>
      <transition name="fadeIn-up">
        <ul class="nav" v-show="isShowNavMenu || !isMobile">
          <router-link tag="li" to="/" v-if="$route.path !== '/'"><a>首页</a></router-link>
          <li v-for="(item,index) in navList"
              @mouseenter="navItemVisible = index"
              @mouseleave="navItemVisible = false">
            <router-link :to="item.to">{{item.name}} <i class="iconfont tx-icon-down"></i></router-link>
            <transition name="fadeIn-up">
              <div class="nav-item-menu" v-if="item.children && navItemVisible === index">
                <router-link v-for="(subItem,index) in item.children"
                             :to="subItem.to"
                             :key="index">{{subItem.name}}
                </router-link>
              </div>
            </transition>
          </li>
          <!--<li class="web-ewm-item cur-def hide-xs" @mouseenter="mouseoverEwm" @mouseleave="mouseoutEwm">-->
          <!--<a>手机访问</a>-->
          <!--<transition name="fadeIn-up">-->
          <!--<div class="web-ewm-content" v-if="isShowEwm">-->
          <!--<img src="../assets/img/ewm.png">-->
          <!--<p>请使用微信扫描二维码</p>-->
          <!--</div>-->
          <!--</transition>-->
          <!--</li>-->
        </ul>
      </transition>
    </keep-alive>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        navList: [
          {
            name: '天星动态',
            to: '#',
            children: [
              {
                name: '集团新闻',
                to: '/dynamic/9'
              },
              {
                name: '行业新闻',
                to: '/dynamic/10'
              },
              {
                name: '员工活动',
                to: '/dynamic/11'
              }
            ]
          },
          {
            name: '集团业务',
            to: '#',
            children: [
              {
                name: '教育出版',
                to: '/service/jiaoyu'
              },
              {
                name: '综合出版',
                to: '/service/zonghe'
              },
              {
                name: '数字出版',
                to: '/service/shuzi'
              }
            ]
          },
          {
            name: '了解天星',
            to: '#',
            children: [
              {
                name: '集团简介',
                to: '/about/jianjie'
              },
              {
                name: '发展历程',
                to: '/about/licheng'
              },
              {
                name: '天星文化',
                to: '/about/wenhua'
              },
              {
                name: '荣誉资质',
                to: '/about/zizhi'
              },
              {
                name: '联系我们',
                to: '/about/lianxi'
              }
            ]
          }
        ],
        navItemVisible: false,
        isShowEwm: false,
        isShowNavMenu: false
      }
    },
    computed: {
      isMobile () {
        return document.body.clientWidth <= 767
      }
    },
    methods: {
      navItemMouseenter (item) {
        this.navItemVisible = item
      },
      navItemMouseleave (hide) {
        this.navItemVisible = hide
      },
      mouseoverEwm () {
        this.isShowEwm = true
      },
      mouseoutEwm () {
        this.isShowEwm = false
      },
      showNavMenu () {
        this.isShowNavMenu = !this.isShowNavMenu
      }
    }
  }

</script>
<style lang="less">
  @import "../assets/css/_mixins-wln.less";

  .header {
    .logo {
      float: left;
      width: 146px;
      height: 80px;
      background: url(../assets/img/logo-2.png) 50% 50% no-repeat;
      background-size: 100% !important;
    }
    .nav {
      li {
        position: relative;
        box-sizing: border-box;
        font-size: 14px;
        display: inline-block;
        padding: 20px 6px;
        margin: 0 14px;
        height: 80px;
        line-height: 40px;
        &:last-child {
          margin-right: 0;
        }
        .iconfont {
          font-size: 14px;
        }
        & > a {
          position: relative;
          display: block;
          transition: color .3s;
          &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            display: block;
            background-color: @primary;
            height: 2px;
            width: 0;
            transition: width 0.2s;
          }
        }
        &.active, &:hover {
          & > a {
            color: @primary;
            &:after {
              width: 100%;
            }
          }
        }
        &.web-ewm-item {
          z-index: 100;
          &:hover {
            border-bottom: none;
          }
        }
        .nav-item-menu {
          position: absolute;
          top: 70px;
          padding-top: 10px;
          left: 50%;
          z-index: 100;
          margin-left: -80px;
          width: 160px;
          background-color: #fff;
          box-shadow: 0 3px 18px -2px rgba(0, 0, 0, 0.2);
          a {
            display: block;
            line-height: 40px;
            color: #999;
            text-align: center;
            transition: all 0.3s;
            background-color: #fff;
            border-bottom: 1px solid #eee;
            &:hover {
              color: #333;
              background-color: #f5f5f5;
            }
          }
        }
      }
    }
  }

  .nav-menu {
    float: right;
    .menu-toggle {
      position: absolute;
      right: 14px;
      top: 15px;
      b, &:after, &:before {
        display: block;
        width: 22px;
        height: 2px;
        background-color: rgba(255, 255, 255, .3);
        border-radius: 2px;
      }
      &:after, &:before {
        content: '';
      }
      b, &:after {
        margin-top: 6px;
      }
    }
  }

  // 二维码
  .web-ewm-item {
    position: relative;
  }

  .web-ewm-content {
    position: absolute;
    box-sizing: border-box;
    top: 80px;
    left: 50%;
    width: 180px;
    height: 208px;
    margin-left: -90px;
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 3px 20px 1px rgba(0, 0, 0, .2);
    &:after, &:before {
      content: '';
      display: block;
      position: absolute;
      top: -20px;
      left: 50%;
      margin-left: -7px;
      border-width: 10px 7px 10px 7px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
    &:before {
      top: -21px;
      border-color: transparent transparent #ddd transparent;
    }
    img {
      width: 151px;
      display: block;
      margin: 0 auto;
      margin-top: 13px;
    }
    p {
      font-size: 13px;
      text-align: center;
      margin-top: 5px;
      line-height: 1.4;
    }
  }

  @media screen and (max-width: 767px) {

    //header
    .header {
      .logo {
        width: 100px;
        height: 48px;
        background-size: contain;
      }
      .nav-menu {
        .menu-toggle {
          b, &:after, &:before {
            background-color: rgba(255, 255, 255, .3);
          }
        }
      }
      .nav {
        float: none;
        position: absolute;
        top: 48px;
        left: 0;
        right: 0;
        padding: 10px 0;
        background-color: #103356;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
        li {
          display: block;
          height: 50px;
          line-height: 50px;
          padding: 0;
          margin: 0;
          border-top: 1px solid rgba(255, 255, 255, .02);
          a {
            padding: 0 20px;
          }
          &.current, &:hover {
            border-bottom: none !important;
            background-color: rgba(255, 255, 255, .1);
          }
          &:not(:visited):first-child {
            border-top: none;
          }
        }
      }
    }

    .nav-menu {
      float: right;
      .menu-toggle {
        position: absolute;
        right: 14px;
        top: 15px;
        b, &:after, &:before {
          display: block;
          width: 22px;
          height: 2px;
          background-color: rgba(255, 255, 255, .3);
          border-radius: 2px;
        }
        &:after, &:before {
          content: '';
          transition: transform 0.3s;
        }
        &:before {
          transform-origin: 0 4px;
        }
        &:after {
          transform-origin: 12px -3px;
        }
        b {
          transform-origin: 0 0;
          transition: transform 0.3s, opacity 0.3s;
        }
        b, &:after {
          margin-top: 6px;
        }
      }
      &.nav-open {
        .menu-toggle {
          &:after {
            transform: rotate(135deg);
          }
          &:before {
            transform: rotate(45deg);
          }

          b {
            transform: rotate(90deg);
            opacity: 0;
          }
        }
      }
    }

    .page-header {
      border-bottom: 1px solid #e8ecef;
      .nav-menu {
        .menu-toggle {
          b, &:after, &:before {
            background-color: #484aa2;
          }
        }
      }
      .nav {
        background-color: #fff;
        border-top: 1px solid #eee;
        li {
          border-top: 1px solid #f7f7f7;
        }
      }
    }
  }
</style>
