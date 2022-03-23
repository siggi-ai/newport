<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="leftbox">
      <div class="leftcontent">
        <strong class="name">#Siegfried Hamm</strong>
        <strong class="title">&#60;WebDeveloper&#62;</strong>
      </div>
    </div>
    <p class="self-description-text">
      <string>Hi! My name is Siegfried.</string><br /><string
        >I am a Web - Developer!</string
      >
      <br /><br /><string>OPEN &nbsp;TO WORK &nbsp; ! 🙂</string>
      <br /><br /><string style="color: red">smiley.face@gmx.de</string>
    </p>
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
      <Eyes class="eye2" />
      <br />
    </div>

    <br />

    <div>
      <ul class="listbox">
        <li class="list">
          <a href="https://laughing-minsky-d5d277.netlify.app/">travel blog</a>
        </li>
        <li class="list">
          <a href="https://reverent-hawking-70f389.netlify.app/">Pokédex</a>
        </li>
        <li class="list">Movie Page</li>
        <li class="list">Your website ?</li>
      </ul>
    </div>

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
/* for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j); */
var square = function (x) {
  return x * x;
};
let x = 9;
console.log(square(x));
</script>

<style>
body {
  display: flex;
  margin: 0 auto;
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
  margin-top: 121px;
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
  margin-left: -200px;
  margin-top: 111px;
  animation: fade 8s infinite;
}

.leftbox {
  margin-left: 50px;
}

.rightbox {
  display: flex;
  margin-left: 350px;
  margin-top: 55px;
}

.name {
  font-family: "Bungee Hairline";
  font-size: 58px;
  color: #61bdff;
}

.title {
  display: flex;
  font-family: "Bungee Hairline";
  font-size: 59px;
  color: #00ffdc;
  width: 100%;
  margin-top: -72px;
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

.self-description-text {
  color: #00ff89;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 100px;
  margin-top: -30px;
  width: 200px;
}

.eye2 {
  margin-left: 120px;
}

.eyes {
  margin-left: 493px;
  margin-top: -360px;
}

.description {
  font-family: "Bungee Hairline";
  font-size: 20px;
  color: #000000;
  margin-top: 60px;
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
  background-color: rgb(255, 255, 255);
  margin-top: 0px;
  margin-left: 50px;
  width: 580px;
  padding: 20px;
}

.circles {
  margin-left: 200px;
}

.circle {
  margin-left: 700px;
}

@media screen and (max-width: 680px) {
  .name {
    font-family: "Bungee Hairline";
    font-size: 30px;
    color: #61bdff;
  }

  .title {
    display: flex;
    font-family: "Bungee Hairline";
    font-size: 30px;
    color: #00ffdc;
    width: 100%;
    margin-top: -40px;
    overflow: hidden;
    white-space: nowrap;
    animation: typewriter 3s steps(50, end);
  }
  .self-description-text {
    color: #00ff89;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 100px;
    margin-top: 10px;
    width: 200px;
  }
  .listbox {
    margin-top: 170px;
    margin-left: 50px;
    width: 280px;
    padding: 20px;
  }
  .rightbox {
    display: flex;
    margin-left: 80px;
    margin-top: 70px;
  }
  .three-logos {
    width: auto;
    height: 75px;
    margin-left: -200px;
    margin-top: -10px;
  }
  .vue-logo {
    width: auto;
    height: 65px;
    margin-top: 0px;
  }
  .description {
    font-family: "Bungee Hairline";
    font-size: 20px;
    color: #000000;
    margin-top: -60px;
  }
}
</style>
