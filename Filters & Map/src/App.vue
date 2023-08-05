
<template lang="">
  <div>
    <h2>This Filter <span class="highLight">App.vue</span>Components</h2>

    <!-- ---------  This is the Filter Component  --------- -->
    <!-- <Filter/> -->

    <!-- ---------  This is the Map Component  --------- -->
    <Map/>




  </div>
</template>

<script>
import Filter from "./components/Filter.vue"
import Map from "./components/Map.vue"
export default {
  components:{
    Filter,
    Map
  }  
}
</script>