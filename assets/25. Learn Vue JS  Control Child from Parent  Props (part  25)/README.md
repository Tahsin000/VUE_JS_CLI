# 25. Learn Vue JS Control Child from Parent Props (part 25)

- ## Footer.vue

```vue
<template>
  <div>
    <h1>Footer</h1>
    <h1>{{ myFooterValue }}</h1>
  </div>
</template>
<script>
export default {
  props:{
    myFooterValue:{
      type: Number
    }
  }
}
</script>
<style>
  h1{
    background-color: blueviolet;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }
</style>

```

- ## Header.vue

```vue
<template>
  <div>
    <h1>Header</h1>
    <h1>{{ myName }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    myName: {
      type: String,
    },
  },
};
</script>
<style scoped>
h1 {
  background-color: tomato;
  color: azure;
  padding: 10px;
  border-radius: 10px;
}
</style>
```

- ## App.vue

```vue
<template>
  <div class="">
    <myHeader :myName="name" />
    <app-footer :myFooterValue="age" />
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <SideBar mySideBar="Footer ekon hotasha chttore"/>
  </div>
</template>

<script>
import myHeader from "./components/share/MyHeader.vue";
import SideBar from "./components/share/SideBar.vue";

export default {
  data() {
    return {
      name: "Hotash",
      age: 420,
    };
  },
  components: {
    myHeader,
    SideBar,
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
