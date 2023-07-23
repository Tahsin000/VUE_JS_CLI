# 26. Learn Vue JS Control Parent from Child (Part 26)

- ## App.vue

```vue
<template>
  <div>
    <mySideBar
      :firstName="fName"
      :lastName="lName"
      :age="myAge"
      @updateValue="fName = $event"
    />
  </div>
</template>

<script>
import mySideBar from "./components/share/SideBar.vue";

export default {
  data() {
    return {
      fName: "Jon",
      lName: "Doe",
      myAge: 42,
    };
  },
  components: {
    mySideBar,
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

- ## SideBar.vue

```vue
<template>
  <div>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ age }}</p>
    <button @click="updateName">Change ME</button>
  </div>
</template>
<script>
export default {
  props: {
    firstName: String,
    lastName: String,
    age: Number,
  },
  methods: {
    updateName() {
      this.$emit("updateValue", "Tahsin");
    },
  },
};
</script>
<style scoped>
p {
  background-color: rgb(126, 198, 54);
  color: white;
  padding: 10px;
  border-radius: 10px;
}
button {
  background-color: tomato;
  color: azure;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: transform 0.25s;
}
button:hover {
  background-color: rgb(206, 84, 62);
  color: azure;
  transform: scale(0.95);
}
</style>
```
