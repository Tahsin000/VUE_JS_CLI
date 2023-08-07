# 2. History Mode HTML5 vs Hash

```js
import { createRouter, createWebHashHistory } from "vue-router";

import About from "@/views/About.vue";
import Brazil from "@/views/Brazil.vue";
import Home from "@/views/Home.vue";
import Hawaii from "@/views/Hawaii.vue";
import Jamaica from "@/views/Jamaica.vue";
import Panama from "@/views/Panama.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/brazil", name: "Brazil", component: Brazil },
    { path: "/hawaii", name: "Hawaii", component: Hawaii },
    { path: "/jamaica", name: "Jamaica", component: Jamaica },
    { path: "/panama", name: "Panama", component: Panama },
  ],
});

export default router;
```
