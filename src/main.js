import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Veutify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes : routes
});

new Vue({
  render: h => h(App),
  router : router,
  store: store
}).$mount('#app');
