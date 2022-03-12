<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="box1">
      <strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;min</strong
      >
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
  color: #000;
  width: 100px;
  height: 100px;
  background-color: white;
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
  height: 20px;
  background-color: #ff0000;
}

p {
  margin-top: 0px;
}
</style>
