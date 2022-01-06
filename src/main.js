import Vue from "vue";
import App from "./App.vue";

// import layers from "layers-design-system";
// Vue.use(layers);
import { LButton } from "layers-design-system";
console.log("forró boys");
// Vue.use(layers);
Vue.component(LButton.name, LButton.component);
//Vue.component("l-text-editor", LTextEditor.component);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
