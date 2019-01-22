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
      <h1><strong>Alto nivel de endeudamiento revela poca educación financiera de los chilenos</strong></h1>
    </div>
    <div class="new-description"> 
      <h6 class="font-weight-light">Autor: La Coyuntura</h6>
      <h6 class="font-weight-light">25 Enero 2019</h6>
    </div>

    <div class="new-image">
      <img src="../img/news/economia-2.jpg"></img>
    </div>
    <div class="new-bajada">
      El director del Magíster en Economía Financiera de nuestra Casa de Estudios, Dr. Orlando Balboa, considera que la deuda de los hogares del país, que alcanza el 42% del PIB, es demasiado alta para la media de los países emergentes. Según datos del Fondo Monetario Internacional, Chile es el país con mayor endeudamiento de Latinoamérica. “En general, los chilenos hacen poco estudio sobre las condiciones de los créditos y no comparan”, afirma. Por eso, sostiene que es el deber de los bancos entregar información sumamente clara y concisa a sus clientes.
    </div>
    <div class="new-body"> 
      <div class="field field-name-body field-type-text-with-summary field-label-hidden">
      <div class="field-items">
      <div class="field-item even">
      <p><span style="font-family: helvetica;">A nivel de personas, Chile registra el nivel m&aacute;s alto de endeudamiento de Am&eacute;rica Latina. Seg&uacute;n datos del Fondo Monetario Internacional (FMI), la deuda de los hogares en el pa&iacute;s alcanza un 42% del Producto Interno Bruto (PIB), muy por sobre pa&iacute;ses como Argentina, M&eacute;xico o Brasil, donde los &iacute;ndices se sit&uacute;an en 4%, 15% y 27%, respectivamente.</span></p>
      <p><span style="font-family: helvetica;">Para el economista y Director del Mag&iacute;ster en Econom&iacute;a Financiera de la Universidad de Santiago, Dr. Orlando Balboa, el nivel de endeudamiento refleja la poca educaci&oacute;n financiera de los chilenos al momento de solicitar cr&eacute;ditos bancarios.</span></p>
      <p><span style="font-family: helvetica;">&ldquo;El aumento en el endeudamiento revela que, en general, los chilenos hacen poco estudio sobre las condiciones de los cr&eacute;ditos y no comparan&rdquo;, sostiene. Por eso, considera necesario que las instituciones bancarias ofrezcan informaci&oacute;n resumida y clara sobre el financiamiento que ofrecen, para que el cliente pueda tomar una mejor decisi&oacute;n y no sobreendeudarse.</span></p>
      <p><span style="font-family: helvetica;">El tambi&eacute;n Director del Departamento de Econom&iacute;a de la Facultad de Administraci&oacute;n y Econom&iacute;a (FAE) del plantel estatal explica que lo recomendable es que las personas no cancelen m&aacute;s del 20% de sus ingresos en pagar cr&eacute;ditos. El acad&eacute;mico se&ntilde;ala que este porcentaje corresponde, de hecho, a la media de la deuda que registran los hogares de pa&iacute;ses emergentes.</span></p>
      <p><span style="font-family: helvetica;">Adem&aacute;s, indica que &ldquo;las personas de menores ingresos tienen mucho m&aacute;s deuda, lo que no est&aacute; reflejado en el dato estad&iacute;stico&rdquo;. El acad&eacute;mico se&ntilde;ala que el 42% de la deuda de los hogares respecto del PIB corresponde a un promedio, por lo que habr&iacute;a que analizar el detalle para llegar al verdadero nivel de deuda de los m&aacute;s sectores socioecon&oacute;micos m&aacute;s pobres.</span></p>
      <p><span style="font-family: helvetica;">&ldquo;A nivel macro, si sigue creciendo la deuda, podr&iacute;a ser fuente potencial de cierta inestabilidad financiera&rdquo;, advierte. &ldquo;Estamos muy por sobre la media y no somos un pa&iacute;s avanzado, donde los niveles de endeudamiento son mucho m&aacute;s altos porque tienen sistemas financieros mucho m&aacute;s regulados&rdquo;, explica.</span></p>
      <p><span style="font-family: helvetica;">Sin embargo, reconoce que la banca ha aumentado las exigencias para acceder a cr&eacute;ditos hipotecarios, por ejemplo, donde antes era f&aacute;cil obtener a un financiamiento del 90% y, actualmente, lo com&uacute;n es que entreguen un 80%, asegura.</span></p>
      <p><span style="font-family: helvetica;">&ldquo;Debe haber m&aacute;s competencia e los bancos tienen que ofrecer un m&iacute;nimo de informaci&oacute;n cuando ofrecen un cr&eacute;dito, que permita comparar f&aacute;cilmente los plazos, costos y condiciones en general&rdquo;, concluye.</span></p>
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
