<template>
  <div>
    <div class="sugg">
      <p class="bored">
        bored? don't worry - everyone is bored from time to time - let me help
        you:
      </p>
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
  font-size: 2rem;
  margin: 0 auto;
  width: 500px;
  font-family:'Courier New', Courier, monospace;
}
.bored {
  font-family: 'Julius Sans One', sans-serif;
  font-size: 29px;
  margin-bottom: 0px;
  margin-top: -15px;
  color: white;
}

</style>