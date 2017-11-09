import Vue from 'vue';
import Vuetify from 'vuetify';
import router from './router';
import App from './pages/App';
import './node_modules/vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});