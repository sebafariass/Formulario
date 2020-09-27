<template>
  <div class="Inicio container">
    <h1 class="py-3">Encuentre tu juego preferido</h1>
    <!-- Codigo de Barra --> 
    <label class="etiqueta">Codigo de Barra:</label>
    <b-form-input
      id="input-compra" v-model="id"   placeholder="Codigo producto">
      </b-form-input>
<!-- NOMBRE --> 
    <label class="etiqueta">Nombre:</label>
    <b-form-input
    id="input-compra"  :disabled="true"  v-model="juguete_tienda.nombre"  placeholder="Nombre">
    </b-form-input>

<!-- PRECIO --> 
    <label class="etiqueta">Precio:</label>
    <b-form-input
    id="input-compra" :disabled="true"  v-model="juguete_tienda.precio" placeholder="Precio">
    </b-form-input>
<!-- STOCK--> 
    <label class="etiqueta">Stock:</label>

    <b-form-input
    id="input-compra" :disabled="true" v-model="juguete_tienda.stock" placeholder="Stock" >
    </b-form-input>
    <!--BOTTON -->
    <b-button type="submit"   @click="Descontando"   variant="success"  class="mt-5">
    Comprando</b-button>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: "Inicio",


  //creando el metodo desconntar
  methods: {
    Descontando() {
      //dispatch activa una acción de VUEX
    //descontando viene de ACTIONS 
      this.$store.dispatch("descontando", this.id);
    },
  },
  data() {
    return {
      id: "",
    };
  },


  components: {},


  computed: {
    ...mapState(["juguetes"]),
    juguete_tienda() {
      let juguete_tienda = {
        nombre: "",
        precio: "",
        stock: "",
      };
      return this.juguetes.find((j) => j.id == this.id) || juguete_tienda;
    },
  },
};
</script>

/<style>
.Inicio {
  width: 80px;
  padding:40px;
}
</style>
