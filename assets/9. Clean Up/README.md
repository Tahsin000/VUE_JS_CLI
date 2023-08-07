# Clean Up

## [Project Code](src)

this is route.js code

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
      path: "/destination/:id/:slug",
      name: "Destination.show",
      component: () => import("@/views/Destination.vue"),
    },
  ],
  linkActiveClass:'vue-school-active-link'
});

export default router;

```

this is Navigation component | Home component code

```js 
<template lang="">
    <div class="home">
        <h2 class="">Destination</h2>
        <div class="destinations d-flex flex-wrap ">
            <router-link 
                class="__border-2"
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name:'Destination.show', params: {id: destination.id, slug: destination.slug}}" 
            >
            <h4>{{destination.name}}</h4> 
            <img class="__image" :src="`src/assets/images/${destination.image}`" alt="">
            </router-link>
        </div>
    </div>
</template>
<script>
import sourceData from "@/assets/data.json"
export default {
    data(){
        return{
            destinations : sourceData.destinations
        }
    }
}
</script>
<style scoped>
    .__image{
        width: 230px;
        height: 150px;
    }
    .__border-2{
        border: 2px solid rgba(0, 0, 0, 0.418);
        margin: 5px;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 3px 3px 10px #12121270;
        text-decoration: none;
        font-weight: 800;
        color: darkslategrey;
    }
</style>
```