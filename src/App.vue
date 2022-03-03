<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="top-bar"></div>
    <strong>Siegfried Hamm - Web Developer</strong>

    <br />
    <br />
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
body {
  background-color: #000;
  color: #00ffdc;;
  margin-top: 60px;
  text-align: center;
  font-family: "Bungee Hairline";
  font-size: 20px;
}
.top-bar {
}
</style>
