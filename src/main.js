import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//  ! pinia config
import { createPinia } from "pinia";
//  ! Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
//  ! Mitt
import mitt from "mitt";
const Emitter = mitt();

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
