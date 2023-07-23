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
