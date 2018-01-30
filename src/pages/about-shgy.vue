<template>
  <div class="about-view">
    <div class="about-detail content">
      <h2 class="main-title">社会公益</h2>

      <div class="main-list-section" v-for="(item,index) in list" :key="index">
        <h3>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <div class="photo-show" v-if="item.photo && item.photo.length > 0">
          <div class="img-item-content" v-for="(imgItem,imgIndex) in item.photo" :key="imgIndex">
            <div class="img-item">
              <img :src="imgItem.src">
            </div>
            <p class="item-desc">{{imgItem.title}}</p>
          </div>
        </div>
      </div>

      <div class="main-list-section">
        <p>天星教育利用自身的品牌优势，以人为本，以市场为导向，以管理为基础，以诚信为宗旨，以质量为保证，依托优质的客户服务，不断提高员工素质，开拓进取，稳健发展。在新的发展道路上，天星怀着对中国教育事业的无限热爱，秉承着对人民群众的无限赤诚，为自己树立如下使命：为优质教育资源的普及不懈努力，为人民群众综合素质的提高不懈奋斗，并努力成长为卓越的教育传媒集团。</p>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        pageBanner: require('../assets/img/banner/product_banner.png'),
        list: [
          {
            title: '促进就业',
            desc: '每年企业提供新工作岗位近200个，秉承为家乡做贡献的理念，在人才的引进战略上，优先录用河南省高校毕业生，一定程度上帮助政府和社会分担了大学生的就业压力。'
          },
          {
            title: '带动河南省出版相关产业发展',
            desc: '企业经营方面的相关印刷、物流业务放在郑州进行，由此带动河南印刷行业每年多达上千万元的印刷业务，间接解决了河南印刷领域1000余名员工的就业问题，也有效带动了省会郑州的物流业发展。'
          },
          {
            title: '有利于中原文化传播',
            desc: '通过与全国各地读者、教师、渠道商等的紧密联系，天星教育坚持诚信守诺、合作共赢的经营理念，体现了河南人诚实、自信、豁达、关爱的文化理念，已经成为河南文化的一面旗帜，展现了中原文化的风采。',
            photo: [
              {
                title: '第二届《教材帮》编委颁奖会',
                src: require('../assets/img/shgy/shgy_photo01.png')
              }
            ]
          },
          {
            title: '积极投身社会慈善事业',
            desc: '天星教育（含关联单位）源于社会、扎根教育，每位企业员工都有为教育、人民群众无私奉献的爱心和决心。自企业成立以来，累计为社会及学校捐书150多万册，捐款216461元，捐书捐款共计1100万余元，树立了良好的社会形象。',
            photo: [
              {
                title: '天星教育爱心捐书助学校园行',
                src: require('../assets/img/shgy/shgy_photo02.png')
              },
              {
                title: '天星教育校园行',
                src: require('../assets/img/shgy/shgy_photo03.png')
              },
              {
                title: '天星教育爱心捐书助学校园行',
                src: require('../assets/img/shgy/shgy_photo04.png')
              },
              {
                title: '天星教育向沁阳一中捐赠价值二十三万元图书',
                src: require('../assets/img/shgy/shgy_photo05.png')
              },
              {
                title: '天星教育爱心图书捐赠仪式在周口举行 ',
                src: require('../assets/img/shgy/shgy_photo06.png')
              },
              {
                title: '天星教育向滑县六中捐赠价值二十三万元图书',
                src: require('../assets/img/shgy/shgy_photo07.png')
              },
              {
                title: '向宋庆龄基金会捐款十万元',
                src: require('../assets/img/shgy/shgy_photo08.png')
              },
              {
                title: '天星教育向梁北二中捐赠500余册图书',
                src: require('../assets/img/shgy/shgy_photo09.png')
              },
              {
                title: '天星教育援助汶川赈灾',
                src: require('../assets/img/shgy/shgy_photo10.png')
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  .about-view{
    .bottom-banner{
      padding-top: 10px;
      img{
        display: block;
        margin:0 auto;
        max-width:100%;
      }
    }
  }

  .about-detail {
    padding-top: 30px;
    padding-bottom: 180px;
    .main-title {
      font-size: 24px;
      line-height: 1.5;
      padding-bottom: 30px;
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
    .main-section {
      margin-top: 10px;
      padding-bottom: 20px;
      text-indent: 2em;
      line-height: 1.8;
    }
    .main-list-section {
      padding-top: 20px;
      padding-bottom: 15px;
      border-top: 1px solid #eee;
      line-height: 1.8;
      overflow: hidden;
      h3{
        font-size: 18px;
        margin-bottom: 5px;
      }
      & > p{
        text-indent: 2em;
      }
      p {
        font-size: 14px;
        margin-bottom:0.4em;
      }
      .photo-show{
        display: flex;
        flex-wrap: wrap;
        padding-top: 20px;
        .img-item-content{
          margin-right:30px;
          margin-bottom: 25px;
          .img-item{
            width:300px;
            height:200px;
            img{
              max-height: 100%;
              max-width:100%;
            }
          }
          .item-desc{
            margin: 15px 0;
            font-size:14px;
            text-align: center;
          }
        }

      }
    }
  }

  @media screen and (max-width: 767px) {
  }
</style>
