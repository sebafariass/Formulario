<template>
  <div>
    <div>
			<h1 class="titulo_inventario py-5">Listado de Juegos en Stock</h1>
		</div>
    <b-table striped hover :items="juguetes"></b-table>

    	
  </div>
</template>

<script>
import {mapState} from "vuex"
  export default {
    name: 'Inventario',
    data() {
      return {
        fields: ['id', 'nombre', 'stock', 'precio'],
    
      }
    },
    computed: {
        ...mapState(['juguetes'])
    }

  }
</script>

<style>

</style>