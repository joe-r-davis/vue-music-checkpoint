import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Itunes from '@/components/Itunes'
import mytunes from '@/components/MyTunes'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/',
            name: 'Itunes',
            component: Itunes
        },
        {
            path: '/',
            name: 'MyTunes',
            component: mytunes
        }
    ]
})