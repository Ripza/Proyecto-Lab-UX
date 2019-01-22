<template>
  <div class="center">
    <div class="about-us">
      <div class="titulo">
        <br>
        ¿Cómo contactarnos?
        <br>
        <br>
      </div>
      <div class="descripcion">
        Para ponerse en contacto con nosotros, envie un correo a "PlataformaUSACH.NyE@usach.cl"
        <br>
        <br>
        <br>
      </div>
      <div class="tilulo2">
        ¿Donde encontrarnos?  
        <br>
        <br>
      </div>
      <div class="descripcion">
        Visitenos en nuestras oficinas ubicadadas en<br>
        Universidad de Santiago de Chile. Avenida Ecuador #3659. Estación Central, Santiago de Chile.<br>
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
