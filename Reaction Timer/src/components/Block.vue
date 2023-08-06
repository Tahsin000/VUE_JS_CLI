<template lang="">
  <div class="block" v-if="showBlock" @click="stopTime">Click ME</div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: ["delay"],
  setup(props, context) {
    const showBlock = ref(false);
    const { delay } = props;

    onMounted(() => {
      setTimeout(() => {
        showBlock.value = true;
        startTime();
      }, delay);
    });

    // ----------------------------
    let timer = null;
    const reactionTime = ref(0);

    const startTime = () => {
      timer = setInterval(() => {
        reactionTime.value += 10;
      }, 10);
    };
    const stopTime = () => {
      clearInterval(timer);
    //   console.log(reactionTime.value);
      context.emit('end', reactionTime.value);
    };

    return {
      showBlock,
      startTime,
      stopTime,
    };
  },
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
