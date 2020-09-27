<template>
  <div>
    <h1 class="titulo_busqueda">Búsqueda de juguetes</h1>
    <input
      type="text"
      class="input__busqueda"
      v-model="producto"
      placeholder="Escribe el juego a buscar..." />

    <ul v-if="check">
      <li v-for="(producto, clave) in producto_id" :key="clave">
        <label class="listado__Busqueda">
          Nombre: {{ producto.nombre }} | Stock: {{ producto.stock }} | Precio:
          ${{ producto.precio }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Busqueda",
  data() {
    return {
      producto: "",
    };
  },
  computed: {
    producto_id() {
      return this.$store.getters.producto_id(this.producto);
    },
    check() {
      return this.producto_id.length > 0 && this.producto !== "";
    },
  },
};
</script>
<style>

.input__busqueda {
  width: 300px;
  margin: 20px 0px 50px;
  padding: 10px;
  border-radius: 25px;
  text-align: center;
  
}
.listado__Busqueda {
  text-align: center;
  font-size: 20px;
  
}
.titulo_busqueda {
  padding: 20px;
  color: rgb(133, 4, 4);
  font-size: 60px;
  font-weight: bolder;
}
</style>
