<template>
  <div>
    <div class="listbox">
      <div>
        <button v-on:click="OpenWindowPoke" class="website-buttons">
          Pokédex
        </button>
        <button v-on:click="OpenWindowTravel" class="website-buttons">
          Travel Blog
        </button>
      </div>
      <div>
        <button v-on:click="OpenWindowMusic" class="website-buttons">
          music website
        </button>
      </div>
      <div>
        <button v-on:click="OpenWindowKorean" class="website-buttons">
          koreanisch
        </button>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  name: "Websites",
  methods: {
    OpenWindowTravel: function () {
      window.open("https://laughing-minsky-d5d277.netlify.app/");
    },
    OpenWindowPoke: function () {
      window.open("https://reverent-hawking-70f389.netlify.app/");
    },
    OpenWindowMusic: function () {
      window.open("https://effulgent-queijadas-19f971.netlify.app/");
    },
    OpenWindowKorean: function () {
      window.open("https://lucent-duckanoo-46e6f6.netlify.app/");
    },
  },
};
</script>
<style scoped>
.website-buttons {
  width: 250px;
  height: 80px;
  color: white;
  font-family: "Julius Sans One";
  font-size: 30px;
  background: repeating-linear-gradient(
    172deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
  border: 3px solid #431072;
  border-radius: 8px;
  box-shadow: 5px 4px #000000;
  margin-bottom: 10px;
  margin-left: 0px;
}
.listbox {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 2%;
  color: rgb(168 238 255);
  margin: 0 auto;
  margin-top: 10px;
  width: 250px;
  padding: 20px;
  font-family: "Julius Sans One", sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -10px;
  background-color: #65009a;
  text-align: center;
  margin-left: 140px;
}
.button-old {
  margin-top: 50px;
  width: 215px;
  border-radius: 4px;
  font-family: "Bungee Hairline";
  font-size: 20px;
  background-color: #6b7978;
  color: black;
  font-weight: bold;
  border: 1px solid black;
}
@media screen and (max-width: 680px) {
  .listbox {
    margin-left: 20px;
    width: 250px;
  }
  .website-buttons {
    width: 200px;
    height: 80px;
    color: #fff;
    font-family: Julius Sans One;
    font-size: 22px;
    background: repeating-linear-gradient(
      172deg,
      #606dbc,
      #606dbc 10px,
      #465298 0,
      #465298 20px
    );
    border: 3px solid #431072;
    border-radius: 8px;
    box-shadow: 5px 4px #000;
    margin-bottom: 10px;
    margin-left: 1px;
  }
}
</style>
