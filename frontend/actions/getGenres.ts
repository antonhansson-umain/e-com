'use server'

import {sanityFetch} from '@/sanity/lib/live'
import {getGenresQuery} from '@/sanity/lib/queries'

export async function getGenres() {
  const {data: genres} = await sanityFetch({
    query: getGenresQuery,
    params: {},
  })
  return genres
}
