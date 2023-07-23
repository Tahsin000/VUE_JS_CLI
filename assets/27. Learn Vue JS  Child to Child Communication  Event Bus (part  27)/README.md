# 27. Learn Vue JS Child to Child Communication Event Bus (part 27)

- ## App.vue

```vue
<template>
  <div>
    <HrLine TitleInfo="Header child" />
    <myHeader :firstName="fName" />
    <HrLine TitleInfo="Footer child" />
    <!-- <div style="position: relative; margin: 2rem 0;">
      <hr style="height: 1px; background-color: cadetblue" />
      <p class="position-absolute">Footer child</p>
    </div> -->
    <myFooter :lastName="lName" />
    <!-- <mySideBar /> -->
  </div>
</template>

<script>
// import mySideBar from "./components/share/SideBar.vue";
import myFooter from "./components/share/MyFooter";
import myHeader from "./components/share/MyHeader";
import HrLine from "./components/share/HrLine";

export default {
  data() {
    return {
      fName: "Jon",
      lName: "Doe",
      myAge: 42,
    };
  },
  components: {
    // mySideBar,
    myFooter,
    myHeader,
    HrLine,
  },
};
</script>

<style>
.position-absolute {
  position: absolute;
  top: -50%;
  right: 50%;
  transform: translate(50%, -100%);
  padding: 0 10px;
  background-color: white;
}
body {
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
</style>
```

- ## myHeader.vue

```vue
<template>
  <div>
    <h1>FirstName: {{ firstName }}</h1>
    <button @click="updateName">Click ME</button>
  </div>
</template>
<script>
import { bus } from "../../main";
export default {
  props: {
    firstName: String,
  },
  methods: {
    updateName() {
      bus.$emit("changeName", "Hotash");
    },
  },
};
</script>
<style scoped>
button {
  width: 100%;
  border: none;
  padding: 10px;
  background-color: rgb(7, 150, 252);
  color: white;
  font-size: 1rem;
  border-radius: 10px;
}
button:hover {
  background-color: rgb(44, 127, 186);
}
h1 {
  background-color: tomato;
  color: azure;
  padding: 10px;
  border-radius: 10px;
}
</style>
```

- ## myFooter.vue

```vue
<template>
  <div>
    <!-- <h1>Footer</h1> -->
    <h1>lastName: {{ lastName }}</h1>
  </div>
</template>
<script>
import { bus } from "../../main";
export default {
  props: {
    lastName: String,
  },
  created() {
    bus.$on("changeName", (data) => {
      // eslint-disable-next-line vue/no-mutating-props
      this.lastName = data;
    });
  },
};
</script>
<style scoped>
h1 {
  background-color: blueviolet;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
```

- ## HrLine.vue

```vue
<template>
  <div style="position: relative; margin: 2rem 0;">
    <hr style="height: 1px; background-color: cadetblue" />
    <p class="position-absolute">{{ TitleInfo }}</p>
  </div>
</template>
<script>
export default {
  props: {
    TitleInfo: String,
  },
};
</script>
```
