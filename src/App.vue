<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="leftbox">
      <div>
        <strong class="name">#Siegfried Hamm</strong>
        <strong class="title">&#60;WebDeveloper&#62;</strong>
      </div>
    </div>

    <div class="rightbox">
      <strong class="description">*websites using:</strong>
      <br />
      <img class="three-logos" :src="Logo3" />
      &nbsp;
      <img class="vue-logo" :src="Logo" />
      <br />
    </div>

    <br />
    <br />
    <br />
    <br />
    <div class="eyes">
      <Eyes class="eye1" />
      <!-- <strong class="description">&#60;CSS Animation&#62;</strong> -->
      <Eyes class="eye2" />
      <!-- <div class="nose"></div> -->
      <br />
      <!-- <div class="mouth"></div> -->
    </div>

    <br />

    <ul class="listbox">
      <li class="list">travel blog</li>
      <li class="list">Pokédex</li>
      <li class="list">Movie Page</li>
      <li class="list">Your website ?</li>
    </ul>

    <Circles class="circle" />
  </div>
</template>

<script>
import Logo3 from "../public/images/logos.png";
import Logo from "./assets/logo.png";
import Eyes from "./components/Eyes.vue";
import Circles from "./components/Circles.vue";

export default {
  name: "App",
  components: {
    Eyes,
    Circles,
  },
  data: function () {
    return {
      Logo: Logo,
      Logo3: Logo3,
    };
  },
};
for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
</script>

<style>
body {
  display: flex;
  padding: 40px;
  background: linear-gradient(-45deg, #a52600, #ac0042, #005a7a, #006e55);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.vue-logo {
  width: auto;
  height: 65px;
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
  height: 75px;
  margin-left: 15px;
  animation: fade 8s infinite;
}

.leftbox {
  display: flex;
}

.rightbox {
  margin-left: 288px;
  margin-top: -100px;
}

.name {
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #61bdff;
}

.title {
  display: flex;
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #00ffdc;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 3s steps(50, end);
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

.eye2 {
  margin-left: 120px;
  margin-top: -5px;
}

.eyes {
  margin-left: 50px;
}

.nose {
  height: 30px;
  width: 30px;
  background-color: red;
  margin-left: 330px;
  border-radius: 50%;
}

.mouth {
  height: 30px;
  width: 60px;
  background-color: rgb(0, 0, 0);
  margin-left: 330px;
  border-radius: 50%;
}

.description {
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #fffdb2;
}

.list {
  margin-left: 45px;
  font-family: "Bungee Hairline";
  font-size: 20px;
  font-weight: bold;
  color: #f30000;
  list-style: square;
}

.listbox {
  border: 1px solid #b90000;
  border-radius: 2%;
  background-color: rgb(0, 0, 0);
}

.circles {
  margin-left: 200px;
}

.circle {
  margin-left: 200px;
}
</style>
