<template>
  <div>
    <slot name="listItem"></slot>
    I am a lister helper
    <slot name="para"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
ul li{
    background-color: tomato;
    color: white;
    padding: 5px;
    border-radius: 5px;
    margin: 5px 0;
    width:120px;
    font-weight: 600;
}
p{
    background-color:rgb(118, 80, 255);
    color: white;
    padding: 5px;
    border-radius: 5px;
    margin: 5px 0;
    width:500px;
}
</style>
