import Vue from 'vue'
import Router from 'vue-router'

// components
const Index = () => import('../pages/index.vue')
const Dynamic = () => import('../pages/dynamic.vue')
const DynamicDetail = () => import('../pages/dynamicDetail.vue')
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
    console.log(to.hash)
    if (to.hash && to.hash !== '#') {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
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
      path: '/dynamic',
      redirect: '/dynamic/0',
      meta: {
        title: '天星教育官网 - 天星动态'
      }
    },
    {
      name: 'dynamic',
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
          path: 'szcb',
          redirect: {name: 'serviceshuzichuban_tianxingjiaoyu'},
          component: ServiceShuzi,
          meta: {
            title: '天星教育官网 - 数字出版'
          },
          children: [
            {
              name: 'serviceshuzichuban_tianxingjiaoyu',
              path: 'txjy',
              component: ServiceShuziTxjyw,
              meta: {
                title: '天星教育官网 - 数字出版 - 天星教育网'
              }
            },
            {
              name: 'serviceshuzichuban_weixuexiquan',
              path: 'wxxq',
              component: ServiceShuziWxxq,
              meta: {
                title: '天星教育官网 - 数字出版 - 微学习圈'
              }
            },
            {
              name: 'serviceshuzichuban_weilainao',
              path: 'wln100',
              component: ServiceShuziWln,
              meta: {
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
      redirect: '/about/jianjie',
      meta: {
        title: '天星教育官网 - 了解天星'
      },
      children: [
        {
          path: 'jianjie',
          component: aboutJianjie,
          meta: {
            title: '天星教育官网 - 集团简介'
          }
        },
        {
          path: 'licheng',
          component: aboutHistory,
          meta: {
            title: '天星教育官网 - 天星大事记'
          }
        },
        {
          name: 'abouttianxingwenhua',
          path: 'txwh',
          component: aboutWenhua,
          meta: {
            title: '天星教育官网 - 天星文化'
          }
        },
        {
          path: 'zizhi',
          component: aboutZizhi,
          meta: {
            title: '天星教育官网 - 荣誉资质'
          }
        },
        {
          name: 'aboutshehuigonyi',
          path: 'shgy',
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
            title: '天星教育官网 - 社会公益'
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
router.afterEach((to, from) => {
  // if (to.meta && to.meta.title) {
  //   document.title = to.meta.title
  // }
  if (to.hash) {
    let currentY = document.documentElement.getBoundingClientRect().y
    let el = document.querySelector(to.hash)
    if (el) {
      scrollTo(0, el.getBoundingClientRect().y - currentY)
    }
  } else {
    scrollTo(0, 0)
  }
})
export default router
