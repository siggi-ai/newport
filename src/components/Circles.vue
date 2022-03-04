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
.circle1 {
  width: 100px;
  height: 100px;
  background-color: #ff0000;
  margin-left: 3em;
  border-radius: 50px;
  opacity: 0.5;
  transition: 0.5s;
}

.circle1:hover {
  width: 200px;
  height: 200px;
  border-radius: 100px;

}

.circle3 {
  width: 100px;
  height: 100px;
  background-color: #1900ff;
  margin-left: 7em;
  margin-top: -100px;
  border-radius: 50px;
  opacity: 0.5;
  transition: 0.5s;
}

.circle3:hover {
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-left: 9em;
}
</style>