<template>
  <div class="container">
    <p v-awesome.red.big="'Hotash naki?'"></p>
    <p v-awesome.green.small="'Hotash naki?'"></p>
    <hr />
    <div v-user="userValue"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userValue: "Franky",
    };
  },
  directives: {
    user: {
      bind(el, binding) {
        el.innerHTML = binding.value;
      },
    },
  },
};
</script>
