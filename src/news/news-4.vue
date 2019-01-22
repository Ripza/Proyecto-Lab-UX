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
      <h1><strong>Rugby femenino de la Usach se coronó campeón del torneo de clausura</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">La Coyuntura</h6>
      <h6 class="font-weight-light">23 de noviembre de 2018</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/deportes-2.jpg"></img>
    </div>
    <div class="new-bajada">
      El equipo de rugby femenino de la Universidad de Santiago, se adjudicó el torneo de clausura, tras vencer en el ultimo partido de la jornada al equipo de Lobos por un marcador de 31-10. Con eso, lograron el ascenso a la primera división de la categoría. 
    </div>
    <div class="new-body"> 
      <p><span style="font-family: helvetica;"><span style="font-size: 14pt;">Valentina B&oacute;rquez, jugadora de las &ldquo;Leonas Usach&rdquo; de rugby femenino, mencion&oacute; las dificultades que presenta para ellas la pr&aacute;ctica de este deporte dentro del plantel.</span><span style="font-size: 14pt;">&ldquo;La universidad no ha dado el pie para apoyarnos como rugby Usach, ni a las mujeres ni a los hombres&rdquo;.</span></span></p>
      <p><span style="font-family: helvetica; font-size: 14pt;">El equipo de las Leonas logr&oacute; lo imposible, ya que sin el financiamiento de la universidad y sin el lugar adecuado para los entrenamientos, alz&oacute; el titulo de campe&oacute;n y firm&oacute; su nombre con letras doradas en el deporte usachino.&nbsp;</span></p>
      <p><span style="font-family: helvetica;"><span style="font-size: 14pt;">Pese a que el desarrollo del torneo no fue el m&aacute;s adecuado, las chicas siempre supieron sobreponerse a las complicaciones del primer partido de la jornada, mostrando</span><span style="font-size: 14pt;">&nbsp;una clara mejor&iacute;a en los siguientes encuentros.&nbsp;</span></span></p>
      <p><span style="font-family: helvetica; font-size: 14pt;">&ldquo;Siempre tenemos el primer partido clave, porque es la primera posici&oacute;n que tenemos en la cancha y no siempre obtenemos los resultados que queremos, pero es lo que hemos trabajado&rdquo;, dijo B&oacute;rquez.&nbsp;</span></p>
      <p><span style="font-family: helvetica;"><span style="font-size: 14pt;">El equipo dirigido por Jos&eacute; &ldquo;Speedy&rdquo; cuenta con un muy buen &aacute;nimo dentro del plantel, en el que destacan las actitudes de muchas jugadoras. Todas ellas&nbsp;</span><span style="font-size: 14pt;">deciden sacrificar tiempo y dinero para brindar con amor una alegr&iacute;a y un titulo m&aacute;s a la universidad.</span></span></p>
      <p><span style="font-family: helvetica; font-size: 14pt;">Por lo pronto, el equipo entrena en los pastos de la Facultad de Ciencias para lo que ser&aacute; la participaci&oacute;n en la primera divisi&oacute;n de rugby femenino, y as&iacute; demostrar que no existe la palabra imposible para ellas.</span></p>
    </div>

  </div>

    <footer>
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
footer{
  margin-left: 0;
  margin-right: 0%;
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
