<template>
  <div id="not-found">
    <h1>404.</h1>
    <h1>La página que buscas no está disponible :(</h1>
    <p>
      Visitar
      <router-link :to="{ name: 'Inicio' }">Página de inicio</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
</style>