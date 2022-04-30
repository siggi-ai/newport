<template>
  <div>
    <div class="sugg">
      <h1 class="text">
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