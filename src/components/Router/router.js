import {createRouter, createWebHistory} from "vue-router";
import AuthPage from "@/components/Pages/AuthPage";
import SessionsPage from "@/components/Pages/SessionsPage";
import RatingPage from "@/components/Pages/RatingPage";
import HistoryPage from "@/components/Pages/HistoryPage";
import PlayersPage from "@/components/Pages/PlayersPage";
import GamePage from "@/components/Pages/GamePage.vue";

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
    },
    {
        name: 'Список игркоов',
        path: '/players-list/',
        component: PlayersPage
    },
    {
        name: 'Активаная игра',
        path: '/game/',
        component: GamePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;