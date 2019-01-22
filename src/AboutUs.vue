<template>
	<div class="center">
		<div class="about-us">
			<img src="./img/logo.png"/>
			<div class="titulo">
				<br>
				Plataforma de Eventos e Informaciones USACH	
				<br>
				<br>
			</div>
			<div class="descripcion">
				Portal de Eventos y Noticias USACH Móvil, que nace de la necesidad de proporcionar a las personas de la comunidad universitaria de la Universidad de Santiago de Chile un portal de eventos y noticias personalizado para recibir las noticias de mayor interés personal.
				<br>
				<br>
				<br>
			</div>
			<div class="tilulo2">
				Equipo de Desarrollo	
				<br>
				<br>
			</div>
			<div class="integrantes">
        Sebastian Pinto-Agüero <br>
        Felipe Valenzuela<br>
        René Zárate <br>
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
