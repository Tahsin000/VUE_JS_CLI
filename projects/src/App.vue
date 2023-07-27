<template lang="">
  <div class="container">
    <transition>
      <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
    </transition>
    <button @click="display = !display" class="btn btn-primary">Toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: false,
    };
  },
};
</script>
<style>
.appear-enter {
  opacity: 0;
}
.appear-enter-active {
  transition: opacity 3s;
}
.appear-leave {
}
.appear-leave-active {
  opacity: 0;
  transition: opacity 3s;
}
</style>
