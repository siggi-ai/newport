<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="box1">
      <div class="box2"></div>
    </div>
  </div>
</template>
<script>
import Logo from "../assets/logo.png";
export default {
  data: function () {
    return {
      Logo: Logo,
    };
  },
};
</script>
<style scoped>
.box1 {
  font-family: "Bungee Hairline";
  color: white;
  width: 100px;
  height: 100px;
  background-color: #3b3b3b;
  margin-left: 15em;
  margin-top: -6em;
  border-radius: 50%;
  /* transform: rotate(45deg); */
  animation: spin 100s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.box2 {
  width: 100px;
  height: 50px;
  background-color: #000000;
}

.vue-logo {
  margin-top: -10px;
  margin-left: 25px;
}

p {
  margin-top: 0px;
}
</style>
