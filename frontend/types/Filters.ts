export type Filters = {
  genres?: string[] | null
  countries?: string[] | null
  tags?: string[] | null
  sort?: string[] | null
}

export const filterKeys: (keyof Filters)[] = ['genres', 'countries', 'tags']
