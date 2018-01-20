<template>
  <div class="about-view">
    <div class="about-detail content">
      <h2 class="main-title">天星大事记</h2>
      <div class="detail-context">
        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2017</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>初中同步产品《教材帮》上市。</p>
          </div>
        </div>

        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2016</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>初中同步产品《一遍过》上市；<br>
              郑州天星仓储服务有限公司成立。</p>
          </div>
        </div>

        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2015</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>同步产品 高中《教材帮》、高中《一遍过》上市；<br>
              河南天星教育科技有限公司成立。</p>
          </div>
        </div>

        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2014</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>公司业务覆盖领域拓展，注册资金增资至5000万，正式更名为“河南天星教育传媒股份有限公司”<br>
              未来脑项目部产品《未来脑提分系统》、《未来脑职能组卷系统》《天星备考软件》获得国家版权局颁发的计算机软件著作权等级证书<br>
              2014首部手机版《高考临考笔记》精彩发布<br>
              获得《互联网出版许可证》</p>
          </div>
        </div>

        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2013</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>公司业务覆盖领域拓展，注册资金增资至5000万，正式更名为“河南天星教育传媒股份有限公司”<br>
              未来脑项目部产品《未来脑提分系统》、《未来脑职能组卷系统》《天星备考软件》获得国家版权局颁发的计算机软件著作权等级证书<br>
              2014首部手机版《高考临考笔记》精彩发布<br>
              获得《互联网出版许可证》</p>
          </div>
        </div>

        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2012</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>公司业务覆盖领域拓展，注册资金增资至5000万，正式更名为“河南天星教育传媒股份有限公司”<br>
              未来脑项目部产品《未来脑提分系统》、《未来脑职能组卷系统》《天星备考软件》获得国家版权局颁发的计算机软件著作权等级证书<br>
              2014首部手机版《高考临考笔记》精彩发布<br>
              获得《互联网出版许可证》</p>
          </div>
        </div>

        <div class="pro-list-section">
          <div class="pro-cover">
            <b>2011</b><small>年</small>
          </div>
          <div class="pro-desc">
            <p>公司业务覆盖领域拓展，注册资金增资至5000万，正式更名为“河南天星教育传媒股份有限公司”<br>
              未来脑项目部产品《未来脑提分系统》、《未来脑职能组卷系统》《天星备考软件》获得国家版权局颁发的计算机软件著作权等级证书<br>
              2014首部手机版《高考临考笔记》精彩发布<br>
              获得《互联网出版许可证》</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    metaInfo () {
      return {
        title: '天星教育 - 教育出版'
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  .about-view{

  }

  .about-detail {
    padding-top: 30px;
    padding-bottom: 180px;
    .main-title {
      font-size: 24px;
      line-height: 1.5;
      margin-bottom: 30px;
      &:after {
        content: '';
        float: left;
        display: inline-block;
        margin-top: 0.25em;
        border-left: 4px solid @primary;
        margin-right: 0.3em;
        height: 1em;
      }
    }

    .pro-list-section {
      display: flex;
      padding-top: 30px;
      padding-bottom: 15px;
      border-top: 1px solid #eee;
      overflow: hidden;
      .pro-cover {
        flex:0 0 auto;
        padding-right: 10px;
        float: left;
        width: 128px;
        line-height:1.4;
        color:#7f7f7f;
        font-size:26px;
        small{
          font-size:14px;
          margin-left: 4px;
          vertical-align: 2px;
        }
        &:after{
          content:'';
          float: right;
          margin-top:0.76em;
          display: inline-block;
          height:0;
          border-bottom:1px solid #888;
          width:30px;
        }
      }
      .pro-desc {
        padding-top: 7px;
        line-height:2;
        p {
          font-size: 14px;
          color: #7b7b7b;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
  }
</style>
