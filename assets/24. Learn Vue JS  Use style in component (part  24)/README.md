# 24. Learn Vue JS Use style in component (part 24)

- ## App.vue

```vue
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

<style>
body {
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
</style>
```

- ## MyHeader.vue

```vue
<template>
  <div>
    <h1>Header</h1>
  </div>
</template>
<style scoped>
h1 {
  background-color: tomato;
  color: azure;
  padding: 10px;
  border-radius: 10px;
}
</style>
```
