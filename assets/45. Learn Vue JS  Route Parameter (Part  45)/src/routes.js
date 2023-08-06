import Home from './components/Home.vue'
import Customer from './components/Customer/Customer.vue'
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/", // Routing URL
        name: "Home", // Routing name
        component: Home, // Routing component
      },
      {
        path: "/customer/:id", // Routing URL
        name: "Customer", // Routing name
        component: Customer, // Routing component
      }
    ],
  });
