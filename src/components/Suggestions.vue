<template>
  <div>
    <div>
      <button v-on:click="getSugg" class="sugg-button">suggestions</button>
    </div>
    <br />
    <div class="sugg-box">
      {{ sugg.activity }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BlogList",
  data() {
    return {
      sugg: [],
    };
  },
  created() {
    this.getSugg();
  },
  methods: {
    getSugg() {
      axios
        .get("https://www.boredapi.com/api/activity")
        .then((response) => {
          console.log("response: ", response.data);
          this.sugg = response.data;
        })
        .catch((error) => {
          console.log("error; ", error);
        });
    },
  },
};
</script>
<style>
.sugg-box {
  border: 1px solid blue;
  padding: 25px;
}
.sugg-button {
  height: 47px;
  width: 120px;
  background-color: #000000;
  box-shadow: 5px 4px #636363;
  border-radius: 10px;
  font-family: "Bungee Hairline";
  font-weight: bold;
  color:aqua;
}
</style>