import Vue from "vue";
import App from "./App.vue";
//import layers from "layers-design-system";
//Vue.use(layers);
import { LButton, LTextEditor } from "layers-design-system";

Vue.component(LTextEditor.name, LTextEditor.component);
Vue.component(LButton.name, LButton.component)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
  