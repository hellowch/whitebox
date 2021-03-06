import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import Games from '../views/Games.vue'
import GameDetail from '../views/GameDetail.vue'
import User from '../views/User.vue'
import UserGameDetail from '../views/UserGameDetail.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: {name: "Home"}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/community',
        name: 'Community',
        component: Community
    },
    {
        path: '/games',
        name: 'Games',
        component: Games
    },
    {
        path: '/gameDetail/:id',
        name: 'GameDetail',
        component: GameDetail
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/userGameDetail/:id',
        name: 'UserGameDetail',
        component: UserGameDetail
    },

]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,

    mode: 'hash',
    base: __dirname,

    routes
})

export default router
