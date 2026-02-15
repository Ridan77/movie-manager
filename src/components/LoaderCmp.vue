<!-- Loader.vue -->
<template>
  <div class="loader-wrapper">
    <div class="loader" aria-label="Loading" role="status"></div>
  </div>
</template>

<style scoped>
.loader-wrapper{

    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    margin: auto;
}
.loader {
  width: 24px;
  height: 24px;
  border: 3px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  place-self: center;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
