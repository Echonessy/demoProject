import Vue from 'vue'
import Router from 'vue-router'
import parents from '@/views/parents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parents',
      component: parents
    }
  ]
})
