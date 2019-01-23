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
          <div class="text"><p class="category">Charlas y Conferencias</p><a href="/#/event6">Primera Jornada de Comunicación Pública</a><br>31/01/2019 - 15:00</div>
        </div>
      </div>
      <div class="item">
        <div class="evento-login-1">
          <div class="text"><p class="category">Música</p><a href="/#/event1">Orquesta Clásica U. de Santiago en Pedro Aguirre Cerda</a><br>23/01/2019 - 17:00</div>
        </div>
      </div>
      <div class="item">
        <div class="evento-login-2">
          <div class="text"><p class="category">Cine</p><a href="/#/event3">Atlas Cinematográfico de Chile presenta el documental “En Tránsito”</a><br>28/01/2019 - 17:00</div>
        </div>
      </div>
      <div class="item">
        <div class="evento-login-3">
          <div class="text"><p class="category">Ferias y Festivales</p><a href="/#/event2">VI Panel de Educación No Sexista</a><br>25/01/2019 - 10:00</div>
        </div>
      </div>
    </div>
  </div>

  <br>

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
          <div class="text"><p class="category">Deportes</p><a href="/#/news4">Rugby femenino de la Usach se coronó campeón del torneo de clausura</a></div>
        </div>
      </div>
      <div class="item">
        <div class="news-login-1">
          <div class="text"><p class="category">Cultura</p><a href="/#/news6">Hay interesantes premios: participa en el concurso de fotografía sobre Derechos Humanos</a></div>
        </div>
      </div>
      <div class="item">
        <div class="news-login-2">
          <div class="text"><p class="category">Educación</p><a href="/#/news8">No obtuve gratuidad y quiero apelar, ¿cómo hacerlo?</a></div>
        </div>
      </div>
      <div class="item">
        <div class="news-login-3">
          <div class="text"><p class="category">Ciencia y Tecnología</p><a href="/#/news9">Torneo de robótica en Planetario define a ganadores para competencia internacional</a></div>
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
  },
  components:{
    FooterContent
  }
}
</script>
