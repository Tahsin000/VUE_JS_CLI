# Router Link Active Class

## [Project Code](src)

this is the destination component code

```js
<template lang="">
    <section class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details d-flex ">
            <!-- src/assets/images/blue-mountain.jpg -->
            <img :src="`/src/assets/images/${destination.image}`" alt="">
            <p class="lead text-justify p-3">{{destination.description}}</p>
        </div>
    </section >
</template>
<script>
import sourceData from "@/assets/data.json"
export default {
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination =>destination.id === this.destinationId);
        }
    }
}
</script>
<style lang="">

</style>
```

this is the router.js code

```js
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
      path: "/destination/:id",
      name: "Destination",
      component: () => import("@/views/Destination.vue"),
    },
  ],
  linkActiveClass: "vue-school-active-link",
});

export default router;
```
