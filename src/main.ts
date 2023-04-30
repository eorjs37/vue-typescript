import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HeaderComponent from './components/HeaderComponent.vue';
import SideBarComponent from '@/components/SideBarComponent.vue';
import './assets/main.css';

const app = createApp(App);

app.component('HeaderComponent', HeaderComponent);
app.component('SideBarComponent', SideBarComponent);

app.use(router);

app.mount('#app');
