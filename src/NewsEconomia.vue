<template>
<div class="center">

  <div class="news-nav">
    <div class="items-2">
      <div><a href="/#/newscomunidad">Comunidad Universitaria</a></div>
      <div><a href="/#/newsacademico" style="color: orange;">Académico</a></div>
    </div>
    <div class="items-3">
      <div><a href="/#/newseducacion">Educación</a></div>
      <div><a href="/#/newsciencia">Ciencia y Tecnología</a></div>
      <div><a href="/#/newseconomia" style="color: orange;">Economía</a></div>
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
      <div class="economia-1"></div>
      <div class="text-side">
        <div class="category">Economía</div>
        <div class="title"><a href="/#/news11">Economista Pattillo frente a incremento del desempleo: “Imagen global no se ve mal, pero en detalle es compleja”</a></div>
        <div class="date">02/01/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="economia-2"></div>
      <div class="text-side">
        <div class="category">Economía</div>
        <div class="title"><a href="/#/news12">Alto nivel de endeudamiento revela poca educación financiera de los chilenos</a></div>
        <div class="date">11/17/2017</div>
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
