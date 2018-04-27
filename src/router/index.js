import Vue from 'vue'
import Router from 'vue-router'
import Navigator from '@/components/Navigator'
import Panel from '@/components/Panel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigator',
      component: Navigator
    },
    {
      path: '/',
      name: 'Panel',
      component: Panel
    }
  ]
})
