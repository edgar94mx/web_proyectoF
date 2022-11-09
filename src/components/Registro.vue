<template>
    <div>
        <h1 class="re" align="center">Registro</h1>

          <!--Formulario Registro-->
   <div class="container text-center">
   <form>
    <div class="mb-3">
      <label for="usuario" class="form-label">Nombre de Usuario</label>
      <input type="usuario" class="form-control" id="usuario" aria-describedby="usuarioh">
      <div id="usuarioh" class="form-text"></div>
    </div>
    <div class="mb-3">
      <label for="correo" class="form-label">Correo electronico</label>
      <input type="email" class="form-control" id="correo" aria-describedby="correoh">
      <div id="correoh" class="form-text">Introduce un correo con formato ejemplo@ejemplo.com</div>
    </div>
    <div class="mb-3">
      <label for="contraseña" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="contraseña">
    </div>
    <div class="mb-3">
      <label for="confirmacion" class="form-label">Confirmar contraseña</label>
      <input type="password" class="form-control" id="confirmacion">
    </div>
    <router-link type="registrarse" class="btn btn-primary" to="/iniciosesion" title="Registrarse">Registrarse</router-link>


  </form>
</div>

    </div>
</template>


<script>
export default{
    name:'Registro',
}
</script>

<style scoped>

.re{
  font-family: fantasy;
}

</style>