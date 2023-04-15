export default async function mergeSort<T> (arr: T[], cb: TSortCallback<T>, options?: ISortOptions ) {
  const initOptions: ISortOptions = {
    mutate: options?.mutate ?? false,
    delay: options?.delay ?? 0
  }

  const array = initOptions.mutate ? arr : [...arr]

  function divideArr(arrToSplit: T[]): T[] {
    if (arrToSplit.length === 1) return arrToSplit

    const centerIndex = Math.floor((arrToSplit.length - 1) / 2)

    const firtsPart = arrToSplit.slice(0, centerIndex)
    const secondPart = arrToSplit.slice(centerIndex + 1, arrToSplit.length - 1)

    return [...divideArr(firtsPart), ...divideArr(secondPart)]
  }

  console.log('sorting')
}