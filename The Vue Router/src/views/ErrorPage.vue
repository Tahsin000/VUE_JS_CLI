<template lang="">
  <div class="body">
    <div class="container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Oops! Page not found.</p>
      <router-link to="/" class="btn primary">Return to Home</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  text-align: center;
  margin-top: 15%;
}

.error-code {
  font-size: 5rem;
  color: #e74c3c;
}

.error-message {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.return-home a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.return-home a:hover {
  color: #2980b9;
}

.btn {
    width: 200px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

/* Hover effect */
.btn:hover {
  background-color: #0056b3;
}

/* Disabled button styles */
.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.btn.primary {
  background-color: #007bff;
}
</style>
