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