import {createRouter, createWebHistory} from "vue-router";

import AuthPage from "@/components/Pages/AuthPage";
import SessionsPage from "@/components/Pages/SessionsPage";
import RatingPage from "@/components/Pages/RatingPage";
import HistoryPage from "@/components/Pages/HistoryPage";
import PlayersPage from "@/components/Pages/PlayersPage";
import GamePage from "@/components/Pages/GamePage.vue";

import auth from "@/components/Router/middleware/auth";
import store from "@/store"
import middlewarePipeline from "@/components/Router/middlewarePipeline";

const routes = [
    {
        name: 'login',
        path: '/',
        component: AuthPage
    },
    {
        name: 'sessions',
        path: '/sessions/',
        component: SessionsPage,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        name: 'rating',
        path: '/rating/',
        component: RatingPage,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        name: 'history',
        path: '/history/',
        component: HistoryPage,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        name: 'players_list',
        path: '/players-list/',
        component: PlayersPage,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        name: 'game',
        path: '/game/',
        component: GamePage,
        meta: {
            middleware: [
                auth
            ]
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (!(to.meta.middleware)) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
        store
    }
    return middleware[0]({
        ...context,
        nextMiddleware: middlewarePipeline(context, middleware, 1)
    })
})

export default router;