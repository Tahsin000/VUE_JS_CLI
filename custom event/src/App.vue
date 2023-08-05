<template lang="">
  <div class="welcome-page">
    <h1>Welcome to Our Tech Website</h1>
    <p>
      Explore the latest tech trends and innovations. Stay updated with the
      latest tech news and reviews.
    </p>
    <button @click="isModalOpen" class="btn">Get Started</button>
    <Baby @close="isModalOpen" :class="{'d-none' : isVisible === true }" />
  </div>
</template>

<script>
import { ref } from "vue";
import Baby from "./components/Baby.vue";
export default {
  components: {
    Baby,
  },
  setup() {
    const isVisible = ref(true)
    const isModalOpen = () =>{
      isVisible.value = !isVisible.value;
    }
    return {isVisible,isModalOpen };
  },
};
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.d-none{
  display: none;
}
.welcome-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
}

.welcome-page h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.welcome-page p {
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 30px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

/* Modal styles */

.modal {
  /* display: none; */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  text-align: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
