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
        <router-link to="/about" class="sugg">about</router-link>
        <br />
        <strong class="name">#Siegfried Hamm</strong>
        <strong class="title">&#60;WebDeveloper&#62;</strong>
      </div>
    </div>
    <div class="sugg">
      <h1 class="bored">already bored?</h1>
      <Suggestions />
      <br />
      <h1>OR: take a look at my WEBPAGES!</h1>
    </div>
  </div>
</template>

<script>
import Suggestions from "@/components/Suggestions.vue";

export default {
  name: "Home",
  components: {
    Suggestions,
  },
  data: function () {
    return {
      localTime: " ",
      tabActive: "Tab1",
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
</script>

<style>
.sugg {
  text-align: center;
  margin-left: 0 auto;
  padding: 30px;
  font-size: 1rem;
  margin: 0 auto;
  width: 500px;
  font-family: "Courier New", Courier, monospace;
}
.bored {
  font-family: "Bungee Hairline";
  font-size: 20px;
  margin-bottom: -10px;
  margin-top: -25px;
}
a {
  color: white;
}

body {
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
  width: 136px;
  border-radius: 4px;
  margin-left: 57px;
  font-family: "Bungee Hairline";
  background-color: #6b7978;
  color: black;
  font-weight: bold;
}

.vue-logo {
  width: auto;
  height: 65px;
  margin-top: 120px;
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

.all-logos {
  display: flex;
  margin-top: -275px;
  margin-left: 210px;
}

.name {
  font-family: "Bungee Hairline";
  font-size: 58px;
  color: #61bdff;
  line-height: 150%;
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
  margin-top: -45px;
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
  color: #adff00;
  list-style: square;
}

.button-list {
  width: 200px;
  margin-left: 45px;
  font-family: "Bungee Hairline";
  font-size: 20px;
  font-weight: bold;
  color: #adff00;
  list-style: square;
}

.listbox {
  display: flex;
  flex-direction: column;
  border: 1px solid #ffffff;
  border-radius: 2%;
  color: rgb(168 238 255);
  margin: 0 auto;
  margin-top: 10px;
  width: 250px;
  padding: 20px;
  font-family: "Bungee Hairline";
  font-weight: bold;
  font-size: 30px;
  margin-top: -10px;
}

.circles {
  margin-left: 200px;
}

.circle {
  margin-left: 700px;
}

.tab {
  color: rgb(115, 115, 226);
  width: 50px;
  height: 50px;
  background-color: aqua;
  font-size: 30px;
}
.tab-active {
  color: rgb(226, 115, 202);
}

.main-buttons {
  display: flex;
  margin: 0 auto;
  width: 20px;
  float: left;
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
