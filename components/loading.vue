<template>
<div class="loading-page" v-if="loading">
  <div class="loading-spin"></div><br>
  <div class="loading-progress">{{progress}}%</div>
</div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    progress:0,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    increase(num){
      this.progress=num
    }
  }
}
</script>

<style scoped>
.loading-page{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading-progress{
  text-align: center;
}
.loading-spin {
  width: 50px;
  height: 50px;
  border: 5px solid #000;
  border-right: 5px solid transparent;
  border-radius: 30px;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
  }
  50% {
  }
  100% {
    transform: rotate(360deg);
    transform-origin: 50% 50%;
  }
}
</style>