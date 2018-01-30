<template>
  <footer class="footer-wrap">
    <div class="footer">
      <div class="footer-nav">
        <div class="nav-item-wrap" v-if="pageNav && pageNav.length">
          <div class="fn-item" v-for="(item,index) in pageNav">
            <div class="item-tit">{{item.name}}<br>
              <small>{{item.subName}}</small>
            </div>
            <ul v-if="item.children && item.children.length > 0">
              <li v-for="(subItem,subIndex) in item.children" :key="subIndex">
                <router-link :to="subItem.to" target="_blank">{{subItem.name}}</router-link>
              </li>
            </ul>
          </div>
          <div class="fn-item">
            <div class="item-tit">联系我们<br>
              <small>CONTACT US</small>
            </div>
            <ul>
              <li>地址：河南省郑州市高新区翠竹街1号
                <br>
                企业总部基地51-52栋
              </li>
              <li>电话：0371-68698036</li>
              <li>邮箱：tianxing@163.com</li>
            </ul>
          </div>
        </div>
        <div class="fn-item-ewm">
          <div class="tx-ewm">
            <img src="../../assets/img/ewm.png">
            <p>关注天星教育微信公众号<br>请使用微信扫描二维码</p>
          </div>
        </div>
      </div>
      <div class="ft-copyright">
        Copyright © 1998-2018 All Rights Reserved 河南天星教育传媒股份有限公司 豫B2-20130009
      </div>
    </div>
  </footer>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'PageFooter',
    data () {
      return {}
    },
    computed: mapState(['pageNav']),
    mounted () {
    }
  }
</script>

<style lang="less" scoped>

  @import "../../assets/css/_mixins-wln.less";

  @color: rgba(255, 255, 255, .6);
  .footer-wrap {
    background-color: #232c39;
    .footer {
      max-width: 1100px;
      margin: 0 auto;
    }
  }

  .footer-nav {
    padding-top: 60px;
    overflow: hidden;
    .nav-item-wrap {
      display: flex;
      flex-wrap: wrap;
      width:75%;
      float: left;
    }
    .fn-item {
      width: 25%;
      float: left;
      .item-tit {
        color: #fff;
        font-size: 16px;
        margin-bottom: 10px;
        small {
          display: block;
          font-size: 12px;
          color: rgba(255, 255, 255, .3);
        }
      }
      li {
        padding: 2px 0;
        font-size: 12px;
        color: @color;
        a {
          color: @color;
          transition: color 0.2s;
          &:hover {
            color: #fff;
          }
        }
      }
    }
    .fn-item-ewm {
      float: right;
      padding-right: 20px;
      font-size: 12px;
      text-align: center;
      color: @color;
      img {
        display: block;
        margin: 0 auto;
        margin-bottom: 15px;
      }
    }
  }

  .ft-copyright {
    padding: 30px 0;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: @color;
    border-top: 1px solid rgba(255, 255, 255, .1);
  }

  @media screen and (max-width: 767px) {
    .footer-nav {
      padding-top: 30px;
      padding-left: 25px;
      padding-right: 25px;
      .nav-item-wrap {
        float: none;
        width:auto;
        overflow: hidden;
      }
      .fn-item {
        width: 50%;
        padding-bottom: 20px;
        .item-tit {
          font-weight: 700;
        }
      }
      .fn-item-ewm {
        float: none;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 0;
        img{
          max-width:100px;
        }
        p {
          line-height: 1.4;
        }
      }
    }

    .ft-copyright {
      margin-top: 15px;
      padding: 10px;
      line-height: 1.2;
    }
  }
</style>
