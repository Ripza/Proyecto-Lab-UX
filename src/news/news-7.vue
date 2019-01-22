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
      <h1><strong>Rector y fallo del TC: “Intereses de unos pocos no pueden imponerse sobre el bien común”</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">U de Santiago al Día</h6>
      <h6 class="font-weight-light">29 de marzo de 2018</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/educacion-1.jpg"></img>
    </div>
    <div class="new-bajada">
      “El lucro es una práctica que por tantos años hemos intentado erradicar, sin embargo, cuando ya estaba todo consensuado, el Tribunal Constitucional decide lo contrario. Es un retroceso que generará un tremendo daño al país”, advirtió el Rector de la U. de Santiago de Chile, Dr. Juan Manuel Zolezzi Cid, tras conocida la decisión de declarar inconstitucional el artículo 63 del Proyecto de Ley de Educación Superior.
    </div>
    <div class="new-body">
      <div class="field field-name-body field-type-text-with-summary field-label-hidden">
      <div class="field-items">
      <div class="field-item even">
      <p><span style="font-family: helvetica;">Luego que se confirmara la decisi&oacute;n del Pleno del Tribunal Constitucional (TC), de declarar por seis votos contra cuatro la inconstitucionalidad del art&iacute;culo 63 del proyecto de Ley de Educaci&oacute;n Superior, que proh&iacute;be que personas jur&iacute;dicas con fines de lucro se desempe&ntilde;en como controladores de instituciones de educaci&oacute;n superior, el Rector de la Universidad de Santiago de Chile, Dr. Juan Manuel Zolezzi Cid, manifest&oacute; su preocupaci&oacute;n respecto del futuro de la educaci&oacute;n p&uacute;blica del pa&iacute;s.</span></p>
      <p><span style="font-family: helvetica;">&ldquo;Esto demuestra la urgente reforma que requiere el Tribunal Constitucional en cuanto a sus competencias, pues es inadmisible que un organismo p&uacute;blico&nbsp;de este car&aacute;cter revierta la decisi&oacute;n democr&aacute;tica de los integrantes del Congreso, quienes fueron elegidos por la ciudadan&iacute;a para legislar&rdquo;, cuestion&oacute; la m&aacute;xima autoridad de la Universidad de Santiago.</span></p>
      <p><span style="font-family: helvetica;">Considerando que seg&uacute;n la decisi&oacute;n del TC el art&iacute;culo 63 transgrede el derechoestablecido en la Constituci&oacute;n, respecto de la libertad de ense&ntilde;anza y organizaci&oacute;n, el Rector Zolezzi lament&oacute; que con esta decisi&oacute;n se permita el lucro en el sistema de educaci&oacute;n superior.</span></p>
      <p><span style="font-family: helvetica;">&ldquo;Es una pr&aacute;ctica que por tantos a&ntilde;os hemos intentado erradicar, sin embargo, cuando ya estaba todo consensuado el Tribunal Constitucional decide lo contrario. Es un retroceso que generar&aacute; un tremendo da&ntilde;o al pa&iacute;s&rdquo;, advirti&oacute;.</span></p>
      <p><span style="font-family: helvetica;">En esta l&iacute;nea, el Rector Zolezzi record&oacute; que en el marco de las discusiones legislativas en torno al tema, el proyecto de ley fue revisado por tres secretar&iacute;as t&eacute;cnicas en la C&aacute;mara de Diputados y otras tres en el Senado. &ldquo;En cada una de esas instancias se ratific&oacute; de manera un&aacute;nime que su aprobaci&oacute;n requer&iacute;a s&oacute;lo de mayor&iacute;a simple y no de qu&oacute;rum calificado, como plantea el Tribunal Constitucional&rdquo;.</span></p>
      <p><span style="font-family: helvetica;">Asimismo, critic&oacute; que el pronunciamiento del Tribunal surgiera a partir del requerimiento que presentara en enero la Corporaci&oacute;n de Universidades Privadas. &ldquo;Los intereses de unos pocos terminan por imponerse por sobre el bien com&uacute;n, especialmente de aquellos estudiantes y sus familias que aspiran a una educaci&oacute;n de la m&aacute;s alta calidad posible&rdquo;, advirti&oacute; la autoridad.</span></p>
      <p><span style="font-family: helvetica;">Por &uacute;ltimo, la autoridad universitaria manifest&oacute; que ante&nbsp;la eventual posibilidad de revertir&nbsp;este&nbsp;proceso,&nbsp;conf&iacute;a no s&oacute;lo&nbsp;en la&nbsp;decisi&oacute;n presidencial,&nbsp;debido a la&nbsp;sensibilidad que ha&nbsp;evidenciado&nbsp;respecto de la educaci&oacute;n p&uacute;blica, sino tambi&eacute;n en los parlamentarios.</span></p>
      </div>
      </div>
      </div>
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
