<template>
  <div>
    <div class="sugg">
      <h1 class="bored">
        bored? don't worry - everyone is bored from time to time - let me help
        you:
      </h1>
      <br />
      <Suggestions />
    </div>
  </div>
</template>
<script>
import Suggestions from "../components/Suggestions.vue";
export default {
  name: "Bored",
  components: { Suggestions },
};
</script>
<style scoped>
.sugg {
  text-align: center;
  margin-left: 0 auto;
  padding: 30px;
  font-size: 1rem;
  margin: 0 auto;
  width: 500px;
  font-family: "Courier New", Courier, monospace;
}
.bored {
  font-family: "Bungee Hairline";
  font-size: 20px;
  margin-bottom: -10px;
  margin-top: -25px;
  color: white;
}
</style>