import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
require("./style.scss");

/*
FontAwesome icons
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faFileDownload, faHistory, faLayerGroup, faSpinner, faInfoCircle, faArrowLeft, faSignInAlt, faUserPlus, faEdit, faSignOutAlt, faSave, faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faRedo } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faFileDownload, faHistory, faLayerGroup, faSpinner, faInfoCircle, faArrowLeft, faSignInAlt, faUserPlus, faEdit, faSignOutAlt, faSave, faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faRedo)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

import IndexNoLogin from './IndexNoLogin.vue';
import Login from './Login.vue';
import IndexLogin from './IndexLogin.vue';

const routes = [
  { path: '/indexNoLogin', alias: '/', component: IndexNoLogin},
  { path: '/login', component: Login},
  { path: '/indexLogin', component: IndexLogin}
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
