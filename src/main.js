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
import EventDetail from './events/EventDetail.vue';
import NewDetail from './news/NewDetail.vue';
import News from './News.vue';
import NewsComunidad from './NewsComunidad.vue';
import NewsCultura from './NewsCultura.vue';
import NewsDeportes from './NewsDeportes.vue';
import NewsSalud from './NewsSalud.vue';
import AboutUs from './AboutUs.vue';
import AcercaDe from './AboutUs.vue';
import AboutUs from './AcercaDe.vue';
import Contact from './Contacto.vue';

import NewsAcademico from './NewsAcademico.vue';
import NewsCiencia from './NewsCiencia.vue';
import NewsEducacion from './NewsEducacion.vue';
import NewsEconomia from './NewsEconomia.vue';

import News1 from './news/news-1.vue';
import News2 from './news/news-2.vue';
import News3 from './news/news-3.vue';
import News4 from './news/news-4.vue';
import News5 from './news/news-5.vue';
import News6 from './news/news-6.vue';
import News7 from './news/news-7.vue';
import News8 from './news/news-8.vue';
import News9 from './news/news-9.vue';
import News10 from './news/news-10.vue';
import News11 from './news/news-11.vue';
import News12 from './news/news-12.vue';

import Event1 from './events/event-1.vue';
import Event2 from './events/event-2.vue';
import Event3 from './events/event-3.vue';
import Event4 from './events/event-4.vue';
import Event5 from './events/event-5.vue';
import Event6 from './events/event-6.vue';

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
  { path: '/new-detail', component: NewDetail},
  { path: '/indexLogin', component: IndexLogin},
  { path: '/aboutUs', component: AboutUs},
  { path: '/Contacto', component: Contact},
  { path: '/AcerdaDe', component: AcercaDe},

  { path: '/news1', component: News1},
  { path: '/news2', component: News2},
  { path: '/news3', component: News3},
  { path: '/news4', component: News4},
  { path: '/news5', component: News5},
  { path: '/news6', component: News6},
  { path: '/news7', component: News7},
  { path: '/news8', component: News8},
  { path: '/news9', component: News9},
  { path: '/news10', component: News10},
  { path: '/news11', component: News11},
  { path: '/news12', component: News12},

  { path: '/event1', component: Event1},
  { path: '/event2', component: Event2},
  { path: '/event3', component: Event3},
  { path: '/event4', component: Event4},
  { path: '/event5', component: Event5},
  { path: '/event6', component: Event6}
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
