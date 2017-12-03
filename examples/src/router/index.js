import VueRouter from 'vue-router'
import Vue from 'vue'
import TellerBasic from '../components/TellerBasic'
import TellerPromise from '../components/TellerPromise'
import TellerAsyncAwait from '../components/TellerAsyncAwait'

Vue.use(VueRouter)

/* Routing
---------------------------------------------------------------------------------------------------------- */
var router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: { name: 'Basic' }
    },
    {
      path: '/basic',
      name: 'Basic',
      component: TellerBasic
    },
    {
      path: '/promise',
      name: 'Promise',
      component: TellerPromise
    },
    {
      path: '/async-await',
      name: 'AsyncAwait',
      component: TellerAsyncAwait
    }
  ]
})

// router.onError(err => {
//   Vm.$notify({
//     title: 'Error',
//     message: err.message || 'Routing Error',
//     type: 'error'
//   })
// })

export default router
