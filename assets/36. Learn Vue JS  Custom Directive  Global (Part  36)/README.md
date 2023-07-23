# 36. Learn Vue JS Custom Directive Global (Part 36)

---

- # Custom binding
- ### main.js

  ```js
  import "bootstrap";
  import "bootstrap/dist/css/bootstrap.css";
  import Vue from "vue";
  import App from "./App.vue";

  Vue.config.productionTip = false;

  Vue.directive("awesome", {
    bind(el, binding) {
      el.innerHTML = binding.value;
      el.style.color = "red";
    },
  });

  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
  ```

- ### App.vue

  ```vue
  <template>
    <div class="container">
      <p v-awesome="'Hotash naki?'"></p>
    </div>
  </template>

  <script>
  export default {};
  </script>
  ```

- # Custom Directive
- ### main.js

  ```js
  import "bootstrap";
  import "bootstrap/dist/css/bootstrap.css";
  import Vue from "vue";
  import App from "./App.vue";

  Vue.config.productionTip = false;

  Vue.directive("awesome", {
    bind(el, binding) {
      el.innerHTML = binding.value;
      binding.arg === "green"
        ? (el.style.color = "green")
        : binding.arg === "red"
        ? (el.style.color = "red")
        : "";
    },
  });

  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
  ```

- ### App.vue

  ```vue
  <template>
    <div class="container">
      <p v-awesome:red="'Hotash naki?'"></p>
      <p v-awesome:green="'Hotash naki?'"></p>
    </div>
  </template>

  <script>
  export default {};
  </script>
  ```

- # Custom Modifiers
- ### main.js

  ```js
  import "bootstrap";
  import "bootstrap/dist/css/bootstrap.css";
  import Vue from "vue";
  import App from "./App.vue";

  Vue.config.productionTip = false;

  Vue.directive("awesome", {
    bind(el, binding) {
      el.innerHTML = binding.value;
      // (binding.arg === 'green') ? el.style.color = "green" : (binding.arg === 'red') ?  el.style.color = "red" : "";
      if (binding.modifiers.green) {
        el.style.color = "green";
      }
      if (binding.modifiers.red) {
        el.style.color = "red";
      }
      if (binding.modifiers.big) {
        el.style.fontSize = "3rem";
      }
      if (binding.modifiers.small) {
        el.style.fontSize = "1.2rem";
      }
    },
  });

  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
  ```

- ### App.vue

  ```vue
  <template>
    <div class="container">
      <p v-awesome.red.big="'Hotash naki?'"></p>
      <p v-awesome.green.small="'Hotash naki?'"></p>
    </div>
  </template>

  <script>
  export default {};
  </script>
  ```
