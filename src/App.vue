<template>
  <div class="holder">
    <header>
      <div class="branding">
        <img src="./img/logo.png"/>
        <a style="display:block" href="#/">
          <div class="branding-name">
            <span class="title">USACH Móvil</span>
            <span class="subtitle">Portal Eventos & Noticias</span>
          </div>
        </a>
      </div>
      <nav>
        <a href="#/" class="login-button" style="font-weight: bold;">
          <p>Inicio</p>
        </a>
        <a href="#/events" class="login-button" style="font-weight: bold;">
          <p>Eventos</p>
        </a>
        <a href="#/news" class="login-button" style="font-weight: bold;">
          <p>Noticias</p>
        </a>
        <a href="#/AcerdaDe" class="login-button" style="font-weight: bold;">
          <p>Acerca de</p>
        </a>
        <a href="#/login" class="login-button" style="font-weight: bold;">
          <font-awesome-icon class="login-image" icon="sign-in-alt"/>
          <p>Iniciar Sesión</p>
        </a>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>

</script>
