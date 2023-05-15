import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView
      },
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
});

export default router;
