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
  width: 135px;
  height: 23px;
  background-image: linear-gradient(rgb(116 1 0), #ad0000);
  margin-left: 13.5em;
  margin-top: -38px;
  border-radius: 50%;
  transition: 0.5s;
  animation: open 1.3s ease-in-out infinite;
  animation-direction: alternate;
}
@keyframes open {
  0% {
    height: 23px;
    margin-top: -38px;
  }
  100% {
    height: 10px;
    margin-top: -30px;
  }
}
</style>