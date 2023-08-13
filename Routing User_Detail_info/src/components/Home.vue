<template>
  <div class="body">
    <div class="container mx-auto my-3">
      <div class="border border-1 p-3 _input_frame position-relative">
        <p class="lead __label_name">Name</p>
        <input
          type="text"
          class="border-0 w-100"
          placeholder="Search Here..."
          v-model="search"
        />
      </div>
    </div>
    <!-- v-if="userData.length" -->
    <div class="_container">
      <div
        v-if="pageLoader"
        class="vh-100 d-flex align-items-center justify-content-center"
      >
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div
        v-else
        v-for="item in searchData"
        :key="item.id"
        class="container mt-5"
      >
        <router-link
          class="__link"
          :to="{ name: 'profile', params: { id: item.id } }"
        >
          <div class="profile-card">
            <div class="profile-header">
              <!-- <img
                      :src="item.thumbnailUrl"
                      alt="Profile Picture"
                      class="profile-picture"
                    /> -->
            </div>
            <div class="profile-content">
              <h1>{{ item.name }}</h1>
              <p class="lead">{{ item.email }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <div class="spinner-border" v-else  role="status">
          <span class="visually-hidden"></span>
        </div> -->
  </div>
</template>
<script>
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    const userData = ref([]);

    const pageLoader = ref(true);
    const search = ref("");
    const searchData = computed(() => {
      return userData.value.filter((item) =>
        item.name.toUpperCase().includes(search.value.toUpperCase())
      );
    });

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => (userData.value = data))
        .catch((err) => console.log(err.message));

      pageLoader.value = false;
    });
    return {
      userData,
      pageLoader,
      search,
      searchData,
    };
  },
};
</script>
<style scoped>
.border-0 {
  outline: none;
}
.__link {
  text-decoration: none;
}
._input_frame {
  border-radius: 15px;
}
.__label_name {
  position: absolute;
  top: 0;
  transform: translate(0%, -60%);
  background: #fff;
  padding: 0 5px;
}
.body {
  padding: 30px;
}
._container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.profile-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.profile-header {
  margin-bottom: 20px;
}

.profile-picture {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.profile-content h2 {
  margin-top: 0;
  font-size: 24px;
}

.profile-icons a {
  color: #333;
  font-size: 20px;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s;
}

.profile-icons a:hover {
  color: #007bff;
}
</style>
