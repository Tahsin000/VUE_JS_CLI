<template lang="">
    <div class="home">
        <h2 class="">Destination</h2>
        <div class="destinations d-flex flex-wrap ">
            <router-link 
                class="__border-2"
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name:'Destination.show', params: {id: destination.id, slug: destination.slug}}" 
            >
            <h4>{{destination.name}}</h4> 
            <img class="__image" :src="`src/assets/images/${destination.image}`" alt="">
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
<style scoped>
    .__image{
        width: 230px;
        height: 150px;
    }
    .__border-2{
        border: 2px solid rgba(0, 0, 0, 0.418);
        margin: 5px;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 3px 3px 10px #12121270;
        text-decoration: none;
        font-weight: 800;
        color: darkslategrey;
    }
</style>