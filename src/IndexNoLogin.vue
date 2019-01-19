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
            <h2> Festival de Divulgación del Conocimiento "Cambalache"</h2>
          </div>
        </div>
        <div class="second">
          <h2>¿Quieres descubrir eventos de acuerdo a tus intereses ? Ingresa a la plataforma y obten contenido personalizado</h2>
        </div>
        <div>Evento</div>
        <div>Evento</div>
      </div>
      <div class="news">
        <div class="title title-container">Noticias</div>
        <div>Noticia</div>
        <div>Noticia</div>
      </div>

    </div>
  
</div>
</template>
<script>
export default{
  data(){
    return{
      title:'Index'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>
