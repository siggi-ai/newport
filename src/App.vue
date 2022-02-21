<template>
  <div>
    Hello World!
    <Works />
  </div>
</template>

<script>
import Works from "./components/Works.vue";

export default {
  name: "App",
  components: {
    Works,
  },
};
</script>

<style>
#app {
  color: #2474c4;
  margin-top: 60px;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}
</style>
