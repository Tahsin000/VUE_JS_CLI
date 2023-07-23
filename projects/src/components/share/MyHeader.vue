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
