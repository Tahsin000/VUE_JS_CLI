import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/brazil",
      name: "Brazil",
      component: () => import("@/views/Brazil.vue"),
    },
    {
      path: "/hawaii",
      name: "Hawaii",
      component: () => import("@/views/Hawaii.vue"),
    },
    {
      path: "/jamaica",
      name: "Jamaica",
      component: () => import("@/views/Jamaica.vue"),
    },
    {
      path: "/panama",
      name: "Panama",
      component: () => import("@/views/Panama.vue"),
    },
    {
      path: "/destination/:id/:slug",
      name: "Destination.show",
      component: () => import("@/views/Destination.vue"),
    },
  ],
  linkActiveClass:'vue-school-active-link'
});

export default router;
