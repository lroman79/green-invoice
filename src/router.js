import Vue from 'vue';
//import store from './store';
import Router from 'vue-router';

Vue.use(Router);

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: loadView('Welcome'),
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '/user-info',
      name: 'userInfo',
      component: loadView('UserInfo'),
      meta: { 
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
 
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !localStorage.getItem('token')) {
    next('/login');
  }
  else next();
});

export default router;
