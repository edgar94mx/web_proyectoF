import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaInicio from './components/PaginaInicio.vue';
import InicioSesion from './components/InicioSesion.vue';
import Registro from './components/Registro.vue';
import Error404 from './components/Error404.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

//Declaracion de todas la rutas de navegacion (Paginas)
const routes = [
  {path:'/', redirect:'/home'},
  {path:'/home', name:'home', component: App},
  {path:'/iniciosesion', name:'iniciosesion', component:InicioSesion},
  {path:'/registro', name:'registro', component:Registro},
  {path:'/paginainicio', name:'paginainicio', component:PaginaInicio},
  {path:'*', name:'error404', component: Error404}
  

];

const router =  new VueRouter({ routes, mode:'history' });

new Vue({

  router,

  el: '#app',
  render: h => h(App)
})