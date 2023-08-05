<template lang="">
  <div id="welcomeModal" class="modal"  @click="$emit('close')">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Welcome Modal</h2>
      <p>
        This is the welcome modal content. You can add more information here.
      </p>
      <!-- <small>{{close}}</small> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
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
.d-none {
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
