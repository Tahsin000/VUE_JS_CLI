<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Navbar brand/logo -->
      <a class="navbar-brand" href="#">My Website</a>
      <!-- Hamburger icon for mobile -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Navbar items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/brazil">Brazil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hawaii">Hawaii</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/jamaica">Jamaica</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/panama">Panama</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
nav .vue-school-active-link{
  border-bottom: 2px solid #4d4d4d;
}
</style>