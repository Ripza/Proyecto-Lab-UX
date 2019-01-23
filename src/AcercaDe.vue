<template>
  <div class="center">
    <div class="about-us">
      <div class="titulo">
        <br>
        Sobre nosotros
        <br>
        <br>
      </div>
      <div class="descripcion">
        Somos un equipo de trabajo conformado por estudiantes de Ingeniería de Ejecución en Computación e Informatica de la Universidad de Santiago de Chile, en donde se desarrolla la presente plataforma como trabajo para el curso "Desarrollo Frontend y Diseño UX"
        <br>
        <br>
        <br>
      </div>
      <div class="tilulo2">
        Miembros Actuales
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
