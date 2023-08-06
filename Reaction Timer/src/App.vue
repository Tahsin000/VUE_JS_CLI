<template lang="">
  <div class="container">
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying" class="btn">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <!-- <p v-if="showResult">Reaction time : {{ score }} ms</p> -->
    <Result v-if="showResult" :score="score" />
  </div>
</template>

<script>
import { ref } from "vue";
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";
export default {
  name: "App",
  components: { Block, Result },
  setup() {
    const isPlaying = ref(false);
    const delay = ref(null);
    const score = ref(null);
    const showResult = ref(false);
    const start = () => {
      delay.value = 2000 + Math.random() * 5000;
      isPlaying.value = true;
      showResult.value = false;
    };
    const endGame = (reactionTime) => {
      score.value = reactionTime;
      isPlaying.value = false;
      showResult.value = true;
    };
    return {
      isPlaying,
      delay,
      start,
      endGame,
      score,
      showResult,
    };
  },
};
</script>
<style>
.btn:hover {
  background-color: rgb(224, 63, 34);
}
.btn {
  background: tomato;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button:disabled,
button[disabled] {
  opacity: 40%;
}

#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}
</style>
