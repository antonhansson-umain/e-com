export type Filters = {
  genres?: string[] | null
  countries?: string[] | null
}

export const filterKeys: (keyof Filters)[] = ['genres', 'countries']
