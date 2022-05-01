<template>
  <div>
    <div class="listbox">
      <a href="https://laughing-minsky-d5d277.netlify.app/">Travel Blog</a>
      <a href="https://reverent-hawking-70f389.netlify.app/">Pokédex</a>
      <button v-on:click="OpenWindow" class="button-old">my old website</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Websites",
  OpenWindow: function () {
    window.open("https://portfolio-siggi-ai.herokuapp.com/");
  },
};
</script>
<style scoped>
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
</style>