<template lang="">
  <div class="container mt-5">
    <div
      v-if="pageLoader"
      class="vh-100 d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else class="card">
      <div class="card-header">User Information</div>
      <div class="card-body">
        <h5 class="card-title">User ID: {{ userData.id }}</h5>
        <p class="card-text"><strong>Name: </strong>{{ userData.name }}</p>
        <p class="card-text"><strong>Email:</strong> {{ userData.email }}</p>
        <p class="card-text">
          <strong>street:</strong> {{ userData.address?.street }}
        </p>
        <p class="card-text">
          <strong>phone:</strong>
          {{ userData.phone }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRoute();
    const itemID = ref(router.params.id);
    const userData = ref([]);
    const pageLoader = ref(true);
    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(
          (data) =>
            (userData.value = data.find(
              (item) => item.id === parseInt(itemID.value)
            ))
        ) // data.find(item => item.id === itemID)
        .catch((err) => console.log(err.message));
      pageLoader.value = false;
      console.log(userData.value);
    });
    return {
      userData,
      pageLoader,
      itemID,
    };
  },
};
</script>
<style lang=""></style>
