import { createApp } from 'vue';
import './assets/style.scss';
import App from './App.vue';
import routes from './router/router';
import {createPinia} from 'pinia';
const pinia = createPinia();

createApp(App).use(pinia).use(routes).mount('#app');
