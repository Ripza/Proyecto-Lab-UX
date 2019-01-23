<template>
<div class="center">

  <div class="news-nav">
    <div class="items-2">
      <div><a href="/#/newscomunidad">Comunidad Universitaria</a></div>
      <div><a href="/#/newsacademico">Académico</a></div>
    </div>
  </div>

  <div class="news-search">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"><font-awesome-icon icon="search"/></span>
        </div>
        <input type="text" class="form-control" placeholder="¿Qué estás buscando?">
      </div>
    </div>
  
  <div class="news-list">
    
    <div class="news-item">
      <div class="salud-1"></div>
      <div class="text-side">
        <div class="category">Salud</div>
        <div class="title"><a href="/#/news1">Investigación del Plantel revela positivo efecto de la dieta mediterránea en escolares chilenos</a></div>
        <div class="date">16/03/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="salud-2"></div>
      <div class="text-side">
        <div class="category">Salud</div>
        <div class="title"><a href="/#/news2">Universidad propone nuevo modelo predictivo para medir contaminación</a></div>
        <div class="date">25/04/2017</div>
      </div>
    </div>
    <div class="news-item">
      <div class="deportes-1"></div>
      <div class="text-side">
        <div class="category">Deportes</div>
        <div class="title"><a href="/#/news3">Licaf va por el bicampeonato y Periodismo sueña con volver a primera</a></div>
        <div class="date">13/12/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="deportes-2"></div>
      <div class="text-side">
        <div class="category">Deportes</div>
        <div class="title"><a href="/#/news4">Rugby femenino de la Usach se coronó campeón del torneo de clausura</a></div>
        <div class="date">23/11/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="cultura-1"></div>
      <div class="text-side">
        <div class="category">Cultura</div>
        <div class="title"><a href="/#/news5">Activista Blas Radi expuso en la Usach sobre el aborto desde una perspectiva trans</a></div>
        <div class="date">20/11/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="cultura-2"></div>
      <div class="text-side">
        <div class="category">Cultura</div>
        <div class="title"><a href="/#/news6">Hay interesantes premios: participa en el concurso de fotografía sobre Derechos Humanos</a></div>
        <div class="date">08/11/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="educacion-1"></div>
      <div class="text-side">
        <div class="category">Educación</div>
        <div class="title"><a href="/#/news7">Rector y fallo del TC: “Intereses de unos pocos no pueden imponerse sobre el bien común”</a></div>
        <div class="date">29/03/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="educacion-2"></div>
      <div class="text-side">
        <div class="category">Educación</div>
        <div class="title"><a href="/#/news8">No obtuve gratuidad y quiero apelar, ¿cómo hacerlo?</a></div>
        <div class="date">21/03/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="ciencia-1"></div>
      <div class="text-side">
        <div class="category">Ciencia y Tecnología</div>
        <div class="title"><a href="/#/news9">Torneo de robótica en Planetario define a ganadores para competencia internacional</a></div>
        <div class="date">12/06/2017</div>
      </div>
    </div>
    <div class="news-item">
      <div class="ciencia-2"></div>
      <div class="text-side">
        <div class="category">Ciencia y Tecnología</div>
        <div class="title"><a href="/#/news10">Investigan efectos de algas marinas para remover hidrocarburos del mar</a></div>
        <div class="date">18/01/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="economia-1"></div>
      <div class="text-side">
        <div class="category">Economía</div>
        <div class="title"><a href="/#/news11">Economista Pattillo frente a incremento del desempleo: “Imagen global no se ve mal, pero en detalle es compleja”</a></div>
        <div class="date">02/01/2018</div>
      </div>
    </div>
    <div class="news-item">
      <div class="economia-2"></div>
      <div class="text-side">
        <div class="category">Economía</div>
        <div class="title"><a href="/#/news12">Alto nivel de endeudamiento revela poca educación financiera de los chilenos</a></div>
        <div class="date">11/17/2017</div>
      </div>
    </div>

  </div>

  <footer>
    <FooterContent></FooterContent>
  </footer>
    
</div>
</template>

<style>
.img-container-news-1{
      background-image: url('./img/evento-1.jpg');
      background-position: fixed;
      background-size: cover;
      width: 100%;
      height: 100%;
    }
</style>

<script>
import FooterContent from './FooterContent.vue';

export default{
  data(){
    return{
      title:'Index'
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
