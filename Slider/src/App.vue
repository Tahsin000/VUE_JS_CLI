<template>
  <div class="flex-center">
    <Slider :sliderInfo="data" />
  </div>
</template>
<script>
import Slider from "./components/Slider.vue";
import { ref } from "vue";
export default {
  components: { Slider },
  setup() {
    const data = ref([
      {
        id: 1,
        title: "Sunset at the Beach",
        image: "https://i.ibb.co/GczV1Wf/image.png",
      },
      {
        id: 2,
        title: "Mountain Landscape",
        image: "https://i.ibb.co/0hvQhhQ/image.png",
      },
      {
        id: 3,
        title: "City Skyline",
        image: "https://i.ibb.co/XYY62M3/image.png",
      },
      {
        id: 4,
        title: "Enchanted Forest",
        image: "https://i.ibb.co/Wnt5vTf/image.png",
      },
      {
        id: 5,
        title: "Desert Oasis",
        image: "https://i.ibb.co/ncLkJ3p/image.png",
      },
      {
        id: 6,
        title: "Desert Oasis",
        image: "https://i.ibb.co/HYfBBMY/image.png",
      },
      {
        id: 7,
        title: "Desert Oasis",
        image: "https://i.ibb.co/s5wHj8q/image.png",
      },
    ]);
    return{
      data
    }
  },
};
</script>

<style>
.flex-center{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>