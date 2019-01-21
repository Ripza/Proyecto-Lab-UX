<template>

<div class="secciones-logueadas">
  

  <div class="item-logueado-eventos">
    <div class="title title-container">Eventos</div>
    <div class="preferencias">Preferencias: Deportes Musica Charlas y Conferencias asdasdas</div>
    <div class="item-1">
      <div class="despliegue-noticias">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloE1}}</div>
        <div class="texto-container"> {{textoE1}}</div>
      </div>
    </div>
    <div class="item-2">
      <div class="despliegue-noticia-pequeño">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloE2}}</div>
        <div class="texto-container"> {{textoE2}}</div>
      </div>
    </div>
    <div class="item-3">
      <div class="despliegue-noticia-pequeño">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloE4}}</div>
        <div class="texto-container"> {{textoE2}}</div>
      </div>
    </div>
    <div class="item-4">
      <div class="despliegue-noticias">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloE4}}</div>
        <div class="texto-container"> {{textoE2}}</div>
      </div></div>
    <div class="seleccion-ventana"> {1 - 2  - 3  - 4  - 5}</div>
  </div>

  <div class="item-logueado-noticias"> 
    <div class="title title-container">Noticias</div>
    <div class="preferencias">Preferencias: Deportes Musica Charlas y Conferencias</div>
    <div class="item-1"> 
      <div class="despliegue-noticias">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloN1}}</div>
        <div class="texto-container">{{textoN1}} </div>
      </div>
    </div>
    <div class="item-2"> 
      <div class="despliegue-noticias">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloN2}}</div>
        <div class="texto-container"> {{textoN2}}</div>
      </div>
    </div>
    <div class="item-3">
      <div class="despliegue-noticia-pequeño">
        <div class="imagen-container"> </div>
        <div class="title-container">{{tituloN3}} </div>
        <div class="texto-container"> {{textoN3}}</div>
      </div>
    </div>
    <div class="item-4">
      <div class="despliegue-noticia-pequeño">
        <div class="imagen-container"> </div>
        <div class="title-container"> {{tituloN4}}</div>
        <div class="texto-container"> {{textoN4}}</div>
      </div>
    </div>
    <div class="seleccion-ventana"> {1 - 2  - 3  - 4  - 5}</div>
  </div>


  


</div>
</template>

<style>
footer {
  margin-top: 0em;
}
</style>

<script>
export default{
  data(){
    return{
      title:'Index con login',
      tituloN1:"Festival cambalache: democratizando el conocimiento",
      tituloN2:"Revive la temporada 2018 de Escena Viva",
      tituloN3:"Escena Viva cierra exitosa temporada 2018 y se adjudica Fondo de la Música",
      tituloN4:"Hernán Caffiero, ganador del Emmy con Una Historia Necesaria: \“Resguardar y promover los DD.HH. era el objetivo macro de esta serie\”",
      tituloE1:"Exposición Taxonomía de lo Fantástico de Guillermo Lorca ",
      tituloE2:"“Criollazo”, encuentro de música criolla en Perú y Chile ",
      tituloE3:"Orquesta Clásica U. de Santiago en Lo Prado ",
      tituloE4:"Atlas Cinematográfico de Chile “Pruebas de Fuego”(2012) ",
      textoN1:"Charlas, experiencias interactivas y talleres en temáticas como genética,  robótica, astronomía, matemática serán parte de los atractivos de...",
      textoN2:"Portugal, Fernando Milagros, Zaturno, Franz Mesko y Pascuala Ilabaca, entre muchos otros, fueron parte de la quinta temporada de Escena Viva, que...",
      textoN3:"Por tercer año consecutivo, el programa Escena Viva de Radio Universidad de Santiago se adjudicó un Fondo de la Música para desarrollar sesiones de...",
      textoN4:"El programa Sin Pretexto dialogó con Hernán Caffiero, director de “Una Historia Necesaria”, producción chilena que ganó recientemente un..",
      textoE1:"El Departamento de Extensión U. de Santiago inaugura el martes 8 de mayo a las 19 horas la exposición del artista chileno Guillermo Lorca bajo el nombre \"Taxonomía de lo Fantástico\" que reúne una serie de grabados digitales con la técnica \"Giclée\". Tecnología de impresión en la cual las imágenes se forman gracias a unas […]",
      textoE2:"Encuentro en torno a la historia y sonidos de la Música Criolla Peruana y su fuerte influencia en nuestro país. Músicos, escritores e investigadores de Perú y Chile, realizarán un concierto-charla sobre este género musical que mezcla influencias españolas, indígenas y africanas y tiene entre sus grandes exponentes a figuras como Óscar Avilés, Arturo \"Zambo\" […]",
      textoE3:"olvemos a la comuna de Lo Prado con la Orquesta Usach en un nuevo concierto de Extensión que reúne la participación de dos solistas en oboe Diego Agusto y Jorge Pinzón más el director invitado Luis Toro Araya. El programa para este concierto considera las obras de: - Juan Orrego Salas (Chile, 1919): Concierto de […]",
      textoE4:"Película chilena dirigida por Cristian Quinzacara que narra un instante en la vida de 7 personas, momentos en que cambian su vida para tragedia: un ladrón que sale de la cárcel, una pareja de amantes, un hombre enamorado, una esposa asaltada, un padre que pierde a su hijo y una enfermera. Todos están cruzados sutilmente […]",
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>
