<template>
<div class="body-container">
  <div class="back">
    <a href="#" class="btn btn-outline-secondary">Volver a eventos</a>
  </div>
  <div class="event-container">

    <div class="event-title">
      <h5>Charlas y Conferencias</h5>
      <h1><strong>IIeX Latam 2018</strong></h1>
    </div>
    <div class="event-description"> 
      <h6 class="font-weight-light">VIME USACH</h6>
      <h6 class="font-weight-light">30 de enero de 2019 a las 14:00 horas</h6>
    </div>

    <div class="event-image"> 
        <img src="../img/evento-6.jpg"></img>
    </div>

    <div class="event-details"> 
      <div class="event-date"> 
        <p>Universidad Autónoma.<br>Av.Pedro de Valdivia 641, Providencia.</p>
      </div>
      <div class="event-umovil"> 
        <img class="event-map" src="../img/mapa.png"></img>
        <a href="#" class="btn-umovil">Cómo llegar (Usach Movil)</a>
      </div>

    </div>
    <div class="event-body"> 
      El académico del Departamento de Publicidad e Imagen, Juan Francisco Ugarte, se desempeñará como speaker oficial realizando un workshop en IIeX Latam 2018, donde estará involucrada la Industria Publicitaria, de marketing, negocios, estrategia e Insight, nacional e internacional 
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
