import { createApp } from 'vue'
import App from './App.vue'
import router from "@/components/Router/router.js";
import Vuex from 'vuex'

const app = createApp(App)

app.use(Vuex)
app.use(router)
app.mount('#app')