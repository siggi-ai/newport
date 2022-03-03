<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="top-bar">
    <strong class="top-bar">Siegfried Hamm - Web Developer</strong>
    </div>
    <br />

    <Works />
    <Box1 />

  </div>
</template>

<script>
import Works from "./components/Works.vue";
import Box1 from "./components/Box1.vue";

export default {
  name: "App",
  components: {
    Works,
    Box1,
  },
};
</script>

<style>
body {
  display: flex;
  background-color: #000;
  font-family: "Bungee Hairline";
  color: #00ffdc;
  margin-top: 60px;
  font-size: 20px;
}

.top-bar {
  margin-left: 2em;
}
</style>
