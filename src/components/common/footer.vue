<template>
  <footer class="footer-wrap">
    <div class="footer">
      <div class="footer-nav">
        <div class="hide-xs">
          <div class="fn-item">
            <div class="item-tit">天星动态<br>
              <small>STAR DYNAMIC</small>
            </div>
            <ul>
              <li>
                <router-link to="/dynamic/0">全部新闻</router-link>
              </li>
              <li>
                <router-link to="/dynamic/9">公司新闻</router-link>
              </li>
              <li>
                <router-link to="/dynamic/10">行业新闻</router-link>
              </li>
              <li>
                <router-link to="/dynamic/11">员工新闻</router-link>
              </li>
            </ul>
          </div>
          <div class="fn-item">
            <div class="item-tit">集团业务<br>
              <small>BUSINESS</small>
            </div>
            <ul>
              <li>
                <router-link to="/service/jiaoyu">教育出版</router-link>
              </li>
              <li>
                <router-link to="/service/zonghe">综合出版</router-link>
              </li>
              <li>
                <router-link to="/service/shuzi">数字出版</router-link>
              </li>
            </ul>
          </div>
          <div class="fn-item">
            <div class="item-tit">了解天星<br>
              <small>KNOW THE STARS</small>
            </div>
            <ul>
              <li>
                <router-link to="/about/jianjie">公司简介</router-link>
              </li>
              <li>
                <router-link to="/about/licheng">天星大事记</router-link>
              </li>
              <li>
                <router-link to="/about/wenhua">天星文化</router-link>
              </li>
              <li>
                <router-link to="/about/zizhi">荣誉资质</router-link>
              </li>
              <li>
                <router-link to="/about/lianxi">加入我们</router-link>
              </li>
            </ul>
          </div>
          <div class="fn-item">
            <div class="item-tit">联系我们<br>
              <small>CONTACT US</small>
            </div>
            <ul>
              <li>地址：郑州市高新区翠竹街1号企业
                <br>
                总部基地51-52栋
              </li>
              <li>电话：0371-68698</li>
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
        Copyright © 2002 - 2018 Tesoon. All Rights Reserved  河南天星教育科技有限公司版权所有 (豫)字第00187号
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'PageFooter'
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

  .ft-copyright {
    padding: 30px 0;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: @color;
    border-top: 1px solid rgba(255, 255, 255, .1);
  }

  .footer-nav {
    padding-top: 60px;
    overflow: hidden;
    .fn-item {
      width: 225px;
      float: left;
      .item-tit {
        color: #fff;
        font-size: 16px;
        margin-bottom: 10px;
        small{
          display: block;
          font-size:12px;
          color:rgba(255, 255, 255, .3);
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

  @media screen and (max-width: 767px) {
    .footer-nav {
      padding-top: 30px;
      .fn-item-ewm {
        float: none;
      }
      .fn-item-ewm {
        float: none;
        padding-right: 0;
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
