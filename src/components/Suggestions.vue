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
  border: 2px solid #00d7ff;
  padding: 25px;
  color: white;
  color: #fffc00;
  font-family: "Julius Sans One";
  border-radius: 9px;
}
.sugg-button {
  height: 53px;
  width: 182px;
  background-color: #000000;
  box-shadow: 5px 4px #636363;
  border-radius: 10px;
  font-family: "Julius Sans One";
  font-weight: bold;
  color: aqua;
  font-size: 20px;
}
</style>