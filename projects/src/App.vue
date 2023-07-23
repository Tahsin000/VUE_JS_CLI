<template>
  <div>
    <ListHelper>
      <ul slot="listItem">
         <li v-for="list in lists" :key="list">
        {{ list }}
        </li>
      </ul>
      <p slot="para">user also knows PHP</p>
    </ListHelper>
  </div>
</template>

<script>
import ListHelper from "./components/ListHelper";
export default {
    data(){
      return{
        lists:['HTML', 'CSS', 'JAVASCRIPT']
      }
    },
    components:{
      ListHelper,
    }
};
</script>

<style>
*{
  font-family: 'Raleway', sans-serif;
}
</style>
