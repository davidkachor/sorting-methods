<template>
  <div>
    hello
  </div>
</template>

<script setup lang="ts">
const arr = ref([0, 5, -1, 3, 10, 2, 1, 6, 4])

console.log(bubbleSort(arr.value, (b, a) => a - b))



</script>