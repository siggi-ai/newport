<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />

    <div>
      <strong class="name">#Siegfried Hamm</strong>
      <strong class="title">&#60;WebDeveloper&#62;</strong>
    </div>
    <Box1 />

    <br />

    <img class="vue-logo" :src="Logo" />
    <img class="three-logos" :src="Logo3" />

    <br />

    <Works />

    <Circles />
  </div>
</template>

<script>
import Logo3 from "../public/images/logos.png";
import Logo from "./assets/logo.png";
import Works from "./components/Works.vue";
import Box1 from "./components/Box1.vue";
import Circles from "./components/Circles.vue";

export default {
  name: "App",
  components: {
    Works,
    Box1,
    Circles,
  },
  data: function () {
    return {
      Logo: Logo,
      Logo3: Logo3,
    };
  },
};
</script>

<style>
body {
  display: flex;
  background-color: #000;
  padding: 40px;
}

.vue-logo {
  width: auto;
  height: 50px;
  animation: fade 8s infinite;
}
@keyframes fade {
  10% {
    opacity: 0.7;
  }
  20% {
    opacity: 1;
  }
}

.three-logos {
  width: auto;
  height: 50px;
  margin-left: 15px;
  animation: fade 8s infinite;
}

.name {
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #00ffdc;
}

.title {
  display: flex;
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #00ffdc;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 2s steps(20, end);
}

@keyframes typewriter {
  from {
    width: 0;
    display: none;
  }
  to {
    width: 100%;
    display: block;
  }
}
</style>
