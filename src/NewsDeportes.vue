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
      <div class="img-container-news-1"></div>
      <div class="text-side">
        <div class="category">Categoría</div>
        <div class="title">Título</div>
        <div class="date">Fecha</div>
      </div>
    </div>
    <div class="news-item">
      <div class="img-container-news-1"></div>
      <div class="text-side">
        <div class="category">Categoría</div>
        <div class="title">Título</div>
        <div class="date">Fecha</div>
      </div>
    </div>
    <div class="news-item">
      <div class="img-container-news-1"></div>
      <div class="text-side">
        <div class="category">Categoría</div>
        <div class="title">Título</div>
        <div class="date">Fecha</div>
      </div>
    </div>
    <div class="news-item">
      <div class="img-container-news-1"></div>
      <div class="text-side">
        <div class="category">Categoría</div>
        <div class="title">Título</div>
        <div class="date">Fecha</div>
      </div>
    </div>
    <div class="news-item">
      <div class="img-container-news-1"></div>
      <div class="text-side">
        <div class="category">Categoría</div>
        <div class="title">Título</div>
        <div class="date">Fecha</div>
      </div>
    </div>
    <div class="news-item">
      <div class="img-container-news-1"></div>
      <div class="text-side">
        <div class="category">Categoría</div>
        <div class="title">Título</div>
        <div class="date">Fecha</div>
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
