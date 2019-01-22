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
      <h1><strong>No obtuve gratuidad y quiero apelar, ¿cómo hacerlo?</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">La Coyuntura</h6>
      <h6 class="font-weight-light">21 de marzo de 2018</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/educacion-2.jpg"></img>
    </div>
    <div class="new-bajada">
      Son muchos los usachinos que estudian en la universidad con gratuidad. El beneficio permite estudiar sin costo a los alumnos de familias correspondientes al 60% de menores ingresos de la población y no deberán cancelar el arancel ni la matrícula durante la duración formal de la carrera.
    </div>
    <div class="new-body"> 
      <p><span style="font-size: 14pt; font-family: helvetica;">Para hacer v&aacute;lida la gratuidad, los estudiantes deben estar matriculados en alguna de las instituciones adscritas al beneficio, no contar con un t&iacute;tulo profesional previo o un grado de licenciatura terminal, ya sea obtenido en alguna instituci&oacute;n nacional o extranjera.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Hay otros requisitos m&aacute;s, pero lo cierto es que todos quienes completaron sus datos en el Formulario &Uacute;nico de Acreditaci&oacute;n Socioecon&oacute;mica (FUAS) pueden conocer aqu&iacute; si obtuvieron la gratuidad para el 2018.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Sin embargo, comenz&oacute; el segundo proceso de inscripci&oacute;n en el FUAS, adem&aacute;s del per&iacute;odo de apelaci&oacute;n de los resultados que fueron asignados. Es decir, todos quienes deseen la gratuidad podr&aacute;n concretar este paso.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">La apelaci&oacute;n puede realizar a trav&eacute;s del portal de resultados de Beneficios Estudiantiles<strong>.</strong> All&iacute; se deber&aacute;n escanear o digitalizar los documentos que respalden la situaci&oacute;n para luego cargarlos en el formulario o plataforma de apelaci&oacute;n en l&iacute;nea.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">El proceso terminar&aacute; el viernes 23 de marzo hasta las 14.00 horas y los resultados se publicar&aacute;n el 30 de abril en los sitios de Gratuidad y Beneficios Estudiantiles.</span></p>
      <h1><span style="font-size: 18pt; font-family: helvetica;">&iquest;C&oacute;mo apelar?</span></h1>
      <p><span style="font-size: 14pt; font-family: helvetica;">Todos quienes deseen apelar, deber&aacute;n ingresar al sitio de beneficios estudiantiles y hacer clic en el bot&oacute;n &ldquo;Apelar&rdquo;, ingresar el RUN y contrase&ntilde;a utilizada para completar el FUAS.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">All&iacute; los estudiantes ver&aacute;n la lista con las 12 causales de apelaci&oacute;n. Despu&eacute;s tendr&aacute;n que marcar las opciones que correspondan a la situaci&oacute;n, seleccionar el RUN del integrante del grupo familiar a quien pertenecen o los documentos para respaldar y luego cargar los archivos en la plataforma.</span></p>
      <p><span style="font-size: 14pt; font-family: helvetica;">Hay que repetir el proceso por cada integrante del hogar que requiera la documentaci&oacute;n y por cada causal que el estudiante escoja. As&iacute; se validar&aacute; el proceso de apelaci&oacute;n.</span></p>
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
