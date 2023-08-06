<template lang="">
    <div>
        <h1>This is the Customer Page</h1>
        <p class="lead">Loaded id : {{id}}</p>
    </div>
</template>
<script>

import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
export default {
    setup(){
        const router = useRoute();
        const id = ref('');
        onMounted(()=>{
            id.value = router.params.id;
            console.log(id.value);
        })
        watch(()=>{
            id.value = router.params.id;
        })
        return{
            id
        }
    }
}
</script>
<style lang="">
    
</style>