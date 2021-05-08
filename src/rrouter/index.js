import rRouter from './rvue-router.js'
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'

Vue.use(rRouter)


export default new rRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/sayhi',
            name: 'sayhi',
            component: SayHi
        }
    ]
})