<template lang="">
    <div>
        This is the <span class="highLight">Map</span> Component
    </div>
    <ol>
        <li v-for="item in mapArray">- {{ item.name }}</li>
    </ol>
</template>
<script>
export default {
    data(){
        return{
            originalArray:[
                {id:1, name: "Alice"},
                {id:2, name: "Bob"},
                {id:3, name: "Charlie"},
                {id:4, name: "Anna"},
                {id:5, name: "David"}
            ],
            mapArray:[],
        }
    },
    mounted() {
        this.mapArray = this.originalArray.map(item=> {
            return{ ...item, name: item.name.toUpperCase() };
        });
        console.log(this.mapArray);
    },
}
</script>