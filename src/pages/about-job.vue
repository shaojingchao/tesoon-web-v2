<template>
  <div class="about-view">
    <div class="about-detail content">
      <h2 class="main-title">加入我们</h2>

      <div class="job-list-item" v-for="item in jobList">
        <div class="job-title">
          <div class="job-icon"><i class="iconfont tx-icon-user"></i></div>
          <h3>课外阅读产品经理</h3>
          <p>工作地点：郑州</p>
          <div class="handle"><a href="" class="btn btn-white">投递简历</a></div>
        </div>
        <div class="job-desc">
          <p>岗位职责：<br>
            将学科知识趣味化、故事化，扩大中学生知识面，提高中学生学生学科素养，帮助学生培养学习兴趣。能胜任选题策划等编辑出版工作，负责杂志及图书栏目、内容的策划及稿件的把控等。</p>
        </div>
        <div class="job-desc">
          <p>任职要求：<br>
            1、专业不限，了解中学生阅读喜好，有良好的文字功底及语言表达能力；<br>
            2、视野开阔、思维灵活，善于发现和策划新的图书选题；<br>
            3、文字功底扎实、有较强的信息和文字处理能力，文案能力强；<br>
            4、有教育、出版相关工作经验优先。</p>
        </div>
      </div>

      <div class="load-more content tc">
        <div class="btn" :class="{'disabled btn-white': isLoadDone, 'btn-primary': !isLoadDone}" @click="loadMoreList">
          {{isLoadDone ? '加载完毕' : '查看更多'}}
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        pageBanner: require('../assets/img/banner/product_banner.png'),
        jobList: 4,
        isLoadDone: false,
        list: []
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 教育出版'
      }
    },
    methods: {
      loadMoreList () {
        if (this.jobList < 20) {
          this.jobList += 5
        } else {
          this.isLoadDone = true
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/_mixins-wln.less";

  .about-view {
    .load-more {
      margin-top: 40px;
      .btn {
        padding: 0.35em 2em;
        transition: all .3s;
        &:hover:not(.disabled) {
          box-shadow: 0 6px 20px -3px fade(@primary, 80%);
        }
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
    .job-list-item {
      padding-top: 20px;
      padding-bottom: 15px;
      border-top: 1px solid #eee;
      line-height: 1.8;
      overflow: hidden;
      display: flex;
      flex-wrap: nowrap;
      .job-title {
        flex: 0 0 auto;
        width: 210px;
        margin-right: 20px;
        text-align: center;
        .job-icon {
          line-height: 1.1;
          .iconfont {
            font-size: 50px;
            color: @primary;
          }
        }
        h3 {
          font-size: 18px;
          margin-top: 6px;
        }
        p {
          color: #7b7b7b;
          margin-bottom: 15px;
        }
        .handle {
          .btn {
            color: #9fa5ac;
            padding: 0.3em 2em;
            &:hover {
              color: @primary;
            }
          }
        }
      }
      .job-desc {
        flex: 1;
        padding-right: 30px;
      }
    }
  }

  @media screen and (max-width: 767px) {
  }
</style>
