export default function auth({next, store, nextMiddleware}) {
    if (!store.getters.auth.isAuthenticated) {
        return next({
            name: 'login'
        })
    }
    return nextMiddleware()
}