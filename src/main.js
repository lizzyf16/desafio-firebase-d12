import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth, onAuthStateChanged } from "./auth"

let app;

onAuthStateChanged(auth, (usuario) => {
    if(usuario){
        store.commit("AUTH_USUARIO", usuario)
    }else {
        store.commit("CLEAR_USUARIO")
    }

    if(!app){
        app = createApp(App).use(store).use(router).mount('#app')
    }
});