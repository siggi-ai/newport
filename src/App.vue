<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <strong class="title">Siegfried Hamm - Web Developer</strong>

    <br />

    <img scr="/images/logo.png" alt="vue logo" class="logo" />

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

<style type="text/css">
body {
  background-color: #000;
  padding: 40px;
}

.title {
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #00ffdc;
  animation-name: type-text;
  animation-duration: 4s;
}

@keyframes type-text {
  from {
    width: 0;
  }
  to {
    width: 1100px;
  }
}
</style>
