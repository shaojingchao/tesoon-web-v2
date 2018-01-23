<template>
  <div class="about-view">
    <div class="about-detail content">
      <h2 class="main-title">加入我们</h2>

      <div class="job-list-table">
        <table class="table">
          <thead>
          <tr>
            <th class="col1">职位</th>
            <th class="col2 tc">薪资范围</th>
            <th class="col3 tc">{{isMobile ? '地点': '工作地点'}}</th>
            <th class="col4 tc">发布时间</th>
            <th class="col5 tc"></th>
          </tr>
          </thead>
          <tbody>
          <template v-for="(item,index) in jobList">
            <tr class="job-item" :class="{'active': jobListShowMap[index] === true}"
                @click="showItem(index)">
              <td>课外阅读产品经理</td>
              <td class="un-select tc">4000-8000元/月</td>
              <td class="un-select tc">郑州</td>
              <td class="un-select tc">2017-12-16</td>
              <td class="un-select tc">{{jobListShowMap[index] === true ? '-' : '+'}}</td>
            </tr>
            <transition name="fadeIn-down">
              <tr class="job-desc-tr" v-show="jobListShowMap[index] === true">
                <td colspan="5">
                  <div class="job-desc-content">
                    岗位职责：<br>
                    将学科知识趣味化、故事化，扩大中学生知识面，提高中学生学生学科素养，帮助学生培养学习兴趣。能胜任选题策划等编辑出版工作，负责杂志及图书栏目、内容的策划及稿件的把控等。
                    <br>
                    <br>
                    任职要求：<br>
                    1、专业不限，了解中学生阅读喜好，有良好的文字功底及语言表达能力；<br>
                    2、视野开阔、思维灵活，善于发现和策划新的图书选题；<br>
                    3、文字功底扎实、有较强的信息和文字处理能力，文案能力强；<br>
                    4、有教育、出版相关工作经验优先。
                  </div>
                  <div class="pt20">
                    <a href="" class="apply-btn btn btn-primary">投递简历</a>
                  </div>
                </td>
              </tr>
            </transition>
          </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        pageBanner: require('../assets/img/banner/product_banner.png'),
        jobList: 10,
        jobListShowMap: [],
        isLoadDone: false,
        list: []
      }
    },
    metaInfo () {
      return {
        title: '天星教育 - 教育出版'
      }
    },
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      }
    },
    mounted () {
      this.$set(this.jobListShowMap, 0, 0)
      if (this.isMobile) {
        for (let i = 0; i < this.jobList; i++) {
          console.log(i, i)
          this.$set(this.jobListShowMap, i, true)
        }
      }
    },
    methods: {
      showItem (i) {
        this.$set(this.jobListShowMap, i, !this.jobListShowMap[i])
      }
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
    .job-list-table {
      .table {
        table-layout: fixed;
        width: 100%;
        thead {
          background-color: @bg-body;
          font-size: 16px;
        }
        tr {
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }
        th {
          padding: .6em 0.5em;
        }
        td {
          padding: .7em;
        }
        th.col1 {
          width: auto;
        }
        th.col2 {
          width: 180px;
        }
        th.col3 {
          width: 160px;
        }
        th.col4 {
          width: 120px;
        }
        th.col5 {
          width: 50px;
        }
        tr.job-item {
          cursor: pointer;
          &:hover {
            background-color: @bg-body;
          }
          &.active {
            background-color: fade(@bg-body, 80%);
          }
        }
        tr.job-desc-tr {
          td {
            padding: 20px 10px;
          }
        }
      }
      .apply-btn {
        padding: 0.35em 2em;
        transition: all .3s;
        &:hover:not(.disabled) {
          box-shadow: 0 6px 20px -3px fade(@primary, 80%);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .about-detail {
      .job-list-table {
        .table {
          thead {
            font-size: 14px;
          }
          th {
            padding: .7em .2em;
          }
          td {
            padding: .6em .2em;
            font-size: 12px;
            text-align: center;
          }
          th.col1 {
            width: auto;
            text-align: center;
          }
          th.col2 {
            width: auto;
          }
          th.col3 {
            width: 3em;
          }
          th.col4 {
            width: 5em;
          }
          th.col5 {
            width: 1.5em;
          }
          tr.job-item {
            cursor: pointer;
            font-weight:700;
          }
          tr.job-desc-tr {
            td {
              text-align: left;
              padding: 20px 10px;
            }
          }
        }
        .apply-btn {
          padding: 0.35em 2em;
          transition: all .3s;
          &:hover:not(.disabled) {
            box-shadow: 0 6px 20px -3px fade(@primary, 80%);
          }
        }
      }
    }
  }
</style>
