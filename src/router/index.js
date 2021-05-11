import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import JobDetails from '../views/JobDetails.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobsDetails',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  // Redirects
  {
    path: '/allJobs',
    redirect: '/jobs'
  },
  // 404
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
