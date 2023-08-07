<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Navbar brand/logo -->
      <router-link class="navbar-brand" to="/">Vue School Travel App</router-link>
      <!-- Hamburger icon for mobile -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/destination/3">Brazil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/destination/4">Hawaii</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/destination/6">Jamaica</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/destination/12">Panama</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

</style>