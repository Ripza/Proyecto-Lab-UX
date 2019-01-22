import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
require("./style.scss");



/*
FontAwesome icons
*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faFileDownload, faHistory, faLayerGroup, faSpinner, faInfoCircle, faArrowLeft, faSignInAlt, faUserPlus, faEdit, faSignOutAlt, faSave, faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faRedo, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faFileDownload, faHistory, faLayerGroup, faSpinner, faInfoCircle, faArrowLeft, faSignInAlt, faUserPlus, faEdit, faSignOutAlt, faSave, faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faRedo, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/*
 v-calendar
*/
import { setupCalendar, Calendar} from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';
setupCalendar({
  firstDayOfWeek: 2 // Monday,
});
Vue.component('v-calendar', Calendar);

import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

import IndexNoLogin from './IndexNoLogin.vue';
import Login from './Login.vue';
import IndexLogin from './IndexLogin.vue';
import Events from './Events.vue';
import EventDetail from './EventDetail.vue';
import NewDetail from './NewDetail.vue';
import News from './News.vue';
import NewsComunidad from './NewsComunidad.vue';
import NewsCultura from './NewsCultura.vue';
import NewsDeportes from './NewsDeportes.vue';
import NewsSalud from './NewsSalud.vue';
import AboutUs from './AboutUs.vue';

import NewsAcademico from './NewsAcademico.vue';
import NewsCiencia from './NewsCiencia.vue';
import NewsEducacion from './NewsEducacion.vue';
import NewsEconomia from './NewsEconomia.vue';

const routes = [
  { path: '/indexNoLogin', alias: '/', component: IndexNoLogin},
  { path: '/login', component: Login},
  { path: '/indexLogin', component: IndexLogin},
  { path: '/events', component: Events},
  { path: '/news', component: News},
  { path: '/newscomunidad', component: NewsComunidad},
  { path: '/newscultura', component: NewsCultura},
  { path: '/newsdeportes', component: NewsDeportes},
  { path: '/newssalud', component: NewsSalud},
  { path: '/newsAcademico', component: NewsAcademico},
  { path: '/newsCiencia', component: NewsCiencia},
  { path: '/newsEducacion', component: NewsEducacion},
  { path: '/newsEconomia', component: NewsEconomia},
  { path: '/events', component: Events},
  { path: '/event-detail', component: EventDetail},
  { path: '/new-detail', component: NewDetail}
  { path: '/indexLogin', component: IndexLogin},
  { path: '/aboutUs', component: AboutUs},
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
