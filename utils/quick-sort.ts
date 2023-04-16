export function quickSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions) {
  const { mutate, delay }: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = mutate ? arr : [...arr]

  let pivot = array.length - 1

  for (let i = -1, j = 0; j <= pivot; j++) {
    if (j === pivot) {
      i++
      const temp = array[i]
      array[i] = array[pivot]
      array[pivot] = temp
      pivot = i
      break
    }

    const result = cb(array[j], array[pivot])
    if (result < 0) {
      i++
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  const firstPart = array.slice(0, pivot)
  const secondPart = array.slice(pivot + 1, array.length)

  if (firstPart.length > 1) quickSort(firstPart, cb, { mutate: true, delay })
  if (secondPart.length > 1) quickSort(secondPart, cb, { mutate: true, delay })

  array.splice(0, firstPart.length, ...firstPart)
  array.splice(pivot + 1, secondPart.length, ...secondPart)

  return array
}