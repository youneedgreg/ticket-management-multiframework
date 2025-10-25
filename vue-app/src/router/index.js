import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../utils/auth'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import Dashboard from '../views/Dashboard.vue'
import TicketManagement from '../views/TicketManagement.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: TicketManagement,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/auth/login')
  } else if ((to.name === 'Login' || to.name === 'Signup') && isAuthenticated()) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router