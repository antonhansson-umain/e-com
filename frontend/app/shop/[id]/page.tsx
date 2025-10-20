import {getAlbum} from '@/actions/getAlbum'
import {getAlbums} from '@/actions/getAlbums'
import SelectedAlbumsSection from '@/app/components/SelectedAlbumsSection'
import {notFound} from 'next/navigation'

export default async function page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params
  const album = await getAlbum(id)
  if (!album) return notFound()
  const relatedAlbums = await getAlbums({genres: album.genres})
  return (
    <div>
      <h1>{album?.title}</h1>
    </div>
  )
}
