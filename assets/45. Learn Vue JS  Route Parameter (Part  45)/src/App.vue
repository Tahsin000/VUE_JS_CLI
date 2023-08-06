<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <Navbar/>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Header.vue'
export default {
  components:{
    Navbar
  }
}
</script>
<style lang="">
  
</style>