import Vue from 'vue'
import Router from 'vue-router'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import Match from '../components/Matchs/CreateMatch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/match',
      name: 'Match',
      component: Match
    }
  ]
})
