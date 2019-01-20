<template>
<div class="center">

  <!--
  <div class="local-navigation">Navegación</div>
  -->

  <div class="two-columns">

    <div>
      <div class="title-date" style="text-align: start;">Eventos desde Martes, 22 de enero de 2019</div>
      <div class="events-list">
        <div class="event-item">
          <div class="img-container-8"></div>
          <div class="text-side">
            <div class="title">Orquesta Clásica U. de Santiago en Pedro Aguirre Cerda</div>
            <div class="date">23/01/2019 a las 17:00</div>
            <div class="place">Centro Cultural Pedro Aguirre Cerda. Paseo Grohnert 5510. Santiago, Chile</div>
            <div class="button">
              <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="info-circle"/> Ver más</a>
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="img-container-4"></div>
          <div class="text-side">
            <div class="title">VI Panel de Educación No Sexista</div>
            <div class="date">25/01/2019 a las 10:00</div>
            <div class="place">Sala 251, Edificio Citecamp de la Universidad de Santiago de Chile. Las Sophoras 175, Estación Central.</div>
            <div class="button">
              <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="info-circle"/> Ver más</a>
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="img-container-5"></div>
          <div class="text-side">
            <div class="title">Atlas Cinematográfico de Chile presenta el documental “En Tránsito”</div>
            <div class="date">28/01/2019 a las 17:00</div>
            <div class="place">Sala Estación / Edificio VIME. Av. Las Sophoras 175. Estación Central, Santiago, Chile.</div>
            <div class="button">
              <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="info-circle"/> Ver más</a>
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="img-container-6"></div>
          <div class="text-side">
            <div class="title">IIeX Latam 2018</div>
            <div class="date">30/01/2019 a las 14:00</div>
            <div class="place">Universidad Autónoma. Av.Pedro de Valdivia 641, Providencia.</div>
            <div class="button">
              <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="info-circle"/> Ver más</a>
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="img-container-7"></div>
          <div class="text-side">
            <div class="title">Exhibición “Matta. Obra Gráfica"</div>
            <div class="date">31/01/2019 a las 10:00</div>
            <div class="place">Museo de Arte Contemporáneo</div>
            <div class="button">
              <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="info-circle"/> Ver más</a>
            </div>
          </div>
        </div>
        <div class="event-item">
          <div class="img-container-1"></div>
          <div class="text-side">
            <div class="title">Primera Jornada de Comunicación Pública</div>
            <div class="date">31/01/2019 a las 15:00</div>
            <div class="place">Auditorio C del edificio Ceni VIME – USACH</div>
            <div class="button">
              <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="info-circle"/> Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="events-nav">
      <div class="search">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><font-awesome-icon icon="search"/></span>
          </div>
          <input type="text" class="form-control" placeholder="¿Qué estás buscando?">
        </div>
      </div>
      <div class="filters">
        <div class="title">Categorías</div>
        <div class="subtitle">Entretenimiento</div>
        <div><input type="checkbox"> Pinturas y Exposiciones</div>
        <div><input type="checkbox"> Cine</div>
        <div><input type="checkbox"> Teatro y Danza</div>
        <div><input type="checkbox"> Música</div>
        <div class="subtitle">Social</div>
        <div><input type="checkbox"> Deportes</div>
        <div><input type="checkbox"> Charlas y Conferencias</div>
        <div><input type="checkbox"> Ferias y Festivales</div>
      </div>
      <div class="calendar">
        <div class="title">Eventos desde</div>
        <v-calendar :attributes='attrs'>
        </v-calendar>
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
      title:'Index',
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa',
          },
          dates: new Date(2019, 0, 22)
        },
      ],
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
