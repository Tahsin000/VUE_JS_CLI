# 28. Learn Vue JS Use slots (part 28)

- ## App.vue

```vue
<template>
  <div>
    <ListHelper>
      <ul slot="listItem">
        <li v-for="list in lists" :key="list">
          {{ list }}
        </li>
      </ul>
      <p slot="para">user also knows PHP</p>
      <p :slot="loader">See you again</p>
    </ListHelper>
  </div>
</template>

<script>
import ListHelper from "./components/ListHelper";
export default {
  data() {
    return {
      lists: ["HTML", "CSS", "JAVASCRIPT"],
      loader: "",
    };
  },
  components: {
    ListHelper,
  },
  created() {
    setTimeout(() => {
      this.loader = "other";
    }, 3000);
  },
};
</script>

<style>
* {
  font-family: "Raleway", sans-serif;
}
</style>
```

- ## ListHelper.vue

```vue
<template>
  <div>
    <slot name="listItem"></slot>
    I am a lister helper
    <slot name="para"></slot>
    <slot name="other">Loading...</slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul li {
  background-color: tomato;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0;
  width: 120px;
  font-weight: 600;
}
p {
  background-color: rgb(118, 80, 255);
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0;
  width: 500px;
}
</style>
```
