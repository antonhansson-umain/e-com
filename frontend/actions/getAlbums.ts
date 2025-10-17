'use server'

import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumsQuery} from '@/sanity/lib/queries'

export async function getAlbums(
  {
    genres,
    countries,
    decades,
  }: {
    genres?: string[] | null
    countries?: string[]
    decades?: number[]
  } = {
    genres: null,
    countries: [],
    decades: [],
  },
) {
  const {data: albums} = await sanityFetch({
    query: getAlbumsQuery,
    params: {genres, countries, decades},
  })
  return albums
}
