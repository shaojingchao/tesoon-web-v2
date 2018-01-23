<template>
  <div class="nav-menu" :class="{'nav-open':isShowNavMenu}">
    <span class="menu-toggle show-xs" @click="showNavMenu"><b></b></span>
    <keep-alive>
      <transition name="fadeIn-down">
        <ul class="nav" v-show="isShowNavMenu || !isMobile">
          <router-link tag="li" to="/" v-if="$route.path !== '/'"><a>首页</a></router-link>
          <li v-for="(item,index) in navList"
              @mouseenter="() => {!isMobile ? navItemVisible = index : ''}"
              @mouseleave="() => {!isMobile ? navItemVisible = false : ''}"
              @click="() => {isMobile ? navItemVisible !== index ? navItemVisible = index : navItemVisible = false : ''}">
            <a>{{item.name}} <i class="iconfont tx-icon-down" :class="{'icon-open': navItemVisible === index}"></i></a>
            <transition :name="!isMobile ? 'fadeIn-up' : ''">
              <div class="nav-item-menu" v-if="item.children && navItemVisible === index">
                <router-link v-for="(subItem,index) in item.children"
                             :to="subItem.to"
                             @click.native="showNavMenu"
                             :key="index">{{subItem.name}}
                </router-link>
              </div>
            </transition>
          </li>
        </ul>
      </transition>
    </keep-alive>

  </div>
</template>
<script type="text/ecmascript-6">
  import {NavList} from '../store/index'

  export default {
    data () {
      return {
        navList: NavList,
        navItemVisible: false,
        isShowEwm: false,
        isShowNavMenu: false
      }
    },
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    },
    methods: {
      showNavMenu () {
        this.isShowNavMenu = !this.isShowNavMenu
      }
    }
  }

</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  .page-header {
    .nav-menu {
      float: right;
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
          display: inline-block;
          transition: transform 0.3s;
          &.icon-open {
            transform: rotateZ(180deg);
          }
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
        &:hover {
          & > a {
            color: @primary;
            &:after {
              width: 100%;
            }
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

  @media screen and (max-width: 767px) {

    //header
    .page-header {
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
            background-color: #2f509c;
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
      .nav {
        float: none;
        position: absolute;
        top: 48px;
        left: 0;
        right: 0;
        padding: 10px 0;
        box-shadow: 0 4px 10px -2px rgba(0, 0, 0, .1);
        background-color: #fff;
        li {
          display: block;
          height: auto;
          line-height: 50px;
          padding: 0;
          margin: 0;
          border-top: 1px solid #f7f7f7;
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
          & > a {
            position: relative;
            display: block;
            transition: color .3s;
            &:after {
              display: none;
            }
          }

          .nav-item-menu {
            position: static;
            padding-top: 0;
            margin-left: 0;
            width: auto;
            box-shadow: none;
            a {
              display: block;
              line-height: 40px;
              color: #999;
              text-align: left;
              transition: all 0.3s;
              background-color: #fff;
              border-top: 1px solid #f7f7f7;
              border-bottom: none;
              &:last-child {
                position: relative;
                z-index: 10;
              }
              &:hover {
                color: #333;
                background-color: #f5f5f5;
              }
            }
          }
        }
      }
    }
  }
</style>
