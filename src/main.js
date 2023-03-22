import Vue from "vue";
import { ToastPlugin, ModalPlugin } from "bootstrap-vue";
import VueCompositionAPI from "@vue/composition-api";
// import authController from '@/router/auth_controller';
import CommonMixins from "@/mixins/commonmixins";
import router from "./router";
import store from "./store";
import App from "./App.vue";

// Global Components
import "./global-components";

// 3rd party plugins
import "@/libs/portal-vue";
import "@/libs/toastification";

// BSV Plugin Registration
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

// Composition API
Vue.use(VueCompositionAPI);

// Vuesax Component Framework
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

// import core styles
require("@core/scss/core.scss");

// import assets styles
require("@/assets/scss/style.scss");
require("@/assets/scss/nevbar_main.scss");
require("@/assets/scss/home.scss");
require("@/assets/scss/aboutus.scss");
require("@/assets/scss/services.scss");
require("@/assets/scss/careers.scss");
require("@/assets/scss/contact.scss");
require("@/assets/scss/projects.scss");



//  mixins

Vue.mixin(CommonMixins);

Vue.config.productionTip = false;


// authController.init(router, store)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
