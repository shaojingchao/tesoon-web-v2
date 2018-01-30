<template>
  <div class="about-view">
    <div class="about-detail content">
      <template v-for="(item,index) in list" v-if="item.list.length">
        <h2 class="main-title">{{item.title}}</h2>
        <div class="detail-context">
          <div class="pro-list-section" v-for="subItem in item.list" :key="subItem.id">
            <div class="pro-cover">
              <b>{{subItem.year}}</b>
              <small>年</small>
            </div>
            <div class="pro-desc">
              <p v-html="subItem.content"></p>
              <div class="rongyu-pic">
                <div class="img-item" v-for="subImgItem in subItem.thumb" :key="subImgItem">
                  <img v-lazy="baseUrl + subImgItem" alt="荣誉证书">
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <part-loading v-if="isLoading"/>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CF from '../api/index'

  export default {
    data () {
      return {
        baseUrl: CF.baseUrl,
        isLoading: false,
        list: [
          {
            title: '荣誉证书',
            list: []
          },
          {
            title: '资质证书',
            list: []
          }
        ]
      }
    },
    mounted () {
      this.isLoading = true
      this.$http.get(CF.getHonor).then(res => {
        if (res.data) {
          this.list[0].list = res.data.honor
          this.list[1].list = res.data.aptitude
          this.list.map(item => {
            return item.list.sort((a, b) => a.year < b.year)
          })
          this.isLoading = false
        }
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

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
      padding-bottom: 40px;
      border-top: 1px solid #eee;
      overflow: hidden;
      .pro-cover {
        flex: 0 0 auto;
        padding-right: 10px;
        float: left;
        width: 128px;
        line-height: 1.4;
        color: @black-color;
        font-size: 26px;
        small {
          font-size: 14px;
          vertical-align: 2px;
          color:#666;
        }
        &:after {
          content: '';
          float: right;
          margin-top: 0.76em;
          display: inline-block;
          height: 0;
          border-bottom: 1px solid #bbb;
          width: 30px;
        }
      }
      .pro-desc {
        flex: 1 1 auto;
        padding-top: 7px;
        line-height: 2;
        p {
          font-size: 14px;
          color: @black-color;
        }
        .rongyu-pic {
          padding-top: 10px;
          overflow: hidden;
          .img-item {
            float: left;
            max-width: 168px;
            margin-right: 10px;
            img {
              display: block;
              max-width: 100%;
              max-height: 168px;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
  }
</style>
