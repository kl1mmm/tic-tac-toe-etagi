import {createStore} from "vuex";

export default createStore({
    state: {
        user: {
            token: '',
            isAuthenticated: false,
            login: '',
        },
        connection: {
            socketStatus: ''
        },
    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.user.token = localStorage.getItem('token')
                state.user.isAuthenticated = true
                state.user.login = localStorage.getItem('login')
                state.connection.socketStatus = sessionStorage.getItem('socketStatus')
            } else {
                state.user.token = ''
                state.user.isAuthenticated = false
                state.user.login = ''
                state.connection.socketStatus = 'disconnected'
            }
        },
        setToken(state, token, login) {
            state.user.token = token
            state.user.isAuthenticated = true
            state.user.login = login
        },
        removeToken(state) {
            state.user.token = ''
            state.user.isAuthenticated = false
            state.user.login = ''
        },
        setStatus(state, status) {
            state.connection.socketStatus = status;
        }
    },
    getters: {
        auth(state) {
            return state.user
        }
    },
    actions: {},
    modules: {}
})