import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/main.css'
import './assets/css/variables.scss';
import './assets/css/_variables-dark.scss';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')

