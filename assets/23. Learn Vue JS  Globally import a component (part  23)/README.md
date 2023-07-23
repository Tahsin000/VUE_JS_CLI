# 23. Learn Vue JS Globally import a component (part 23)

- ## main.js

```js
import Vue from "vue";
import App from "./App.vue";

import myFooter from "./components/share/MyFooter.vue";

Vue.component("app-footer", myFooter);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

- ## App.Vue

```js
<template>
  <div class="">
    <myHeader />
    <app-footer />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import myHeader from "./components/share/MyHeader.vue";

export default {
  data() {
    return {
      name: "Hotash",
      age: 24,
    };
  },
  components: {
    myHeader,
  },
};
</script>

<style></style>

```
