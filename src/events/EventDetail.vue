<template>
<div class="body-container">
  <div class="back">
    <a href="#" class="btn btn-outline-secondary">Volver a eventos</a>
  </div>
  <div class="event-container">

    <div class="event-title"> 
      <h1><strong>Titulo de Evento</strong></h1>
    </div>
    <div class="event-description"> 
      <h6 class="font-weight-light">Autor: La Coyuntura</h6>
      <h6 class="font-weight-light">25 Enero 2019</h6>
    </div>

    <div class="event-image"> 
        <img src="../img/evento-8.jpg"></img>
    </div>

    <div class="event-details"> 
      <div class="event-date"> 
        <p>Lugar VIME</p>
      </div>
      <div class="event-umovil"> 
        <img class="event-map" src="../img/mapa.png"></img>
        <a href="#" class="btn-umovil">Cómo llegar (Usach Movil)</a>
      </div>

    </div>
    <div class="event-body"> 

      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim ligula, viverra aliquet accumsan suscipit condimentum lacinia nam placerat taciti, auctor platea hendrerit conubia himenaeos ultrices phasellus molestie. Vehicula mattis posuere purus viverra senectus ac luctus dictum mi, proin turpis arcu diam sodales commodo accumsan curabitur, fusce vulputate morbi integer scelerisque ut sociosqu euismod. Nibh convallis laoreet magna cum ultricies vitae potenti, venenatis pretium vestibulum arcu consequat quisque aptent, penatibus accumsan nec proin rhoncus integer. Duis curae aptent odio nascetur fusce at placerat maecenas in, fermentum mi consequat vestibulum interdum aenean elementum fringilla.</p> <p>Nulla posuere fermentum fames arcu aliquet velit primis vivamus, blandit tincidunt proin magnis gravida lectus nam, rhoncus montes non nunc erat inceptos neque. Natoque nostra faucibus id elementum tristique aliquam aenean nulla nullam posuere sagittis eleifend maecenas nam, vel pharetra morbi egestas dis nisi lectus tempor eu accumsan class non. Lectus aliquam nisl tempor proin quis fusce purus ut cubilia id platea vivamus, sapien viverra auctor tortor maecenas rhoncus condimentum suscipit et commodo elementum.</p> <p>Maecenas potenti commodo montes gravida natoque donec vestibulum tellus, conubia aliquam purus cum faucibus lacinia quisque, sed erat suspendisse nulla porttitor ornare velit. Enim suspendisse odio primis aptent, vulputate blandit in. Justo integer enim dui curabitur nibh mi natoque diam convallis praesent, nullam arcu egestas ut dis parturient quis montes libero, hac potenti commodo vel etiam quisque morbi penatibus nisi. Rutrum natoque litora potenti interdum rhoncus quam sollicitudin ridiculus, pellentesque dignissim venenatis facilisi luctus augue ut ad cum, phasellus auctor duis diam sem tortor porttitor. A sagittis feugiat luctus tellus ultrices nascetur volutpat eu, nostra taciti blandit ridiculus himenaeos condimentum sed urna montes, aptent est proin iaculis hac ullamcorper posuere.</p>
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
