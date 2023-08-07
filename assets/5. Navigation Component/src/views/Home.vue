<template lang="">
    <div class="home">
        <h2 class="">Destination</h2>
        <div class="destinations">
            <router-link 
                
                v-for="destination in destinations"
                :key="destination.id"
                :to="destination.slug" 
            >
            <h4>{{destination.name}}</h4> 
            <img :src="`src/assets/images/${destination.image}`" alt="">
            </router-link>
        </div>
    </div>
</template>
<script>
import sourceData from "@/assets/data.json"
export default {
    data(){
        return{
            destinations : sourceData.destinations
        }
    }
}
</script>
<style lang="">
    
</style>