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
              <div class="text">Festival de Divulgación del Conocimiento "Cambalache"<br><br>12/12/2018 - 11:00</div>
            </div>
          </div>
          <div class="second">
            <h2>¿Quieres descubrir eventos de acuerdo a tus intereses?<br><br><a href="/#/login">Ingresa</a> a la plataforma y obten contenido personalizado</h2>
          </div>
          <div class="item-1">
            <div class="img-container"></div>
            <div class="text">Charla: Modelos matemáticos para modelar colas y tiempos de espera: nuevas aproximaciones y análisis asintóticos<br><br>21/11/2018 - 10:00</div>
          </div>
          <div class="item-2">
            <div class="img-container"></div>
            <div class="text">Concierto de Navidad Orquesta Clásica y Coro U. de Santiago<br><br>01/12/2018 - 12:00</div>
          </div>
        </div>

      <div class="news">
        <div class="title title-container">Noticias</div>
        <div class="item-1">
          <div class="img-container">
            <div class="text">Consideran insuficiente medida que prohíbe la publicación de rankings Simce</div>
          </div>
        </div>
        <div class="item-2">
          <div class="img-container">
            <div class="text">Radio U. de Santiago inicia programación 2018-2019 con propuestas de su audiencia</div>
          </div>
        </div>
      </div>

    </div>
  
</div>
</template>

<style>
footer {
  margin-top: 20em;
}
</style>

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
