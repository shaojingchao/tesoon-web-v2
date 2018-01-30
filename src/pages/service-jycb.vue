<template>
  <div class="service-view">
    <div class="service-detail content">
      <h2 class="main-title">教育出版</h2>
      <div class="detail-context">
        <div class="main-section">
          <img class="fr" v-lazy="require('../assets/img/jy/pro_01.png')">
          <p>
            天星教育以独到、敏锐的市场眼光，独辟蹊径地首创MOOK教辅理念，开中国教辅杂志化先河，实现了图书优势和杂志优势的完美结合，出版的《金考卷》《试题调研》等系列图书，将全国示范名校优质备考资源传递给万千学子，一时畅销大江南北。</p>
          <p>永不止步的天星人，又迅速切入初高中同步和高考总复习等主流市场，开发了《讲义》系列图书，实现了公司产品从侧翼市场到核心市场的战略过渡。</p>
          <p>
            《金考卷》《试题调研》《讲义》三大品牌成三足鼎立之势，奠定了天星教育的品牌根基。2015年，根据新高考改革精神创新设计，全国百所名校特高级教师联手打造，天星教育重磅推出《教材帮》《一遍过》。</p>
        </div>
        <div class="pro-list-section" id="jkj">
          <div class="pro-cover">
            <img v-lazy="require('../assets/img/jy/pro_02.png')">
          </div>
          <div class="pro-desc">
            <h3>金考卷 —— 金考卷，试卷专家</h3>
            <p>
              20年来，金考卷坚持只做一件事：选好题，出好卷！金考卷书系共有20余种试卷产品，20年368次出版，20年累计优选出21800+套优质试卷，得到9880万+次认可；20年不间断原创12000+套精品好卷，得到1亿2千万次认可！受益人群近2亿人次。金考卷已成为中国有巨大影响力的优质教育资源共享平台！
              <br><a href="http://www.tesoon.com/jkj/" class="text-primary" target="_blank">了解更多&gt;</a></p>
          </div>
        </div>

        <div class="pro-list-section" id="stdy">
          <div class="pro-cover">
            <img v-lazy="require('../assets/img/jy/pro_03.png')">
          </div>
          <div class="pro-desc">
            <h3>试题调研 —— 中国高考意见领袖</h3>
            <p>MOOK（Magazine Book），杂志书，既有图书的深入与透彻，又有杂志的新颖与丰富。<br>
              2003年，《试题调研》率先将MOOK引入教辅领域，一月一辑滚动出版，以“新题新信息，好题好方法”为核心理念，揭示命题规律、洞察高考方向、传授解题方法，屡创高考教辅畅销神话！<br>
              20年来，《试题调研》不改初心——创新至上、权威引领，时刻走在高考信息化教辅的最前沿，立志成为高考意见领袖！
              <br><a href="http://www.tesoon.com/stdy/" class="text-primary" target="_blank">了解更多&gt;</a></p>

          </div>
        </div>

        <div class="pro-list-section" id="jcb">
          <div class="pro-cover">
            <img v-lazy="require('../assets/img/jy/pro_04.png')">
          </div>
          <div class="pro-desc">
            <h3>教材帮 —— 同步到高考 名师一帮到底</h3>
            <p>
              国家2014-2020高考改革方案要打破“一考定终身”弊端，“高考同步化”将成为同步学习新趋势，故天星教育于2015年强力推出高中同步新品《教材帮》——在讲透教材的基础上，通过“方法帮”跨越教材与考试间鸿沟，帮你将知识和能力转化为高分，轻松实现同步到高考的跨越！
              <br><a href="http://jcb.tesoon.com/" class="text-primary" target="_blank">了解更多&gt;</a></p>

          </div>
        </div>

        <div class="pro-list-section" id="ybg">
          <div class="pro-cover">
            <img v-lazy="require('../assets/img/jy/pro_05.png')">
          </div>
          <div class="pro-desc">
            <h3>一遍过 —— 一遍解决所有学习难题</h3>
            <p>
              通过分布在全国18个省市的一线研究员的协同调研以及在上海、浙江两试点区域将近一年时间对“教与学”“学与考”的零距离观摩、探讨和研究，我们提出了应对新高考、新同步、新常态下“教与学”“学与考”的创新解决方案：《一遍过》。<br>
              《一遍过》，将中学同步学习与中高考的关联度强化到底，首创学考一体训练体系，实现所有知识要点基础一遍过！
              <br><a href="http://ybg.tesoon.com/" class="text-primary" target="_blank">了解更多&gt;</a></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'ServiceJycb',
    data () {
      return {
        pageBanner: require('../assets/img/banner/product_banner.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  .service-detail {
    padding-top: 30px;
    padding-bottom: 80px;
    .main-title {
      font-size: 24px;
      line-height: 1.5;
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
    .main-info {
      font-size: 14px;
      padding-left: 13px;
      margin-top: 5px;
    }
    .detail-context {
      font-size: 14px;
      line-height: 2;
      .main-section {
        margin-top: 10px;
        padding-bottom: 40px;
        border-bottom: 1px solid #eee;
        p{
          text-indent:2em;
        }
      }
      .pro-list-section {
        padding-top: 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        .pro-cover {
          float: left;
          width: 165px;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .pro-desc {
          h3 {
            font-size: 18px;
          }
          p {
            font-size: 14px;
          }
        }
      }
      p {
        margin-bottom: 1.1em;
      }
      img {
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .service-detail {
      .detail-context {
        line-height: 1.5;
        .main-section {
          img{
            float: none;
            display: block;
            max-width:100%;
            margin:0 auto;
          }
        }
        .pro-list-section {
          .pro-cover {
            width: 100px;
            padding-right: 15px;
          }
        }
      }
    }
  }
</style>
