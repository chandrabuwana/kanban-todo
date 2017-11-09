import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
// import Modal from '@/components/Modal'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    }
    // ,
    // {
    //   path: '/modal'
    //   name: 'Modal',
    //   component:  Modal
    // }
  ]
})
