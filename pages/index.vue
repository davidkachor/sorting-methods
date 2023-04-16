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
  bubble: bubbleSort(arr.value, (a, b) => a - b), 
  merge: mergeSort(arr.value, (a, b) => a - b),
  selection: selectionSort(arr.value, (a, b) => a - b),
  insertion: insertionSort(arr.value, (a, b) => a - b),
  quickSort: quickSort(arr.value, (a, b) => a - b),
  // quickSortLetters: quickSort(lettersArr.value, (a, b) => b.localeCompare(a)),
  defaultSort: [...arr.value].sort((a, b) => a - b)
})
})
</script>