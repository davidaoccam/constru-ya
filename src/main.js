import Vue from "vue";

import Index from "./App.vue";
import NotFound from "./NotFound.vue";

import Contactanos from "./Contactanos.vue";
import ProductosServicios from "./ProductosServicios.vue";
import QuienesSomos from "./QuienesSomos.vue";

Vue.config.productionTip = false;

const routes = {
  "/": Index,
  "/contactanos": Contactanos,
  "/productos-y-servicios": ProductosServicios,
  "/quienes-somos": QuienesSomos,
};

new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
}).$mount("#app");
