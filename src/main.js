import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify';
import store from './store/store';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

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
