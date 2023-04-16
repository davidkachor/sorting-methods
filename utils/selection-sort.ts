export function selectionSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions) {
  const { mutate }: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = mutate ? arr : [...arr]

  for (let iteration = 0; iteration < array.length - 1; iteration++) {
    let currentMinimum = iteration
    for (let currentIndex = iteration + 1; currentIndex < array.length; currentIndex++) {
      const result = cb(array[currentMinimum], array[currentIndex])

      if (result > 0) {
        currentMinimum = currentIndex
      }
    }
    const temp = array[iteration]
    array[iteration] = array[currentMinimum]
    array[currentMinimum] = temp
  }

  return array
}