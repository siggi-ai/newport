<template>
  <div>
    <div>
      <strong class="name">#Siegfried Hamm</strong>
      <strong class="title">&#60;WebDeveloper&#62;</strong>
    </div>
    <p class="self-explanation">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am
      Siegfried
    </p>
    <p class="self-explanation">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a
      Web-Developer and
    </p>
    <p class="self-explanation">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a Web-Designer
      since 2021.
    </p>
    <p class="self-explanation">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I used HTML,
      CSS, JavaScript and Vue3
    </p>
    <p class="self-explanation">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to create this
      website.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
a {
  color: white;
}

body {
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(323deg, #a50000, #461359, #003c51, #003b2d);
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
.self-explanation {
  font-family: "Julius Sans One", sans-serif;
  color: #61bdff;
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
  margin-top: 20px;
}

.title {
  display: flex;
  font-family: "Bungee Hairline";
  font-weight: bolder;
  font-size: 56px;
  color: #00ffdc;
  width: 102%;
  margin-top: -72px;
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 1.5s steps(15, end);
  margin-top: -40px;
}

.first {
  display: flex;
  font-family: "Bungee Hairline";
  font-size: 59px;
  color: #00ffdc;
  width: 100%;
  margin-top: -72px;
  overflow: hidden;
  white-space: nowrap;
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
    font-size: 32px;
  }

  .title {
    font-size: 32px;
    width: 101%;
    margin-top: -10px;
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
  .bored {
    width: 305px;
  }
  .sugg {
    width: 445px;
  }
  .sugg-button {
    margin-left: -196px;
  }
  .sugg-box {
    width: 260px;
  }
  .text {
    width: 450px;
  }
  .self-explanation {
    margin-left: -23px;
    font-size: 15px;
  }
}
</style>
