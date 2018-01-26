<template>
  <div class="about-view">
    <div class="about-detail content">
      <h2 class="main-title">加入我们</h2>

      <div class="job-list-table" v-if="list.length">
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
          <template v-for="(item,index) in list">
            <tr class="job-item" :class="{'active': jobListShowMap[index]}"
                @click="showItem(index)">
              <td>{{item.title}}</td>
              <td class="un-select tc">{{item.salary_range}}</td>
              <td class="un-select tc">{{item.city}}</td>
              <td class="un-select tc">{{(item.add_time > item.update_time ? item.add_time : item.update_time) * 1000 |
                formatTime}}
              </td>
              <td class="un-select tc"><i class="handle iconfont tx-icon-down"
                                          :class="{'is-open': jobListShowMap[index]}"></i></td>
            </tr>
            <transition name="fadeIn-down">
              <tr class="job-desc-tr" v-show="jobListShowMap[index]">
                <td colspan="5">
                  <div class="job-desc-content">
                    <p v-if="item.description" v-html="'岗位职责：<br>' + item.description"></p>
                    <br>
                    <p v-if="item.requirements" v-html="'任职要求：<br>' + item.requirements"></p>
                  </div>
                  <div class="pt20">
                    <a :href="item.url" target="_blank" class="apply-btn btn btn-primary">投递简历</a>
                  </div>
                </td>
              </tr>
            </transition>
          </template>
          </tbody>
        </table>
      </div>
      <div class="tc pt30" style="height:40px;" v-if="!isLoaded">
        <part-loading style="padding:0; height:40px;" v-if="isLoading"/>
        <!--<span v-else-if="isLoaded" class="grayc">没有更多招聘信息~</span>-->
        <a href="javascript:" class="btn btn-primary" @click="loadMore" v-else>加载更多</a>
      </div>

      <div class="tc text-muted f16 mt30">
        <a href="http://company.zhaopin.com/%E9%83%91%E5%B7%9E%E5%A4%A9%E6%98%9F%E6%95%99%E8%82%B2%E5%9B%BE%E4%B9%A6%E7%AD%96%E5%88%92%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_CC153971215.htm"
           target="_blank"
           class="btn btn-second">查看全部招聘信息</a>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import CF from '../api/index'
  import {formatTime} from '../util/formatTime'

  export default {
    data () {
      return {
        pageBanner: require('../assets/img/banner/product_banner.png'),
        jobListShowMap: [], // 默认展开全部职位
        isLoading: false,
        pages: {
          page: 0,
          pageNum: null,
          totalCount: null
        },
        list: []
      }
    },
    filters: {
      formatTime: formatTime
    },
    computed: {
      isMobile () {
        return this.$store.state.isMobile
      },
      isLoaded () {
        return this.pages.page === parseInt(this.pages.pageNum)
      }
    },
    mounted () {
      this.getJobData(() => {
        this.$set(this.jobListShowMap, 0, true)
      })
    },
    methods: {
      getJobData (cb) {
        if (this.isLoaded) return false
        this.pages.page += 1
        this.isLoading = true
        this.$http.get(CF.getJobs, {
          params: {
            page: this.pages.page,
            pagesize: 20 // 请求 5 条数据
          }
        }).then(res => {
          if (res.data.data) {
            this.list = this.list.concat(res.data.data)
            this.pages.pageNum = res.data.pages.pageNum
            this.pages.pageCount = res.data.pages.pageCount
            this.isLoading = false
            cb && cb()
          }
        })
      },
      showItem (i) {
        this.$set(this.jobListShowMap, i, !this.jobListShowMap[i])
      },
      loadMore () {
        this.getJobData()
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
          .handle {
            display: inline-block;
            transition: transform .3s;
            &.is-open {
              transform: rotateZ(180deg);
            }
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
            font-weight: 700;
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
