import Vue from 'vue'
import store from '../store/index' // vuex
import Router from 'vue-router'
import Panel from '@/components/Panel'
import Keyword from '@/components/Keyword'
import About from '@/components/About'
import Feedback from '@/components/Feedback'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Panel',
      meta: {index: 0}, // meta对象的index用来定义当前路由的层级,由小到大,由低到高
      component: Panel
    },
    {
      path: '/keyword',
      name: 'keyword',
      meta: {index: 1},
      component: Keyword
    },
    {
      path: '/about',
      name: 'about',
      meta: {index: 2},
      component: About
    },
    {
      path: '/feedback',
      name: 'Feedback',
      meta: {index: 3},
      component: Feedback
    }
  ]
})

router.beforeEach(({ meta }, from, next) => {
  store.commit('SET_ACTIVE_NAV_CURRENT', meta.index)
  next()
})

export default router
