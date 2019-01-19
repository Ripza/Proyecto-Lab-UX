<template>
  <div>
    <header>
      <div class="branding">
        <img src="./img/logo.png"/>
        <div class="branding-name">
          <span class="title">USACH Móvil</span>
          <span class="subtitle">Portal Eventos & Noticias</span>
        </div>
      </div>
      <nav>
        <div class="login-button">
          <font-awesome-icon class="login-image" icon="sign-in-alt"/>
          <a href="#/">Iniciar Sesión</a>
        </div>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>
    <footer>
      Footer
    </footer>
</div>
</template>

<script>
export default {

}
</script>
