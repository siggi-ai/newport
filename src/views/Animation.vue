<template>
  <div class="face">
    <Circles />
    <Eyes class="eyes" />
    <Eyes class="eye2" />
    <Mouth />
  </div>
</template>
<script>
import Circles from "../components/Circles.vue";
import Eyes from "../components/Eyes.vue";
import Mouth from "../components/Mouth.vue";
export default {
  name: "Animation",
  components: { Circles, Eyes, Mouth },
};
</script>
<style> 
@media screen and (max-width: 680px) {
  .face {
    margin-left: -120px;
  }
}
</style>