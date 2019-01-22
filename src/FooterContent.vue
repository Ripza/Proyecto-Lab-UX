<template>
<div style="display: grid;
  			grid-template-columns: repeat(4, 25%);
  			">
	<div class="footer-details" style="font-weight: bold; grid-column: 1 / 2;">

  <div class="branding">
        <img src="./img/logo.png"/>
        <a style="display:block" href="#/indexNoLogin">
          <div class="branding-name">
            <span class="title">USACH Móvil</span>
            <span class="subtitle">Portal Eventos & Noticias</span>
          </div>
        </a>
      </div>
      <br>
    	<a href="#/AcerdaDe" class="login-button" style="font-weight: bold;">
    		<h5>Acerca de</h5>
    	</a>
    	<a href="#/aboutUs" class="login-button" style="font-weight: bold;">
    		<h5>Sobre Nosotros</h5>
    	</a>
    	<a href="#/Contacto" class="login-button" style="font-weight: bold;">
    		<h5>Contacto</h5>
    	</a>

    </div>
    
    <div class="footer-details" style="grid-column: 2 / 3;">
    <a href="#/news" class="login-button" style="font-weight: bold;">
    	<h3>Noticias</h3>
    </a>
        <a href="#/newscomunidad" class="login-button" style="font-weight: bold;">
        	<h5>Comunidad Universitaria</h5>
        </a>
        <a href="#/newssalud" class="login-button" style="font-weight: bold;">
        	<h6>Salud</h6>
        </a>
        <a href="#/newsdeportes" class="login-button" style="font-weight: bold;">
        	<h6>Deportes</h6>
        </a>
        <a href="#/newscultura" class="login-button" style="font-weight: bold;">
        	<h6>Cultura</h6>
        </a>
        <a href="#/newsacademico" class="login-button" style="font-weight: bold;">
        	<h5>Académico</h5>
    	  </a>
        <a href="#/newseducacion" class="login-button" style="font-weight: bold;">
        	<h6>Educación</h6>
        </a>
        <a href="#/newsciencia" class="login-button" style="font-weight: bold;">
        	<h6>Ciencia y Tecnología</h6>
        </a>
        <a href="#/newseconomia" class="login-button" style="font-weight: bold;">
        	<h6>Economía</h6>
        </a>
    </div>
    	
    <div class="footer-details" style='grid-column-start: 3; grid-column-end: 4'>

      <a href="#/events" class="login-button" style="font-weight: bold;" >
        <h3>Eventos</h3>
      </a>

    </div>
    <br> 
    <br>

    <div class="footer-details" style='grid-column-start: 1; grid-column-end: 4'>
    	<br>
      <br>USACH Móvil - Portal de Eventos y Noticias
      <br>Copyright © 2019 CompuMundoHiperMegaRed
      <br>Todos los derechos reservados
      <br>Portal Desarrollado por estudiantes para estudiantes
      <br>
      <br>
      <br>
    </div>
    
</div>
</template>

<style>
</style>

<script>

export default{
  data(){
    return{
      title:'Index'
    }
  },
  mounted:function(){
  }
}
</script>
