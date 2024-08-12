import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/blog-write",
      name: "blog-write",
      component: () => import("../views/BlogWrite.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/LoginView.vue")
    },
    {
      path: "/compostion",
      name: "Compostion",
      component: () => import("@/views/compostion/CompositionView.vue")
    },
    {
      path: "/calendar",
      name: "Calendar",
      component:  ()=>import("@/views/calendar/CalendarView.vue")
    },
    {
      path: "/player",
      name: "MusicPlayer",
      component:  ()=>import("@/views/music/MusicPlayerView.vue")
    }
  ]
});

export default router;
