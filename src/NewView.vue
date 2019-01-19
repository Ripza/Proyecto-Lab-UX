<template>
<div class="center">
  
  <h2>{{title}}</h2>
    <img class="logo-big" src="./img/vue-logo.png" />
    <p>
      Plantilla hecha con Vue.js y Webpack
    </p>
    
</div>
</template>

<style>
footer {
  margin-top: 20em;
}
</style>

<script>
export default{
  data(){
    return{
      title:'Index'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>
