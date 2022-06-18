<template>
  <div>
    <div class="sugg">
      <p class="bored">
        Do you like cats?
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
  margin-left: 0px;
  padding: 30px;
  font-size: 2rem;
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
@media screen and (max-width: 680px) {
  .sugg {
    margin-left: -20px;
  }
}
</style>
