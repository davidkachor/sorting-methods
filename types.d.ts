type TSortCallback<T> = (a: T, b: T) => number

interface ISortOptions {
  mutate?: boolean
  delay?: number
}