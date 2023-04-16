export function mergeSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions) {
  const { mutate, delay }: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = mutate ? arr : [...arr]

  const centerIndex = Math.ceil((array.length - 1) / 2)

  const firstPart = array.slice(0, centerIndex)
  const secondPart = array.slice(centerIndex, array.length)

  // console.log({ array, centerIndex, firstPart, secondPart })

  if (firstPart.length > 1) mergeSort(firstPart, cb, { mutate: true, delay })
  if (secondPart.length > 1) mergeSort(secondPart, cb, { mutate: true, delay })

  let firstPartIndex = 0
  let secondPartIndex = 0
 
  for (let i = 0; i < array.length; i++) {
    if (firstPartIndex === firstPart.length) {
      array[i] = secondPart[secondPartIndex]
      secondPartIndex++
      continue
    } else if (secondPartIndex === secondPart.length) {
      array[i] = firstPart[firstPartIndex]
      firstPartIndex++
      continue
    }

    const result = cb(firstPart[firstPartIndex], secondPart[secondPartIndex])
    if (result > 0) {
      array[i] = secondPart[secondPartIndex]
      secondPartIndex++
    } else {
      array[i] = firstPart[firstPartIndex]
      firstPartIndex++
    }
  }

  return array
}