<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from MyComponent'
    };
  },
  methods: {
    changeMessage() {
      this.message = 'New message!';
    }
  }
};
</script>

<style>
h1 {
  color: blue;
}
</style>
