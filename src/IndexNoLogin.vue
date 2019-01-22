<template>
<div class="center">
  <!--
  <h2>{{title}}</h2>
    <img class="logo-big" src="./img/vue-logo.png" />
    <p>
      Plantilla hecha con Vue.js y Webpack
    </p>
    -->
    <div class="two-columns">

      <div class="events">
        <div class="title title-container">Eventos</div>
          <div class="first">
            <div class="img-container">
              <div class="text"><a href="/#/event4">IIeX Latam 2018</a><br><br>30/01/2019 - 14:00</div>
            </div>
          </div>
          <div class="second">
            <h2>¿Quieres descubrir eventos de acuerdo a tus intereses?<br><br><a href="/#/login">Ingresa</a> a la plataforma y obten contenido personalizado</h2>
          </div>
          <div class="item-1">
            <div class="img-container"></div>
            <div class="text"><a href="/#/event3">Atlas Cinematográfico de Chile presenta el documental “En Tránsito”</a><br><br>28/01/2019 - 17:00</div>
          </div>
          <div class="item-2">
            <div class="img-container"></div>
            <div class="text"><a href="/#/event5">Exhibición “Matta. Obra Gráfica"</a><br><br>31/01/2019 - 10:00</div>
          </div>
        </div>

      <div class="news">
        <div class="title title-container">Noticias</div>
        <div class="item-1">
          <div class="img-container">
            <div class="text"><a href="/#/news3">Licaf va por el bicampeonato y Periodismo sueña con volver a primera</a></div>
          </div>
        </div>
        <div class="item-2">
          <div class="img-container">
            <div class="text"><a href="/#/news10">Investigan efectos de algas marinas para remover hidrocarburos del mar</a></div>
          </div>
        </div>
      </div>

    </div>

  <footer>
    <FooterContent></FooterContent>
  </footer>
  
</div>
</template>

<style>
</style>

<script>
import FooterContent from './FooterContent.vue';
export default{
  data(){
    return{
      title:'Index'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  },
  components:{
    FooterContent
  }
}
</script>
