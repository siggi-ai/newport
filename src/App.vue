<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />

    <div>
      <strong class="title">Siegfried Hamm - Web Developer</strong>
    </div>

    <br />

    <img :src="image" />

    <br />

    <Works />
    <Box1 />
  </div>
</template>

<script>
import image from "./assets/logo.png"
import Works from "./components/Works.vue";
import Box1 from "./components/Box1.vue";

export default {
  name: "App",
  components: {
    Works,
    Box1,
  },
  data: function () {
    return {
      image: image
    }
  }
};
</script>

<style type="text/css">
body {
  background-color: #000;
  padding: 40px;
}

.title {
  font-family: "Bungee Hairline";
  font-size: 27px;
  color: #00ffdc;
  animation: type-text 8s steps(10 end);
}

@keyframes type-text {
  from {
    width: 0;
  }
  to {
    width: 30e;
  }
}
</style>
