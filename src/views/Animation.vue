<template>
  <div class="face">
    <Circles />
    <Eyes class="eyes" />
    <Eyes class="eye2" />
    <Mouth />
    <MouthShadow />
  </div>
</template>
<script>
import Circles from "../components/Circles.vue";
import Eyes from "../components/Eyes.vue";
import Mouth from "../components/Mouth.vue";
import MouthShadow from "../components/MouthShadow.vue";
export default {
  name: "Animation",
  components: { Circles, Eyes, Mouth, MouthShadow },
};
</script>
<style>
@media screen and (max-width: 680px) {
  .face {
    margin-left: -120px;
  }
}
</style>
