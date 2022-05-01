<template>
  <div>
    <div>
      <strong class="name">#Siegfried Hamm</strong>
      <strong class="title">&#60;WebDeveloper&#62;</strong>
    </div>
    <Circles />
    <Eyes class="eyes" />
    <Eyes class="eye2" />
  </div>
</template>

<script>
import Circles from "../components/Circles.vue";
import Eyes from "../components/Eyes.vue";
export default {
  name: "Home",
  components: { Circles, Eyes },
  data: function () {
    return {
      localTime: " ",
    };
  },
};
</script>

<style>
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
  font-size: 56px;
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
  margin-left: 172px;
  margin-top: -100px;
}

.eyes {
  margin-left: 300px;
  margin-top: -235px;
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
    width: 102%;
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
