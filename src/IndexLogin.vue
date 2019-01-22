<template>
<div class="center">

  <div class="events-login">
    <div>
      <div class="title">Eventos</div>
      <div class="preferences">
        <div>Charlas y Conferencias</div>
        <div>Ferias y Festivales</div>
        <div>Música</div>
        </div>
    </div>
    <div class="events">
      <div class="first">
        <div class="img-container">
          <div class="text">Festival de Divulgación del Conocimiento "Cambalache"<br><br>12/12/2018 - 11:00</div>
        </div>
      </div>
      <div class="item">
        <div class="evento-login-1">
          <div class="text">Charla: Modelos matemáticos para modelar colas y tiempos de espera: nuevas aproximaciones y análisis asintóticos<br><br>21/11/2018 - 10:00</div>
        </div>
      </div>
      <div class="item">
        <div class="evento-login-2">
          <div class="text">Concierto de Navidad Orquesta Clásica y Coro U. de Santiago<br><br>01/12/2018 - 12:00</div>
        </div>
      </div>
      <div class="item">
        <div class="evento-login-3">
          <div class="text">VI Panel de Educación No Sexista<br><br>25/01/2019 - 10:00</div>
        </div>
      </div>
    </div>
  </div>

  <div class="news-login">
    <div>
      <div class="title">Noticias</div>
      <div class="preferences">
        <div>Deportes</div>
        <div>Cultura</div>
        <div>Educación</div>
        <div>Ciencia y Tecnología</div>
      </div>
    </div>
    <div class="events">
      <div class="first">
        <div class="news-login-first">
          <div class="text">Rugby femenino de la Usach se coronó campeón del torneo de clausura</div>
        </div>
      </div>
      <div class="item">
        <div class="news-login-1">
          <div class="text">Hay interesantes premios: participa en el concurso de fotografía sobre Derechos Humanos</div>
        </div>
      </div>
      <div class="item">
        <div class="news-login-2">
          <div class="text">No obtuve gratuidad y quiero apelar, ¿cómo hacerlo?</div>
        </div>
      </div>
      <div class="item">
        <div class="news-login-3">
          <div class="text">Torneo de robótica en Planetario define a ganadores para competencia internacional</div>
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
</style>

<script>
import FooterContent from './FooterContent.vue';

export default{
  data(){
    return{
      title:'Index con login'
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
