//import { LButton } from "layers-design-system";
import Vue from "vue";
import App from "./App.vue";

console.log("forró boys");

//Vue.component("l-button", LButton);
// Vue.component("l-alert", LAlert);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
