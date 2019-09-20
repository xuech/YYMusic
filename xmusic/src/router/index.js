import Vue from 'vue'
import Router from 'vue-router'
import xheader from '../components/xheader/xheader'
import recommend from '../components/recommend/recommend'
import singer from '../components/singer/singer'
import rank from '../components/rank/rank'
import search from '../components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xheader',
      component: xheader
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
