// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import jQuery from 'jquery'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store/index'
import './assets/css/base.less'
import './bower_components/animate.css/animate.min.css'

import Loading from './components/common/loading'
import PageHeader from './components/common/header'
import PageFooter from './components/common/footer'
import PageBanner from './components/common/page-banner'
import PartLoading from './components/common/part-loading'

import MetaInfo from 'vue-meta-info'
// require('es6-promise').polyfill()
import promise from 'es6-promise'
promise.polyfill()
import axios from 'axios'

Vue.use(Loading)
Vue.use(MetaInfo)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'static/img/loading.gif',
  attempt: 1
})

// common components
Vue.component(PageHeader.name, PageHeader)
Vue.component(PageFooter.name, PageFooter)
Vue.component(PageBanner.name, PageBanner)
Vue.component(PartLoading.name, PartLoading)
Vue.prototype.$http = axios
Vue.config.productionTip = false
window.$ = jQuery

router.beforeEach((to, from, next) => {
  /* globals Pace */
  Pace.restart()
  next()
})
window.tesoon = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  mounted () {
    this.$store.commit('resize')
    $(window).on('resize', () => {
      this.$store.commit('resize')
    })
  }
})
