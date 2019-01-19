<template>
<div class="center">

  <div class="local-navigation">Navegación</div>
  
  <div class="two-columns">

    <div class="events-list">
      <div class="event-item">
        <div class="img-container-1"></div>
        <div class="text-side">
          <div class="title">Primera Jornada de Comunicación Pública</div>
          <div class="date">31/01/2019 a las 15:00</div>
          <div class="place">Auditorio C del edificio Ceni VIME – USACH</div>
          <div class="button">
            <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="sign-in-alt"/> Ver más</a>
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
            <a href="/#/indexLogin" class="btn btn-outline-secondary" style="float: right;"> <font-awesome-icon icon="sign-in-alt"/> Ver más</a>
          </div>
        </div>
      </div>
      <div class="event-item">Evento</div>
      <div class="event-item">Evento</div>
      <div class="event-item">Evento</div>
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
        <div><input type="checkbox"> Música</div>
        <div><input type="checkbox"> Cine</div>
        <div><input type="checkbox"> Teatro y Danza</div>
        <div><input type="checkbox"> Pinturas y Exposiciones</div>
        <div><input type="checkbox"> Charlas y Conferencias</div>
        <div><input type="checkbox"> Deportes</div>
        <div><input type="checkbox"> Ferias y Festivales</div>
      </div>
      <div class="calendar">
        <div class="title">Elige una fecha</div>
        <v-calendar :attributes='attrs'>
        </v-calendar>
      </div>
    </div>

  </div>
    
</div>
</template>

<style>
footer {
  margin-top: 10em;
}
</style>

<script>
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
  }
}
</script>
