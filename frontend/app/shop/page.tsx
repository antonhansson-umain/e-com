import AlbumGrid from '@/app/components/AlbumGrid'
import {getAlbums} from '@/actions/getAlbums'

export default async function page() {
  const albums = await getAlbums()
  // {genres: ['Emo']}
  // {countries: ['US']}
  return (
    <section>
      <AlbumGrid albums={albums} />
    </section>
  )
}
