<template>
  <div>
    <div class="LeftBody">
      
    </div>
    <div class="RightBody">
      
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: { Map, Overview },
  data: function () {
    return {
      apiResponseData: undefined,
    };
  },
  mounted: async function () {
    const url = "https://backendtravelblog.herokuapp.com/api";
    const response = await fetch(url);
    const result = await response.json();
    this.apiResponseData = result;
    console.log(this.apiResponseData);
    this.sortedByDate = this.apiResponseData.sort(
      (a, b) => new Date(a.visiting_date) - new Date(b.visiting_date)
    );
  },
};
</script>

<style scoped>
.LeftBody {
  display: flex;
  margin-top: 85px;
  margin-left: -250px;
  float: left;
  width: 58%;
  height: 500px;
  overflow-y: scroll;
  background: linear-gradient(to bottom, #addc68, #3ccae1);
  border: 3px solid rgb(238, 255, 0);
  overflow-y: scroll;
  scrollbar-color: #ff9b00 #93a4ff;
  scrollbar-width: thin;
  font-size: 17px;
  -moz-transition: border 0.3s ease-in-out;
  box-shadow: none;
  -moz-transition: box-shadow 1s ease-in-out;
}

.RightBody {
  display: flex;
  margin-top: 85px;
  margin-right: 55px;
  float: right;
  width: 50%;
  min-height: 500px;
  background: rgb(0, 124, 255);
  border: 3px solid red;
  height: 500px;
  overflow: hidden;
}

@media screen and (max-width: 1535px) {
  .LeftBody {
    width: 480px;
    margin-left: -185px;
  }
  .RightBody {
    width: 600px;
    margin-left: 20px;
  }
}
@media screen and (max-width: 1300px) {
  .RightBody {
    width: 300px;
  }
}
@media screen and (max-width: 1000px) {
  .RightBody {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .LeftBody {
    width: 480px;
    margin-left: -25px;
  }
}

@media screen and (max-width: 600px) {
  .LeftBody {
    width: 250px;
    margin-left: -0px;
  }
  .RightBody {
    display: none;
  }
}
</style>
