<template>
  <div>
    <div>
      <button v-on:click="getSugg" class="sugg-button"> load suggestions</button>
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
  width: 97px;
  background-color: #59be00;
  box-shadow: 5px 5px #888888;
}
</style>