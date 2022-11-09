<template>
    <div>
        <h1 class="is" align="center">Inicio Sesion</h1>

          <!--Formulario Registro-->
   <div class="container text-center">
   <form>
    <div class="mb-3">
      <label  for="correo" class="fuente">Correo electronico</label>
      <input type="email" class="form-control" id="correo" aria-describedby="correoh">
      <div id="correoh" class="form-fuente"></div>
    </div>
    <div class="mb-3">
      <label for="contraseña" class="fuente">Contraseña</label>
      <input type="password" class="form-control" id="contraseña">
    </div>
    <router-link type="iniciarsesion" class="btn btn-primary" to="/paginainicio" title="Iniciar sesion">Inisiar sesión</router-link>
  </form>
</div>

    </div>
</template>

<script>
export default{
    name:'InicioSesion',
}
</script>

<style scoped>

.is{
  font-family: fantasy;
}


</style>