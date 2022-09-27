import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  },
  {
    path: '/edit_post/:id',
    name: 'edit_post',
    component: EditPost,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
