<template>
  <div>
    <mySideBar 
      :firstName = "fName"
      :lastName = "lName"
      :age = "myAge"
      @updateValue = "fName = $event"
    />
  </div>
</template>

<script>
import mySideBar from "./components/share/SideBar.vue";

export default {
  data() {
    return {
      fName:"Jon",
      lName:"Doe",
      myAge:42
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
