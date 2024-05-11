import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/fontawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify/lib/framework.mjs"; 
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi} from "vuetify/iconsets/mdi"

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
app.mount("#app");
