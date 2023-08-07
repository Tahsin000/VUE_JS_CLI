# Lazy Loading Routes (Vite Only)

## [Project Code](src)

This is the router code

```js
import { createRouter, createWebHistory } from "vue-router";

import About from "@/views/About.vue";

import Home from "@/views/Home.vue";
import Hawaii from "@/views/Hawaii.vue";
import Jamaica from "@/views/Jamaica.vue";
import Panama from "@/views/Panama.vue";

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
  ],
});

export default router;
```
