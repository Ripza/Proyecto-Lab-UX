<template>
<div class="center">
  
  <h2>{{title}}</h2>
    <img class="logo-big" src="./img/vue-logo.png" />
    <p>
      Hola jajajajajaja
    </p>
    
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
      title:'Index con login'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>
