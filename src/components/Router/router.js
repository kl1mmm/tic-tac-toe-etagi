import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/components/Pages/AuthPage";
import SessionsPage from "@/components/Pages/SessionsPage";

const routes = [
    {
        name: 'Авторизация',
        path: '/Auth/',
        component: AuthPage
    },
    {
        name: 'Активные игроки',
        path: '/sessions/',
        component: SessionsPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;