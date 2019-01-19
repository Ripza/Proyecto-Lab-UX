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
        <div class="first">Evento</div>
        <div class="second">Evento</div>
        <div>Evento</div>
        <div>Evento</div>
      </div>
      <div class="news"> 
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
