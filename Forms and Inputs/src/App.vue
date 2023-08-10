<template lang="">
  <div class="container" >
    <Form class="__w100" />
  </div>
</template>
<script>
import Form from "./components/Form_Input.vue";
export default {
  components: {
    Form,
  },
};
</script>
<style scoped >
.__w100{
  width: 100%;
}
.container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
