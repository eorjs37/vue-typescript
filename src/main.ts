import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HeaderComponent from './components/HeaderComponent.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';
import './assets/main.css';
import './assets/fontawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

app.component('HeaderComponent', HeaderComponent);
app.component('SideBarComponent', SideBarComponent);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
