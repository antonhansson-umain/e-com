'use server'

import {sanityFetch} from '@/sanity/lib/live'
import {getCountriesQuery, getGenresQuery} from '@/sanity/lib/queries'

export async function getFilterOptions() {
  const queries = [
    {
      label: 'genres',
      query: getGenresQuery,
    },
    {
      label: 'countries',
      query: getCountriesQuery,
    },
  ]
  const filterOptions = await Promise.all(
    queries.map(async (q) => {
      const {data: filters} = await sanityFetch({
        query: q.query,
        params: {},
      })
      return {
        label: q.label,
        filters,
      }
    }),
  )
  return filterOptions
}
