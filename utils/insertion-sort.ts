export function insertionSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions) {
  const { mutate }: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = mutate ? arr : [...arr]

  for (let iteration = 0; iteration < array.length; iteration++) {
    let currentIndex = iteration

    for (let comparativeIndex = iteration - 1; comparativeIndex >= 0; comparativeIndex--) {
      const result = cb(array[comparativeIndex], array[currentIndex])

      if (result > 0) {
        const temp = array[currentIndex]
        array[currentIndex] = array[comparativeIndex]
        array[comparativeIndex] = temp
        currentIndex = comparativeIndex
      }
    }
  }

  return array
}