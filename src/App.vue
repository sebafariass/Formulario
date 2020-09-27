<template>
  <div id="app">
    <div id="nav">
      <!--no se puede usar  un objeto dentro de  comillas sin especificar antes
      especificar el binding  -->
      <router-link :to="{name:'Inicio'}">Inicio</router-link> |
      <router-link :to="{name:'Ventas'}">Ventas</router-link> |
      <router-link :to="{name:'Busqueda'}">Busqueda</router-link> |
      <router-link :to="{name:'Inventario'}">Inventario</router-link> |

      
    </div>
 <router-view> </router-view> 

  </div>
</template>

<style lang="scss">
#app {
 font-family: 'Secular One', sans-serif;
  text-align: center;
  color: #04213d;
}

#nav {
  padding: 40px;

  a {
    font-weight: bolder;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #410a8a;
    }
  }
}
</style>
