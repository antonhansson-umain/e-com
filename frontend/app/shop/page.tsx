import AlbumGrid from '@/app/components/AlbumGrid'
import {getAlbums} from '@/actions/getAlbums'

export default async function page() {
  const albums = await getAlbums()
  // {genres: ['Emo']}
  // {countries: ['US']}
  // {countries: ['US'], genres: ['Emo']}
  // {countries: ['US', 'AU'], genres: ['Indie Rock']}
  return (
    <section>
      <AlbumGrid albums={albums} />
    </section>
  )
}
