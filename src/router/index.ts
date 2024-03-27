import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
         children: [
            {
               path: '/blog-write',
               name: 'blog-write',
               component: () => import('../views/BlogWrite.vue')
            },
            {
               path: '/blog-list',
               name: 'blog-list',
               component: () => import('../views/BlogList.vue')
            }
         ]
      },
      {
         path: '/login',
         name: 'login',
         component: () => import(`../views/login/LoginView.vue`)
      },
      {
         path: '/payment',
         name: 'Payment',
         component: () => import(`@/views/payment/PaymentView.vue`)
      }
   ]
});

export default router;
