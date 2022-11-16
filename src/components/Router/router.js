import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/components/Pages/AuthPage";

const routes = [
    {
        name: 'Авторизация',
        path: '/',
        component: AuthPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;