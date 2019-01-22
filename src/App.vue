<template>
  <div class="holder">
    <header>
      <div class="branding">
        <img src="./img/logo.png"/>
        <a style="display:block" href="#/indexNoLogin">
          <div class="branding-name">
            <span class="title">USACH Móvil</span>
            <span class="subtitle">Portal Eventos & Noticias</span>
          </div>
        </a>
      </div>
      <div class="login-button">
        <a href='#/aboutUs'>Acerca de Nosotros</a>
      </div>
      <nav>
        <a href="#/login" class="login-button">
          <font-awesome-icon class="login-image" icon="sign-in-alt"/>
          <p>Iniciar Sesión</p>
        </a>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <!--
    <footer>
      <h2>Eventos</h2>
      <div class="footer-details">
          <h4>Entretenimiento</h4>

          <h4>Social</h4>
      </div>
      <h2>Noticias</h2>
      <div class="footer-details">

          <h4>Comunidad Universitaria</h4>
          <h4>Académico</h4>

      </div>
      <br> Portal de Eventos y Noticias USACH Móvil
      <br>
      <div class="footer-details">

          Copyright 2018 CompuMundoHiperMegaRed. Todos los derechos reservados
          <br> Portal Desarrollado por estudiantes para estudiantes
      </div>
    </footer>
    -->
  </div>
</template>

<script>

</script>
