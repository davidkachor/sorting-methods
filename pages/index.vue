<template>
  <div>
    hello
  </div>
</template>

<script setup lang="ts">
const arr = ref([0, 5, -1, 3, 10, 2, 1, 6, 4])
const lettersArr = ref(['f', 'e', 'a', 'd', 'c', 'b'])

console.log({ 
  bubble: bubbleSort(arr.value, (b, a) => a - b), 
  merge: mergeSort(arr.value, (a, b) => a - b),
  mergeLetters: mergeSort(lettersArr.value, (a, b) => b.localeCompare(a))
})

</script>