<template>
<div class="body-container">
  <div class="news-nav" style="margin-left: 2.5%; margin-right: 2.5%; text-align: center;">
    <div class="items-2">
      <div><a href="/#/newscomunidad">Comunidad Universitaria</a></div>
      <div><a href="/#/newsacademico" style="color: orange;">Académico</a></div>
    </div>
    <div class="items-3">
      <div><a href="/#/newseducacion">Educación</a></div>
      <div><a href="/#/newsciencia">Ciencia y Tecnología</a></div>
      <div><a href="/#/newseconomia">Economía</a></div>
    </div>
  </div>
  <div class="back">
    <a href="#" class="btn btn-outline-secondary">Volver a noticias</a>
  </div>
  <div class="new-container">

    <div class="new-title"> 
      <h1><strong>Titulo de noticia</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">Autor: La Coyuntura</h6>
      <h6 class="font-weight-light">25 Enero 2019</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/salud-2.jpg"></img>
    </div>
    <div class="new-bajada">
      Bajada de noticia
    </div>
    <div class="new-body"> 

      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim ligula, viverra aliquet accumsan suscipit condimentum lacinia nam placerat taciti, auctor platea hendrerit conubia himenaeos ultrices phasellus molestie. Vehicula mattis posuere purus viverra senectus ac luctus dictum mi, proin turpis arcu diam sodales commodo accumsan curabitur, fusce vulputate morbi integer scelerisque ut sociosqu euismod. Nibh convallis laoreet magna cum ultricies vitae potenti, venenatis pretium vestibulum arcu consequat quisque aptent, penatibus accumsan nec proin rhoncus integer. Duis curae aptent odio nascetur fusce at placerat maecenas in, fermentum mi consequat vestibulum interdum aenean elementum fringilla.</p> <p>Nulla posuere fermentum fames arcu aliquet velit primis vivamus, blandit tincidunt proin magnis gravida lectus nam, rhoncus montes non nunc erat inceptos neque. Natoque nostra faucibus id elementum tristique aliquam aenean nulla nullam posuere sagittis eleifend maecenas nam, vel pharetra morbi egestas dis nisi lectus tempor eu accumsan class non. Lectus aliquam nisl tempor proin quis fusce purus ut cubilia id platea vivamus, sapien viverra auctor tortor maecenas rhoncus condimentum suscipit et commodo elementum.</p> <p>Maecenas potenti commodo montes gravida natoque donec vestibulum tellus, conubia aliquam purus cum faucibus lacinia quisque, sed erat suspendisse nulla porttitor ornare velit. Enim suspendisse odio primis aptent, vulputate blandit in. Justo integer enim dui curabitur nibh mi natoque diam convallis praesent, nullam arcu egestas ut dis parturient quis montes libero, hac potenti commodo vel etiam quisque morbi penatibus nisi. Rutrum natoque litora potenti interdum rhoncus quam sollicitudin ridiculus, pellentesque dignissim venenatis facilisi luctus augue ut ad cum, phasellus auctor duis diam sem tortor porttitor. A sagittis feugiat luctus tellus ultrices nascetur volutpat eu, nostra taciti blandit ridiculus himenaeos condimentum sed urna montes, aptent est proin iaculis hac ullamcorper posuere.</p>
    </div>

  </div>

    <footer class="footer-news">
      <FooterContent></FooterContent>
    </footer>
    
</div>
</template>

<style>
.new-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;

  padding: 15px;

 /* border: 1px solid #d6d6d6; */
  
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
}
.new-title {
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row-start: 1;  
  grid-row-end: 2;
  margin-bottom: 10px;
}
.new-description {
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row-start: 2;  
  grid-row-end: 3;
  display: flex;
  justify-content: space-between;
  max-width: 800px;
}
.new-image {
  grid-column-start: 3;
  grid-column-end: 12;
  grid-row-start: 3;  
  grid-row-end: 4;
}
.new-image img{
  min-width: 800px;
  max-width: 100%;
  width: auto;
  max-height: 550px;
  margin-top: 5px;
}

.new-description{
  color:rgb(119, 119, 119) !important;
}

.new-details .new-date p{
  font-weight: bold;
}
.new-details .new-date p:last-child{
  margin: 0;
}
.new-details .new-umovil{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.new-details .new-umovil .new-map{
  max-width: 300px;
  max-height: 300px;

  margin: 10px 0;
}

.new-bajada {
  max-width: 700px;
  background-color: orange;
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row-start: 4;
  grid-row-end: 5;
  padding-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
  padding-left: 5px;
  padding-bottom: 5px;
  color: #ffffff;
  font-weight: bold;
}

.new-body {
  max-width: 800px;
  grid-column-start: 3;
  grid-column-end: 13;
  grid-row-start: 5;
  grid-row-end: 6;
}

/*
h1, h2, h3, h4, h5, h6{
  color: #ea7600;
}*/
.text-light{
  font-weight: lighter;
}


.back{
  margin: 10px 10px;
}
</style>

<script>
import FooterContent from '../FooterContent.vue';


export default{
  data(){
    return{
      title:'Detalle noticia'
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
