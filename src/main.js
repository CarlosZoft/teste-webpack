import Vue from "vue";
import App from "./App.vue";
import { LButton, LAlert } from "layers-design-system";

console.log("forró boys");

Vue.component(LButton.tagName, LButton);
Vue.component(LAlert.tagName, LAlert);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
