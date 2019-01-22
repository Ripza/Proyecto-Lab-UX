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
      <h1><strong>Hay interesantes premios: participa en el concurso de fotografía sobre Derechos Humanos</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">La Coyuntura</h6>
      <h6 class="font-weight-light">08 de noviembre de 2018</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/cultura-2.jpg"></img>
    </div>
    <div class="new-bajada">
      En diciembre se conmemorarán 70 años de la Declaración Universidad de los Derechos Humanos, principal hito mundial que vela por la promoción, protección y respeto de los derechos humanos.
    </div>
    <div class="new-body"> 
      <p><span style="font-size: 14pt; font-family: helvetica;">Para conmemorar la proclamaci&oacute;n, la Universidad de Santiago est&aacute; realizando la segunda versi&oacute;n del concurso de fotograf&iacute;a &ldquo;Celebremos nuestra dignidad: 70 a&ntilde;os de la Declaraci&oacute;n Universal de los Derechos Humanos&rdquo;. &iquest;Te gusta la fotograf&iacute;a? Esta es una oportunidad para mostrar todo el talento.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">La iniciativa es organizada por el Programa de Responsabilidad Social Universitaria a trav&eacute;s de su &aacute;rea de Derechos Humanos. La convocatoria busca acercar la declaraci&oacute;n a la comunidad estudiantil para sensibilizar y difundir los principios de los derechos fundamentales de las personas en Chile y el mundo.</span></p>
      <h1><span style="font-size: 18pt; font-family: helvetica;">&iquest;Qui&eacute;nes pueden participar?</span></h1>
      <p><span style="font-size: 14pt; font-family: helvetica;">Todos los integrantes de la Universidad de Santiago hasta el 19 de noviembre, desde estudiantes en modalidad diurno y vespertino, hasta funcionarios y acad&eacute;micos. Incluso, podr&aacute;n enviar sus fotograf&iacute;as los egresados y profesores horas.&nbsp;</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Los participantes podr&aacute;n presentar dos fotograf&iacute;as que hagan referencia espec&iacute;fica a alguno de los 30 art&iacute;culos de la Declaraci&oacute;n Universal de los Derechos Humanos. Los trabajos pueden ser anal&oacute;gicos o digitales, a color, blanco y negro o intervenido. Adem&aacute;s, pueden ser capturadas con c&aacute;mara fotogr&aacute;fica o celulares. Lo importante es tener una &oacute;ptima resoluci&oacute;n de imagen para garantizar la calidad de la obra e incluir una breve reflexi&oacute;n de la imagen.&nbsp;</span></p>
      <h1><span style="font-size: 18pt; font-family: helvetica;">Premios</span></h1>
      <p><span style="font-size: 14pt; font-family: helvetica;">Se galardonar&aacute; a los tres mejores lugares. El primer puesto se llevar&aacute; un bolso deportivo Usach con regalos sorpresa y dos entradas al Planetario. El segundo lugar tendr&aacute; en su poder una mochila con regalos sorpresa y dos entradas al Planetario.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">En tanto, para el tercer puesto habr&aacute; una polera deportiva Usach con un regalo sorpresa y dos entradas al Planetario. Por &uacute;ltimo, existir&aacute; una menci&oacute;n honrosa que se llevar&aacute; dos entradas al Planetario m&aacute;s un regalo sorpresa.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Las fotograf&iacute;as deber&aacute;n enviarse al correo electr&oacute;nico concursofotosddhh@usach.cl. M&aacute;s informaci&oacute;n se puede encontrar aqu&iacute;.</span></p>
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
