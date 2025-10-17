'use server'

import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumsQuery} from '@/sanity/lib/queries'
import {Filters} from '@/types/Filters'

export async function getAlbums(filters: Filters) {
  const genres = filters?.genres ?? null
  const countries = filters?.countries ?? null
  const {data: albums} = await sanityFetch({
    query: getAlbumsQuery,
    params: {genres, countries},
  })
  return albums
}
