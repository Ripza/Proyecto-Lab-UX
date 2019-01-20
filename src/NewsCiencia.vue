<template>
<div class="center">

  <div class="news-nav">
    <div class="items-2">
      <div><a href="/#/newscomunidad">Comunidad Universitaria</a></div>
      <div><a href="/#/newsacademico" style="color: orange;">Académico</a></div>
    </div>
    <div class="items-3">
      <div><a href="/#/newseducacion">Educación</a></div>
      <div><a href="/#/newsciencia" style="color: orange;">Ciencia y Tecnología</a></div>
      <div><a href="/#/newseconomia">Economía</a></div>
    </div>
  </div>

  <div class="news-search">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><font-awesome-icon icon="search"/></span>
        </div>
        <input type="text" class="form-control" placeholder="¿Qué estás buscando?">
      </div>
    </div>
  
  <div class="news-list">
    <div class="news-item">
      <div class="ciencia-1"></div>
      <div class="text-side">
        <div class="category">Ciencia y Tecnología</div>
        <div class="title">Torneo de robótica en Planetario define a ganadores para competencia internacional</div>
        <div class="date">12/06/2017</div>
      </div>
    </div>
    <div class="news-item">
      <div class="ciencia-2"></div>
      <div class="text-side">
        <div class="category">Ciencia y Tecnología</div>
        <div class="title">Investigan efectos de algas marinas para remover hidrocarburos del mar</div>
        <div class="date">18/01/2018</div>
      </div>
    </div>
  </div>

  <footer>
    <FooterContent></FooterContent>
  </footer>
    
</div>
</template>

<style>
.img-container-news-1{
      background-image: url('./img/evento-1.jpg');
      background-position: fixed;
      background-size: cover;
      width: 100%;
      height: 100%;
    }
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
