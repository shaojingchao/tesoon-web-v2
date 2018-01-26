import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import CF from '../api/index'

Vue.use(Vuex)
Vuex.Store.prototype.$http = axios
let pageNav = [
  {
    name: '天星动态',
    subName: 'TIANXING NEWS',
    to: {name: 'dynamic'},
    children: [
      {
        name: '公司新闻',
        to: {name: 'dynamictype'}
      },
      {
        name: '行业新闻',
        to: {name: 'dynamictype'}
      },
      {
        name: '员工活动',
        to: {name: 'dynamictype'}
      }
    ]
  },
  {
    name: '公司业务',
    subName: 'BUSINESS',
    to: {name: 'service'},
    children: [
      {
        name: '教育出版',
        to: {name: 'jiaoyuchuban'}
      },
      {
        name: '综合出版',
        to: {name: 'zonghechuban'}
      },
      {
        name: '数字出版',
        to: {name: 'shuzichuban', query: {top: 1}}
      }
    ]
  },
  {
    name: '了解天星',
    subName: 'KNOW TIANXING',
    to: {name: 'about'},
    children: [
      {
        name: '公司简介',
        to: {name: 'aboutgongsijianjie'}
      },
      {
        name: '天星大事记',
        to: {name: 'abouttianxingdashiji'}
      },
      {
        name: '天星文化',
        to: {name: 'abouttianxingwenhua'}
      },
      {
        name: '荣誉资质',
        to: {name: 'aboutrongyuzizhi'}
      },
      {
        name: '社会公益',
        to: {name: 'aboutshehuigongyi'}
      },
      {
        name: '加入我们',
        to: {name: 'aboutjob'}
      }
    ]
  }
]

const store = new Vuex.Store({
  state: {
    isMobile: false,
    mobileWidth: 767,
    pageNav
  },
  getters: {
    dynamicNav (state) {
      return state.pageNav[0]
    }
  },
  mutations: {
    resize (state) {
      state.isMobile = document.body.clientWidth <= state.mobileWidth
    },
    updateMainNav (state, list) {
      state.pageNav[0].children = list.map(item => {
        return {
          tid: item.tid,
          name: item.name,
          to: {name: 'dynamictype', params: {tid: item.tid}}
        }
      })
    }
  },
  actions: {
    getDynamicType () {
      // 获取新闻分类
      this.$http.get(CF.getDynamicsType).then((res, rev) => {
        let _data = res.data
        let _list = [
          {
            tid: '0',
            name: '全部动态'
          }
        ]
        Object.keys(_data).forEach((item, i) => {
          _list.push({
            tid: item,
            name: _data[item]
          })
        })
        this.commit('updateMainNav', _list)
      })
    }
  }
})

store.dispatch('getDynamicType')

export default store
