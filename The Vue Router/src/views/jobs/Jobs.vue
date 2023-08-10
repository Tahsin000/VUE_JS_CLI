<template lang="">
  <div>
    <h1>Jobs</h1>
    <div class="container">
        <router-link :to="{name:'jobsDetails', params:{id:job.job_id}}" class="btn secondary " v-for="job in jobsData" :key="job.job_id">{{ job.job_title }}</router-link>

    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import jobsInfo from '/public/jobData.json'
export default {
  setup() {
    const jobsData = ref();
    onMounted(()=>{
      jobsData.value = jobsInfo;
    })
    return {
      jobsData,
    };
  },
};
</script>
<style scoped>
/* Default button styles */
.container{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.btn {
    width: 200px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Hover effect */
.btn:hover {
  background-color: #0056b3;
}

/* Disabled button styles */
.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Different button sizes */
.btn.small {
  padding: 6px 12px;
  font-size: 14px;
}

.btn.large {
  padding: 14px 28px;
  font-size: 18px;
}

/* Different button colors */
.btn.primary {
  background-color: #007bff;
}

.btn.secondary {
  background-color: #6c757d;
}

.btn.success {
  background-color: #28a745;
}

.btn.danger {
  background-color: #dc3545;
}

/* Outline buttons */
.btn-outline {
  background-color: transparent;
  color: #007bff;
  border: 1px solid #007bff;
}

.btn-outline:hover {
  background-color: #007bff;
  color: #fff;
}

/* Rounded buttons */
.btn.rounded {
  border-radius: 50px;
}

/* Icon buttons */
.btn.icon {
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
