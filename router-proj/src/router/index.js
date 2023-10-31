import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Blog from '../views/Blog.vue'
import NotFound from '../views/NotFound.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/:catchAll(.*)', 
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
