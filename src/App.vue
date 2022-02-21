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
    Works
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
