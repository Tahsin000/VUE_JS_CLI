<template lang="">
  <div>
    <h1>{{ jobsData.job_title }}</h1>
    <p class="lead">{{jobsData.job_details}}</p>

  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import jobsInfo from "/public/jobData.json";
import { useRoute } from 'vue-router'
export default {
  setup() {
    const router = useRoute()
    const itemID = ref(router.params.id);
    const jobsData = ref([]);
    const data_info = ref([])
    onMounted(() => {
      jobsData.value = jobsInfo.find((item)=>item.job_id === parseInt(itemID.value));
    //   console.log(typeof(itemID.value))
    //   jobsData.value = jobsInfo;
    });
    return {
      jobsData,
      jobsInfo,
      itemID,
      data_info
    };
  },
};
</script>
<style scoped>
.lead {
  font-size: 1rem;
  font-weight: 200;
}
</style>
