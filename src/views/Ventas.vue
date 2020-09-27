<template>
	<div class="ventas">
		<div>
			<h1 class="titulo_ventas">Listado de Juegos en Stock</h1>
		</div>

		<div class="container py-5">
			<b-table striped hover :items="historial_ventas"></b-table>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Ventas",
  computed: {
    ...mapState(["historial_ventas"]),
    
  },
};
</script>

<style>
.titulo_ventas {
	padding: 20px;
	color: rgb(110, 18, 18);
	font-size: 70px;
	font-weight: bolder;
}
</style>
