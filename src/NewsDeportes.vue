<template>
<div class="center">

  <div class="news-nav">
    <div class="items-2">
      <div><a href="/#/newscomunidad" style="color: orange;">Comunidad Universitaria</a></div>
      <div><a href="/#/newsacademico">Académico</a></div>
    </div>
    <div class="items-3">
      <div><a href="/#/newssalud">Salud</a></div>
      <div><a href="/#/newsdeportes" style="color: orange;">Deportes</a></div>
      <div><a href="/#/newscultura">Cultura</a></div>
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
      <div class="deportes-1"></div>
      <div class="text-side">
        <div class="category">Deportes</div>
        <div class="title"><a href="/#/news3">Licaf va por el bicampeonato y Periodismo sueña con volver a primera</a></div>
        <div class="date">13/12/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="deportes-2"></div>
      <div class="text-side">
        <div class="category">Deportes</div>
        <div class="title"><a href="/#/news4">Rugby femenino de la Usach se coronó campeón del torneo de clausura</a></div>
        <div class="date">23/11/2018</div>
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
