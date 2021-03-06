import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend'
import singer from '../components/singer/singer'
import rank from '../components/rank/rank'
import search from '../components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    }
  ]
})
