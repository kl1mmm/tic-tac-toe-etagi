import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/components/Pages/AuthPage";
import SessionsPage from "@/components/Pages/SessionsPage";
import RatingPage from "@/components/Pages/RatingPage";
import HistoryPage from "@/components/Pages/HistoryPage";

const routes = [
    {
        name: 'Авторизация',
        path: '/',
        component: AuthPage
    },
    {
        name: 'Активные игроки',
        path: '/sessions/',
        component: SessionsPage
    },
    {
        name: 'Рейтинг игроков',
        path: '/rating/',
        component: RatingPage
    },
    {
        name: 'История игр',
        path: '/history/',
        component: HistoryPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;