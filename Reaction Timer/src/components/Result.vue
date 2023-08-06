<template lang="">
  <p>Reaction time : {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: ["score"],
  setup(props) {
    const { score } = props;
    let rank = ref(null);
    onMounted(() => {
      if (score < 250) {
        rank.value = "Precision Prodigy ⭐⭐⭐";
      } else if (score < 400) {
        rank.value = "Reflex Master ⭐⭐";
      } else {
        rank.value = "Swift Precisionist ⭐";
      }
    });
    return {
      rank,
    };
  },
};
</script>
<style>
.rank {
  font-size: 1.4rem;
  color: tomato;
  font-weight: bold;
}
</style>
