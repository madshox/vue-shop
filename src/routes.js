// default
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Pages
import Home from './pages/Home.vue';
import NotFound from './pages/404.vue'
import Example from './pages/Example.vue'

// Routering
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/example',
            name: 'example',
            component: Example
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})