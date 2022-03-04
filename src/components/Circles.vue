<template>
  <div>
    <div class="circle1"></div>
    <div class="circle3"></div>
  </div>
</template>
<style scoped>
body {
    display: flex;
}

.circle3 {
  width: 300px;
  height: 300px;
  background-color: #1900ff;
  margin-left: 0em;
  margin-top: 0px;
  border-radius: 50%;
  opacity: 0.5;
  transition: 0.5s;
}

.circle3:hover {
  width: 310px;
  height: 310px;
  border-radius: 50%;
  margin-top: -5px;
  margin-left: -5px;
}
</style>