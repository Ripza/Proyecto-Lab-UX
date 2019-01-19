<template>
<div class="center">
  <!--
  <h2>{{title}}</h2>
    <img class="logo-big" src="./img/vue-logo.png" />
    <p>
      Plantilla hecha con Vue.js y Webpack
    </p>
    -->
    <div>
      <form>
        <br>
        <div>
          <label>Correo</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Ingrese su correo">
        </div>
        <br>
        <div>
          <label>Contraseña</label>
          <input type="password" class="form-control" placeholder="Ingrese su contraseña">
        </div>
        <br>
        <div>
          <a href="/#/indexLogin" class="btn btn-primary"> <font-awesome-icon icon="sign-in-alt"/> Iniciar sesión</a>
        </div>
      </form>
    </div>
    
  
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
