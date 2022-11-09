<template>
  <div id="app">

 <!--Barra de Navegacion-->
<nav>
  <div class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="./assets/images/eye.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Hola Mundo
    </a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/iniciosesion" title="Iniciar Sesion">Iniciar Sesión</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/registro" title="Registrarse">Registrarse</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Inicio</a>
      </li>
    </ul>
  </div>
</nav>

<!--Contenido-->

<router-view> </router-view>
   
  </div>
</template>

<script>
export default{
  name:'app',
}
</script>

<style scoped>

#app{
  background-image: url('./assets/images/back.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}

</style>


