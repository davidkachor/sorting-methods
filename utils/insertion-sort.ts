export function insertionSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions) {
  const { mutate }: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = mutate ? arr : [...arr]

  for (let iteration = 0; iteration < array.length; iteration++) {
    let currentIndex = iteration
    for (let i = iteration - 1; i >= 0; i--) {
      const result = cb(array[i], array[currentIndex])
      if (result > 0) {
        const temp = array[currentIndex]
        array[currentIndex] = array[i]
        array[i] = temp
        currentIndex = i
      }
    }
  }

  return array
}