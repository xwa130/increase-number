import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../pages/Signup';
import Calculator from '../pages/Calculator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/signup'
    },
    {
      path: '/signup',
      component: Signup,
      name: 'signup'
    },
    {
      path: '/calculator',
      component: Calculator,
      name: 'calculator'
    }
  ]
});