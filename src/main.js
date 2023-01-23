import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBhjRdMR7Ibbe0AT6e7TQDEv7Q3y7Gjofg",
    libraries: "places",
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
