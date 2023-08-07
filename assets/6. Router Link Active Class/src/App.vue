<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar  from './views/Navbar.vue'
</script>

<template>
  <Navbar/>
  <!-- <router-link >Home</router-link> -->
  <div class="container">
    <router-view></router-view>
  </div>
</template>
