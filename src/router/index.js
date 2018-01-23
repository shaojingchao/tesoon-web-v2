import Vue from 'vue'
import Router from 'vue-router'

// components
const Index = () => import('../pages/index.vue')
const Dynamic = () => import('../pages/dynamic.vue')
const DynamicDetail = () => import('../pages/dynamic-detail.vue')
const Service = () => import('../pages/service.vue')
const ServiceEdu = () => import('../pages/service-jycb.vue')
const ServiceZonghe = () => import('../pages/service-zhcb.vue')
const ServiceShuzi = () => import('../pages/service-szcb.vue')
const ServiceShuziTxjyw = () => import('../pages/service-szcb-txjyw.vue')
const ServiceShuziWxxq = () => import('../pages/service-szcb-wxxq.vue')
const ServiceShuziWln = () => import('../pages/service-szcb-wln.vue')
const About = () => import('../pages/about.vue')
const aboutJianjie = () => import('../pages/about-gsjj.vue')
const aboutHistory = () => import('../pages/about-txdsj.vue')
const aboutWenhua = () => import('../pages/about-txwh.vue')
const aboutZizhi = () => import('../pages/about-ryzz.vue')
const aboutGongyi = () => import('../pages/about-shgy.vue')
const aboutJob = () => import('../pages/about-job.vue')
// const aboutLianxi = () => import('../components/aboutLianxi.vue')
const ErrorPage = () => import('../pages/404.vue')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  // 仅在 mode history 可用
  scrollBehavior (to, from, savedPosition) {
    console.log('scrollBehavior')
    if (to.hash && to.hash !== '#') {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition
    } else if (to.meta.scrollToTop && to.meta.scrollToTop === false) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '天星教育官网 - 首页'
      },
      component: Index
    },
    {
      name: 'dynamic',
      path: '/dynamic',
      redirect: '/dynamic/0',
      component: Dynamic,
      meta: {
        title: '天星教育官网 - 天星动态'
      }
    },
    {
      name: 'dynamictype',
      path: '/dynamic/:tid',
      component: Dynamic,
      meta: {
        title: '天星教育官网 - 天星动态'
      }
    },
    {
      name: 'dynamicdetail',
      path: '/dynamic/:tid/:id',
      component: DynamicDetail,
      meta: {
        title: '天星教育官网 - 天星动态'
      }
    },
    {
      name: 'service',
      path: '/service',
      redirect: '/service/jycb',
      component: Service,
      children: [
        {
          name: 'jiaoyuchuban',
          path: 'jycb',
          component: ServiceEdu,
          meta: {
            title: '天星教育官网 - 教育出版'
          }
        },
        {
          name: 'zonghechuban',
          path: 'zhcb',
          component: ServiceZonghe,
          meta: {
            title: '天星教育官网 - 综合出版'
          }
        },
        {
          name: 'shuzichuban',
          path: '',
          redirect: {name: 'shuzichuban_tianxingjiaoyu'},
          component: ServiceShuzi,
          meta: {
            title: '天星教育官网 - 数字出版'
          },
          children: [
            {
              name: 'shuzichuban_tianxingjiaoyu',
              path: 'szcb_txjy',
              component: ServiceShuziTxjyw,
              meta: {
                scrollToTop: false,
                title: '天星教育官网 - 数字出版 - 天星教育网'
              }
            },
            {
              name: 'shuzichuban_weixuexiquan',
              path: 'szcb_wxxq',
              component: ServiceShuziWxxq,
              meta: {
                scrollToTop: false,
                title: '天星教育官网 - 数字出版 - 微学习圈'
              }
            },
            {
              name: 'shuzichuban_weilainao',
              path: 'szcb_wln100',
              component: ServiceShuziWln,
              meta: {
                scrollToTop: false,
                title: '天星教育官网 - 数字出版 - 未来脑'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      redirect: '/about/intro',
      meta: {
        title: '天星教育官网 - 了解天星'
      },
      children: [
        {
          name: 'aboutgongsijianjie',
          path: 'intro',
          component: aboutJianjie,
          meta: {
            title: '天星教育官网 - 公司简介'
          }
        },
        {
          name: 'abouttianxingdashiji',
          path: 'history',
          component: aboutHistory,
          meta: {
            title: '天星教育官网 - 天星大事记'
          }
        },
        {
          name: 'abouttianxingwenhua',
          path: 'culture',
          component: aboutWenhua,
          meta: {
            title: '天星教育官网 - 天星文化'
          }
        },
        {
          name: 'aboutrongyuzizhi',
          path: 'honor',
          component: aboutZizhi,
          meta: {
            title: '天星教育官网 - 荣誉资质'
          }
        },
        {
          name: 'aboutshehuigongyi',
          path: 'gongyi',
          component: aboutGongyi,
          meta: {
            title: '天星教育官网 - 社会公益'
          }
        },
        {
          name: 'aboutjob',
          path: 'job',
          component: aboutJob,
          meta: {
            title: '天星教育官网 - 加入我们'
          }
        }
      ]
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage,
      meta: {
        title: '天星教育官网 - 页面未找到'
      }
    }
  ]
})

// 路由钩子
router.afterEach((to) => {
  $(document).ready(() => {
    console.log(to)
    if (to.hash && to.hash.length > 1) {
      let currentY = document.documentElement.getBoundingClientRect().y
      let el = document.querySelector(to.hash)
      if (el) {
        scrollTo(0, el.getBoundingClientRect().y - currentY)
      }
      // 完成导航后滚动到页面顶部
    } else if (to.meta.scrollToTop === undefined || to.meta.scrollToTop === true || to.query.top === 1) {
      scrollTo(0, 0)
    }
  })
})

export default router
