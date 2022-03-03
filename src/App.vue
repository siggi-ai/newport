<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="top-bar">
      <strong class="title">Siegfried Hamm - Web Developer</strong>
    </div>

    <img scr="..\src\assets\logo.png" alt="vue logo" class="logo" />

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
.title {
  animation: type 8s steps(60, end);
}

.top-bar {
  margin-left: 2em;
  background-color: black;
}

@keyframes type {
  from {
    width: 0;
  }
}

.logo {
  width: 10px;
  height: 10px;
}
</style>
