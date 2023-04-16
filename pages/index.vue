<template>
  <div>
    hello
  </div>
</template>

<script setup lang="ts">
const arr = ref([0, 5, -1, 3, 10, 2, 1, 6, 4])
const lettersArr = ref(['f', 'e', 'a', 'd', 'c', 'b'])

onMounted(() => {
  console.log({ 
  bubble: bubbleSort(arr.value, (b, a) => a - b), 
  merge: mergeSort(arr.value, (b, a) => a - b),
  selection: selectionSort(arr.value, (a, b) => a - b),
  insertion: insertionSort(arr.value, (a, b) => b - a),
  insertionLetters: insertionSort(lettersArr.value, (a, b) => a.localeCompare(b))
})
})
</script>