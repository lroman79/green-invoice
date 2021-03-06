import Vue from 'vue'
import Meta from 'vue-meta';
import router from './router';
import store from './store';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Meta);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
