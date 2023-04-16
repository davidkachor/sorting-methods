export function bubbleSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions): T[] {
  const initOptions: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = initOptions.mutate ? arr : [...arr]

  for (let iteration = 1; iteration <= array.length - 2; iteration++) {
    for (let i = 0, j = 1; j < array.length; i++, j++ ) {
    const result = cb(array[i], array[j])
    if (result > 0) {
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    }
  }

  return array
}