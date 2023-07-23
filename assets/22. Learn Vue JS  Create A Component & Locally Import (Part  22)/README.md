# 22. Learn Vue JS Create A Component & Locally Import (Part 22)

- ## App.vue

```js
<template>
  <div class="">
    <myHeader/>
    <myFooter/>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import myHeader from './components/share/MyHeader.vue';
import myFooter from './components/share/MyFooter.vue';

  export default{
    data(){
      return{
        name:"Hotash",
        age: 24
      }
    },
    components: {
      myHeader,
      myFooter
  }
  }
</script>

<style>
</style>
```
