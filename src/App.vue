<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap"
      rel="stylesheet"
    />
    <div class="top-box">
      <div class="top-content">
        <strong class="date"
          >Datum - {{ currentDate() }} &nbsp;&nbsp; Uhrzeit -
          {{ localTime }}</strong
        >
        <br />
        <strong class="name">#Siegfried Hamm</strong>
        <strong class="title">&#60;WebDeveloper&#62;</strong>
      </div>
    </div>
    <button v-on:click="OpenWindow" class="button-old">old website</button>

    <br />
    <img class="three-logos" :src="Logo3" />
    &nbsp;
    <img class="vue-logo" :src="Logo" />
    <br />

    <br />
    <br />
    <br />
    <br />
    <div class="eyes">
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
  </div>
</template>

<script>
import Logo3 from "../public/images/logos.png";
import Logo from "./assets/logo.png";

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      Logo: Logo,
      Logo3: Logo3,
      localTime: " ",
    };
  },
  methods: {
    currentDate() {
      const current = new Date();
      const date =
        current.getDate() +
        "." +
        (current.getMonth() + 1) +
        "." +
        current.getFullYear();
      return date;
    },
    showLocaleTime: function () {
      var time = this;
      setInterval(function () {
        time.localTime = new Date().toLocaleTimeString();
      }, 1000);
    },
    OpenWindow: function () {
      window.open("https://portfolio-siggi-ai.herokuapp.com/");
    },
  },
  mounted() {
    this.showLocaleTime();
  },
};
let a = new Date();
let b = a.getDate();
console.log(b);
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

.date {
  font-family: "Bungee Hairline";
  font-size: 20px;
}

.top-box {
  margin: 0 auto;
  width: 586px;
}

.top-content {
  margin: 0 auto;
  width: 690px;
}

.button-old {
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
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
  margin-left: 507px;
  margin-top: 111px;
  animation: fade 8s infinite;
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

.eye2 {
  margin-left: 120px;
}

.eyes {
  margin-left: 993px;
  margin-top: -360px;
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
  border: 1px solid #ffffff;
  border-radius: 2%;
  background-color: rgb(168 238 255);
  margin: 0 auto;
  margin-top: 10px;
  width: 500px;
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
}
</style>
