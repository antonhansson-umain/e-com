'use server'

import {GetAlbumByIdResult} from '@/sanity.types'
import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumById} from '@/sanity/lib/queries'

export async function getAlbum(id: string) {
  const {data: album} = await sanityFetch({
    query: getAlbumById,
    params: {id},
  })
  return album as GetAlbumByIdResult
}
