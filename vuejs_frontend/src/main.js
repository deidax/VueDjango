import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import "vuetify/dist/vuetify.min.css";

axios.defaults.baseUrl = 'http://127.0.0.1:8000'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  axios,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
