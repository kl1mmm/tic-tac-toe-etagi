import {createApp} from 'vue'
import App from './App.vue'
import router from "@/components/Router/router.js";
import Vuex from 'vuex'
import store from "@/store";
import VueClickAway from "vue3-click-away";
import VueTheMask from "vue-the-mask"
import moment from "moment";

const app = createApp(App)

app.use(router)
app.use(Vuex)
app.use(store)
app.use(VueClickAway)
app.use(VueTheMask)
app.use(moment)
app.mount('#app')
