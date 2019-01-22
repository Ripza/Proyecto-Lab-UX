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
      <h1><strong>Activista Blas Radi expuso en la Usach sobre el aborto desde una perspectiva trans</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">U de Santiago al Día</h6>
      <h6 class="font-weight-light">20 de noviembre de 2018</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/cultura-1.jpg"></img>
    </div>
    <div class="new-bajada">
      El debate en torno a la legalización del aborto no solo está en Chile, países como Argentina también lo discuten. “¿Derechos escasos?” fue el seminario que el filósofo y activista trans, Blas Radi, impartió en la Vicerrectoría de Vinculación con el Medio (VIME), ocasión donde analizó la interrupción del embarazo en el país trasandino desde una perspectiva trans.
    </div>
    <div class="new-body"> 
      <p><span style="font-size: 14pt; font-family: helvetica;">Radi recurre al instrumental conceptual de las epistemolog&iacute;as cr&iacute;ticas y se inscribe en el marco de los estudios trans. Ha ofrecido cursos a educadores y comunicadores, junto con escribir y disertar tanto en Argentina y en el extranjero sobre cisexismo, privilegio cis, y violencia epistemol&oacute;gica.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">El fil&oacute;sofo present&oacute; e impuls&oacute; el proyecto para el respeto de la identidad de g&eacute;nero en el &aacute;mbito de la Facultad de Filosof&iacute;a y Letras, form&oacute; parte del Frente Nacional por la Ley de Identidad de G&eacute;nero el 2012, e impuls&oacute; distintos proyectos contra los requisitos etarios en el &aacute;mbito acad&eacute;mico.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Blas Radi coment&oacute; que el embarazo se transforma una experiencia &uacute;nica de la mujer, imponiendo nuevamente el c&oacute;digo binario. &ldquo;En la misma lucha se dan voces marginales&rdquo;.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">&ldquo;Se deben reconocer las implicancias de embarazo y aborto de personas que no sean mujeres cis. Esos conceptos forman parte del repertorio de los proyectos y viene desde las discusiones contraculturales&rdquo;, expres&oacute; Radi.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Tambi&eacute;n expuso una serie de mitos que la comunidad habla sobre los hombres trans.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;"><strong>Mitolog&iacute;a pol&iacute;tica sobre aborto y hombres trans:</strong></span></p>
      <ul>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans son todos iguales.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans no quieren tener hijos.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans no pueden reproducirse.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans son est&eacute;riles.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">No est&aacute; bien que los hombres trans se reproduzcan.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">La salud sexual y (no) reproductiva, y los derechos vinculados con ella, no son un tema de hombres.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">El tema de los hombres trans en muy nuevo.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans nunca &ldquo;pusieron el cuerpo&rdquo;</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans est&aacute;n contemplados en el uso de la X y de la categor&iacute;a &ldquo;cuerpos gestantes&rdquo; en la agenda de derechos sexuales y (no) reproductivos.</span></li>
      <li><span style="font-size: 14pt; font-family: helvetica;">Los hombres trans no son la poblaci&oacute;n que m&aacute;s sufre la vulneraci&oacute;n de sus derechos sexuales y (no) reproductivos.</span></li>
      </ul>
      <p><span style="font-size: 14pt; font-family: helvetica;">El fil&oacute;sofo continu&oacute; la charla este martes en el Cite Camp ante la jornada de investigaci&oacute;n de la Facultad de Humanidades (FAHU) 2018.</span></p>
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
