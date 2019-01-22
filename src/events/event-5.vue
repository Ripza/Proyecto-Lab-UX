<template>
<div class="body-container">
  <div class="back">
    <a href="#" class="btn btn-outline-secondary">Volver a eventos</a>
  </div>
  <div class="event-container">

    <div class="event-title">
      <h6>Pinturas y Exposiciones</h6>
      <h1><strong>Exhibición “Matta. Obra Gráfica"</strong></h1>
    </div>
    <div class="event-description"> 
      <h6 class="font-weight-light">USACH.cl</h6>
      <h6 class="font-weight-light">31 de enero de 2019 a las 10:00 horas</h6>
    </div>

    <div class="event-image"> 
        <img src="../img/evento-7.jpg"></img>
    </div>

    <div class="event-details"> 
      <div class="event-date"> 
        <p>MAC, Parque Forestal.<br>Metro estación Bellas Artes<br>Santiago, Chile</p>
      </div>
      <div class="event-umovil"> 
        <img class="event-map" src="../img/mapa.png"></img>
        <a href="#" class="btn-umovil">Cómo llegar (Usach Movil)</a>
      </div>

    </div>
    <div class="event-body"> 
      <div class="field field-name-body field-type-text-with-summary field-label-hidden">
      <div class="field-items">
      <div class="field-item even">
      <p><span style="font-family: helvetica;">El Museo de Arte Contempor&aacute;neo presenta <strong>entre el 25 de octubre hasta el 20 de enero en su sede Parque Forestal, la exhibici&oacute;n <em>Matta. Obra Gr&aacute;fica 1943 &ndash; 1968. De la New School de New York a la Revoluci&oacute;n Intelectual de 1968</em></strong>, curada por In&eacute;s Ortega- M&aacute;rquez.</span></p>
      <p><span style="font-family: helvetica;"><strong>M&aacute;s de 170 obras, entre litograf&iacute;as y aguafuertes / aguatintas </strong>pertenecientes a una colecci&oacute;n privada nunca antes exhibida, adem&aacute;s de<strong> pruebas de artista intervenidas con notas de Matta, libros y otros objetos, exploran la faceta menos conocida de uno de los artistas nacionales m&aacute;s reconocidos mundialmente: la de grabador.</strong></span></p>
      <p><span style="font-family: helvetica;">La muestra abre con la serie The New School, los primeros trabajos realizados por el artista a inicios de los cuarenta en el m&iacute;tico Taller 17 de Stanley William Hayter y abarca hasta las obras realizadas en los sesenta, su d&eacute;cada m&aacute;s pol&iacute;tica. En la muestra, exploraciones conceptuales como la del Cubo Abierto y el hiperespacio, y conflictos como la Guerra de Vietnam y los Procesos de N&uacute;remberg, se contrastan con las influencias del movimiento hippie.</span></p>
      <p><span style="font-family: helvetica;">Para Matta el grabado y la pintura constituyeron dos lenguajes diferentes y paralelos, dejando en evidencia las b&uacute;squedas, obsesiones, cr&iacute;ticas y tensiones propias de hombre contempor&aacute;neo.</span></p>
      <p><span style="font-family: helvetica;">La inauguraci&oacute;n de <em>Matta. Obra Gr&aacute;fica 1943 &ndash; 1968. De la New School de New York a la Revoluci&oacute;n Intelectual de 1968</em> se realizar&aacute; el <strong>31 de enero a las 10:00 hrs en MAC Parque Forestal</strong>. Entrada liberada.</span></p>
      </div>
      </div>
      </div>
    </div>

  </div>

  <footer class="footer-news">
    <FooterContent></FooterContent>
  </footer>
    
</div>
</template>

<style>
.event-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;

  padding: 15px;

 /* border: 1px solid #d6d6d6; */
  
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
}
.event-title {
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;  
  grid-row-end: 2;
  margin-bottom: 20px;
}
.event-description {
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 2;  
  grid-row-end: 3;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  color:rgb(119, 119, 119) !important;
}
.event-image {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 3;  
  grid-row-end: 4;
}
.event-image img{
  /* max-width: 100%; */
  width: auto;
  max-height: 600px;
  margin-top: 5px;
  max-width: 600px;
}
.event-details {
  grid-column-start: 7;
  grid-column-end: 13;
  grid-row-start: 3;  
  grid-row-end: 4;

}

.event-details .event-date p{
  font-weight: bold;
}
.event-details .event-date p:last-child{
  margin: 0;
}
.event-details .event-umovil{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-date{
  display: flex;
  flex-direction: column;

  margin: 10px 0;
  align-items: center;

  padding-right: 200px;
  color:rgb(119, 119, 119) !important;
}
.event-details .event-umovil .event-map{
  max-width: 300px;
  max-height: 300px;

  margin: 10px 0;
}
.event-body {
  max-width: 600px;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 5;
  grid-row-end: 6;
}



.new-bajada {
  max-width: 500px;
  background-color: orange;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 4;
  grid-row-end: 5;
  padding-top: 20px;
  margin-bottom: 20px;
  margin-left: 100px;
  padding-left: 5px;
  padding-bottom: 5px;
  color: #ffffff;

}


footer {
  margin-top: 0em;
}
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
      title:'Detalle Evento'
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
