import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/fontawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


// registerServiceWorker
import "./registerServiceWorker"

// vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"
import { createVuetify } from "vuetify/lib/framework.mjs"; 
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi} from "vuetify/iconsets/mdi"

// common.js
import common from "./utils/Plugins/common";

// common.css
import "./assets/common.css";

const vuetify = createVuetify({
  components,
  directives,
  icons:{
    defaultSet:"mdi",
    aliases,
    sets:{
      mdi,
    }
  }
})

// vue-calendar
import VCalendar from "v-calendar";
import "v-calendar/style.css";
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VCalendar, {});
app.use(router);
app.use(vuetify)
app.use(common);
app.mount("#app");
