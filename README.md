- # Create a new project include the router

  ### 1. Make a mew project in this command | [website](https://vitejs.dev/guide/)

  ```js
  npm create vite@latest my-vue-app -- --template vue
  ```

  ### 2. install vue router | [website](https://router.vuejs.org/installation.html)

  ```js
  npm install vue-router@4
  ```

  ### 3. configuration the `vite.config.js` | this is the `vite.config.js` file code

  ```js
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";
  import path from "path";

  // https://vitejs.dev/config/
  export default defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [vue()],
  });
  ```

  ### 4. Make a new component | in my case, i can make `Home.vue` component

  ```js
  <template lang="">
    <div>
      <h1>This is the home page </h1>
    </div>
  </template>
  ```

  ### 5. configuration the `main.js` file | this is the `main.js` file code

  ```js
  import { createApp } from "vue";
  import { createRouter, createWebHistory } from "vue-router";
  import App from "./App.vue";
  import "./style.css";
  import Home from "@/views/Home.vue"; // this is the component import URL

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/", // Routing URL
        name: "Home", // Routing name
        component: Home, // Routing component
      },
    ],
  });

  createApp(App).use(router).mount("#app");
  ```

- # In the single page application we can configure the `<a>` tag write as the `router-link`
  ```js
  <router-link class="nav-link" to="/about">
    About
  </router-link>
  ```
