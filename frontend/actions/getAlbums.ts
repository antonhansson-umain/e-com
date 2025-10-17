'use server'

import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumsQuery} from '@/sanity/lib/queries'

type Filters = {
  genres?: string[]
  countries?: string[]
  decades?: number[]
}

export async function getAlbums(filters?: Filters) {
  const genres = filters?.genres ?? null
  const countries = filters?.countries ?? null
  const decades = filters?.decades ?? null
  const {data: albums} = await sanityFetch({
    query: getAlbumsQuery,
    params: {genres, countries, decades},
  })
  return albums
}
