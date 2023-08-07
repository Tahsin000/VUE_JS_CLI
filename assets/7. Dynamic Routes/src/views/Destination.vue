<template lang="">
    <section class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details d-flex ">
            <!-- src/assets/images/blue-mountain.jpg -->
            <img :src="`/src/assets/images/${destination.image}`" alt="">
            <p class="lead text-justify p-3">{{destination.description}}</p>
        </div>
    </section >
</template>
<script>
import sourceData from "@/assets/data.json"
export default {
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        },
        destination(){
            return sourceData.destinations.find(destination =>destination.id === this.destinationId);
        }
    }
}
</script>
<style lang="">
    
</style>