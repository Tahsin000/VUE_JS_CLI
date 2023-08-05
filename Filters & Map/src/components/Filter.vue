<template lang="">
    <div>
        This is the <span class="highLight">Filter</span> Component
    </div>
    <ol>
        <li v-for="item in filterArray">- {{ item.name }}</li>
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
            filterArray:[],
        }
    },
    mounted() {
        this.filterArray = this.originalArray.filter(item => item.name.startsWith('A'));
        console.log(this.filterArray);
    },
}
</script>