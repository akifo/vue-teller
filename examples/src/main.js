import 'babel-polyfill'
import Vue from 'vue'
import VueTeller from 'vue-teller'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'github-markdown-css/github-markdown.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/style.styl'

Vue.config.debug = true

Vue.use(VueTeller)
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
