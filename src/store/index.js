import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const NavList = [
  {
    name: '天星动态',
    subName: 'STAR DYNAMIC',
    to: {name: 'dynamic'},
    children: [
      {
        name: '集团新闻',
        to: {name: 'dynamictype', params: {tid: 9}}
      },
      {
        name: '行业新闻',
        to: {name: 'dynamictype', params: {tid: 10}}
      },
      {
        name: '员工活动',
        to: {name: 'dynamictype', params: {tid: 11}}
      }
    ]
  },
  {
    name: '集团业务',
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
        to: {name: 'shuzichuban'}
      }
    ]
  },
  {
    name: '了解天星',
    subName: 'KNOW THE STARS',
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
    mobileWidth: 767
  },
  mutations: {
    resize (state) {
      state.isMobile = document.body.clientWidth <= state.mobileWidth
    }
  }
})

export default store
