<template>
  <div class="face">
    <Circles />
    <Eyes class="eyes" />
    <Eyes class="eye2" />
  </div>
</template>
<script>
import Circles from "../components/Circles.vue";
import Eyes from "../components/Eyes.vue";
export default {
  name: "Animation",
  components: { Circles, Eyes },
};
</script>
<style> 
@media screen and (max-width: 680px) {
  .face {
    margin-left: -120px;
  }
}
</style>