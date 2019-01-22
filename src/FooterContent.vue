<template>
<div style="display: grid;
  			grid-template-columns: repeat(4, 25%);
  			">
	<div class="footer-details" style="font-weight: bold; grid-column: 1 / 2;">
    <a href="#/events" class="login-button" style="font-weight: bold;" >
    	<h2>Eventos</h2>
	</a>
        <a href="#/" class="login-button" style="font-weight: bold;">
          <h4>Entretenimiento</h4>
        </a>
        <a href="#/" class="login-button" style="font-weight: bold;">
       		<h4>Social</h4>
    	</a>
    </div>
    
    <div class="footer-details" style="grid-column: 2 / 3;">
    <a href="#/news" class="login-button" style="font-weight: bold;">
    	<h2>Noticias</h2>
    </a>
        <a href="#/newscomunidad" class="login-button" style="font-weight: bold;">
        	<h4>Comunidad Universitaria</h4>
        </a>
        <a href="#/newsacademico" class="login-button" style="font-weight: bold;">
        	<h4>Académico</h4>
    	</a>
    </div>
    	
    <div class="footer-details" style='grid-column-start: 3; grid-column-end: 4'>
    	<h2>El equipo</h2>
    	<a href="#/AcerdaDe" class="login-button" style="font-weight: bold;">
    		<h4>Acerca de</h4>
    	</a>
    	<a href="#/aboutUs" class="login-button" style="font-weight: bold;">
    		<h4>Sobre Nosotros</h4>
    	</a>
    	<a href="#/Contacto" class="login-button" style="font-weight: bold;">
    		<h4>Contacto</h4>
    	</a>

    </div>
    <br> 
    <br>

    <div class="footer-details">
    	Portal de Eventos y Noticias USACH Móvil
        Copyright 2018 CompuMundoHiperMegaRed. Todos los derechos reservados
        <br> Portal Desarrollado por estudiantes para estudiantes
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
