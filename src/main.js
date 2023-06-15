import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css';
import AOS from 'aos'

createApp(App).mount('#app')

AOS.init();
