import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/main.css'
import './assets/css/variables.scss';
import './assets/css/_variables-dark.scss';

//Componetes
import ModalAddMember from './components/app/modal/ModalAddMember.vue';
import ModalChangerAccount from './components/app/modal/ModalChangerAccount.vue';



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




const app = createApp(App)
app.use(router)
// Registrar o componente globalmente
app.component('ModalAddMember', ModalAddMember);
app.component('ModalChangerAccount', ModalChangerAccount);

app.mount('#app')

