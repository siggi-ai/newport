<template>
  <div>
    <div class="circle3"></div>
  </div>
</template>
<script>
</script>
<style scoped>
body {
  display: flex;
}

.circle3 {
  width: 300px;
  height: 300px;
  /* background-color: #ffd000; */
  background-image: linear-gradient(to left, #ffc107, #ff3800);
  margin-left: 8.5em;
  margin-top: -0px;
  border-radius: 50%;
  transition: 0.5s;
}

.circle3:hover {
  background-color: crimson;
}
</style>