<template>
<div class="body-container">
  <div class="back">
    <a href="#" class="btn btn-outline-secondary">Volver a eventos</a>
  </div>
  <div class="event-container">

    <div class="event-title"> 
      <h5>Cine</h5>
      <h1><strong>Atlas Cinematográfico de Chile presenta el documental “En Tránsito”</strong></h1>
    </div>
    <div class="event-description"> 
      <h6 class="font-weight-light">Departamento de Extensión</h6>
      <h6 class="font-weight-light">28 de enero de 2019 a las 17:00 horas</h6>
    </div>

    <div class="event-image"> 
        <img src="../img/evento-5.jpg"></img>
    </div>

    <div class="event-details"> 
      <div class="event-date"> 
        <p>Sala Estación, Edificio VIME.<br>Av. Las Sophoras 175. Estación </p>
      </div>
      <div class="event-umovil"> 
        <img class="event-map" src="../img/mapa.png"></img>
        <a href="#" class="btn-umovil">Cómo llegar (Usach Movil)</a>
      </div>

    </div>
    <div class="event-body">
      Cerramos nuestro “Atlas Cinematográfico de Chile 2018” con el estreno en #SalaEstación del documental “En Tránsito” (2018). Relato dirigido por Constanza Gallardo, que reúne los testimonios de cuatro personas trans: Mara Rita (1991-2016) profesora, poetisa y activista trans; Paty, que cuando decidió hacer su tránsito cambió de amistades y de trabajo tras el rechazo de su familia; Matías, un niño que tuvo el apoyo irrestricto de su familia pero no así de su colegio ni de sus compañeros y compañeras; y Gis, que pese a venir de una familia lesboparental, de igual forma, tuvo que afrontar el rechazo de sus madres al optar por su identidad de género no binaria.
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
