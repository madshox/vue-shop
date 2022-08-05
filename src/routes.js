// default
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Pages
import Home from './pages/Home.vue';
import NotFound from './pages/notFound.vue'
import Shop from './pages/Shop.vue'
import Product from './pages/Product'

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
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})