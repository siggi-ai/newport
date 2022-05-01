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
}
</script>