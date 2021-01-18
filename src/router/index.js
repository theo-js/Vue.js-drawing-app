import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home'
import Draw from '../pages/draw'
import NotFound from '../pages/notFound'

const routes = [
  { path: '/', component: Home },
  { path: '/draw', component: Draw },
  { path: '/:pathMatch(.*)*', component: NotFound}
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})