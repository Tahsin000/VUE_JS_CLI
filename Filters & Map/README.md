# Vue js Filter

## This is the Filter Component Code

```vue
<template lang="">
  <div>This is the Filter Component</div>
  <ol>
    <li v-for="item in filterArray">- {{ item.name }}</li>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      originalArray: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Anna" },
        { id: 5, name: "David" },
      ],
      filterArray: [],
    };
  },
  mounted() {
    this.filterArray = this.originalArray.filter((item) =>
      item.name.startsWith("A")
    );
    console.log(this.filterArray);
  },
};
</script>
```

## This is the Map Component Code

```vue
<template lang="">
  <div>This is the <span class="highLight">Map</span> Component</div>
  <ol>
    <li v-for="item in mapArray">- {{ item.name }}</li>
  </ol>
</template>
<script>
export default {
  data() {
    return {
      originalArray: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "Anna" },
        { id: 5, name: "David" },
      ],
      mapArray: [],
    };
  },
  mounted() {
    this.mapArray = this.originalArray.map((item) => {
      return { ...item, name: item.name.toUpperCase() };
    });
    console.log(this.mapArray);
  },
};
</script>
```
