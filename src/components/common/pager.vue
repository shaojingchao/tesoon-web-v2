<template>
  <div class="un-select pagination-wrap">
    <ul class="pagination">
      <li :class="{disabled:currentPage === 1}" @click="goToPage(1)"><a title="首页" class="side-btn" href="javascript:"><<</a>
      </li>
      <li :class="{disabled:currentPage === 1}" @click="prevPage()"><a title="上一页" class="side-btn"
                                                                       href="javascript:"><</a></li>
      <li v-for="item in pages"
          :class="{active:currentPage === item}"
          @click="goToPage(item)"><a href="javascript:">{{item}}</a></li>
      <li :class="{disabled:currentPage === pageNum}" @click="nextPage()"><a title="下一页" class="side-btn"
                                                                             href="javascript:">></a></li>
      <li :class="{disabled:currentPage === pageNum}" @click="goToPage(pageNum)"><a title="尾页" class="side-btn"
                                                                                    href="javascript:">>></a></li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/css/_mixins-wln.less";

  .pagination-wrap {
    .pagination {
      position: relative;
      display: inline-block;
    }

    .pagination li {
      display: inline-block;
      text-align: center;
    }

    .pagination li a {
      font-size: 12px;
      width: 26px;
      height: 26px;
      line-height: 26px;
      border-radius: 1px;
      display: inline-block;
      border: 1px solid #fff;
      background: #fff;
      color: @black-color;
      &.side-btn {
        /*width:4em;*/
        font-size: 1.15em;
        line-height: 26px;
        font-weight: 400;
        font-family: Simsun, sans-serif;
      }
    }

    .pagination li a:hover {
      background-color: #eee;
      border-color: #eee;
    }

    .pagination li.active a {
      background-color: @primary;
      border-color: @primary;
      color: #fff;
    }
  }

  @media screen and (max-width: 767px) {
    .pagination-wrap {
      text-align: center;
      margin-top: 20px;
    }
  }


</style>
<script type="text/ecmascript-6">
  export default {
    name: 'pager',
    data () {
      return {
        showItem: 5
      }
    },
    props: {
      currentPage: {
        default: 1,
        type: [Number, String]
      },
      pageNum: {
        default: 0,
        type: [Number, String]
      },
      totalCount: {
        default: 0,
        type: [Number, String]
      }
    },
    computed: {
      pages () {
        let pag = []
        if (this.currentPage < this.showItem) {
          // 判断应该显示几项页码
          let pageLen = Math.min(this.showItem, this.pageNum)
          while (pageLen > 0) {
            pag.unshift(pageLen)
            pageLen--
          }
        } else {
          let len = this.showItem
          let middle = Math.floor(this.showItem / 2)
          let itemStart = this.currentPage - middle

          if (middle + this.currentPage >= this.pageNum) {
            itemStart = this.pageNum - this.showItem + 1
          }
          while (len--) {
            pag.push(itemStart++)
          }
        }
        return pag
      }
    },
    methods: {
      goToPage (index) {
        if (index === this.currentPage || index > this.pageNum || index < 1) {
          return false
        } else {
          // 这里可以发送ajax请求
          this.$emit('goToPage', index)
        }
      },
      nextPage () {
        let index = this.currentPage + 1
        this.goToPage(index)
      },
      prevPage () {
        let index = this.currentPage - 1
        this.goToPage(index)
      }
    }
  }
</script>
