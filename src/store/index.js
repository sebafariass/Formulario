import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juguetes: [
      { id: "001", nombre: "DinnoCrisis", stock: 100, precio: 500 },
      { id: "002", nombre: "Starcraft", stock: 200, precio: 9990 },
      { id: "003", nombre: "Bomberman", stock: 300, precio: 11990 },
      { id: "004", nombre: "Virtua-Tennis", stock: 400, precio: 32000 },
      { id: "005", nombre: "Top-Spin", stock: 500, precio: 24000 },
      { id: "006", nombre: "Warcraft 3 The Frozen Throne", stock: 600, precio: 19000,},
      { id: "007", nombre: "Warcraft 3 The Reing Of Chaos", stock: 700, precio: 25000,},
      { id: "008", nombre: "The Stars Wars", stock: 15, precio: 15990 },
      { id: "009", nombre: "Metal Slug 3.0", stock: 700, precio: 16000 },
    ],
    historial_ventas: [],
  },
  getters: {
    productos_stock: (state) => {
      /* metodo filter crea  
      un nuevo array con todos los elementos que cumplan 
      la condición implementada por la función dada. */
      return state.juguetes.filter((producto) => {
        return producto.stock > 0;
      });
    },
    producto_id: (state, getters) => (producto) => {
      /* El método filter() crea un nuevo array con todos los elementos que 
        cumplan la condición implementada por la función dada */
      return getters.productos_stock.filter(
        (p) => p.id == producto || p.nombre.includes(producto)
      );
    },
    dineroRecaudado(state){
      let total = 0
      state.historial_ventas.forEach(e => total += e.precio)
      return total
    }
  },
  mutations: {
    //SIEMPRE CON MAYUSCULA EN MUTATION
    DESCONTANDO(state, payload) {
      state.juguetes ==
        /* El método map() crea un nuevo array con los resultados de la
    llamada a la función indicada aplicados a cada uno de sus elementos. */
         state.juguetes.map((e) => {
          //metodo trim para eliminar espacio en blanco
          if (e.id == payload.trim()) {
            e.stock--;
            state.historial_ventas.push(e);
          }
          return e;
        });
    },
  },
  actions: {
    // siempre con minusculas en action 
    descontando({ commit }, payload) {
      commit("DESCONTANDO", payload);
    },
  },
});
