// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.less'
import './bower_components/animate.css/animate.min.css'

import Loading from './components/common/loading'
import PageHeader from './components/common/header'
import PageFooter from './components/common/footer'

import MetaInfo from 'vue-meta-info'
// require('es6-promise').polyfill()
import promise from 'es6-promise'
promise.polyfill()
import axios from 'axios'

Vue.use(Loading)
Vue.use(MetaInfo)

// common components
Vue.component(PageHeader.name, PageHeader)
Vue.component(PageFooter.name, PageFooter)

Vue.prototype.$http = axios
Vue.config.productionTip = false

window.tesoon = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
