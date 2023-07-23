# 37. Learn Vue JS Custom Directive Local (PART 37)

- ## App.vue

  ```vue
  <template>
    <div class="container">
      <p v-awesome.red.big="'Hotash naki?'"></p>
      <p v-awesome.green.small="'Hotash naki?'"></p>
      <hr />
      <div v-user="userValue"></div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        userValue: "Franky",
      };
    },
    directives: {
      user: {
        bind(el, binding) {
          el.innerHTML = binding.value;
        },
      },
    },
  };
  </script>
  ```

- ## main.js

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
