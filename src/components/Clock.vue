<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="box1">
      <br />
      <div class="box2"></div>
      <div class="box3"></div>
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
    transform: rotate(360deg);
  }
}

.box2 {
  background-color: #000;
  width: 60px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 5px;
}

.box3 {
  background-color: rgb(121 121 121);
  width: 12px;
  height: 10px;
  border-radius: 50%;
  margin-left: 25px;
  margin-top: -30px;
}

p {
  margin-top: 0px;
}
</style>
