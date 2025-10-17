import AlbumGrid from '@/app/components/AlbumGrid'
import {getAlbums} from '@/actions/getAlbums'
import Filter from '../components/Filter'

export default async function page() {
  const albums = await getAlbums()
  return (
    <section className="grid gap-8 relative">
      <div className="grid gap-4">
        <h1 className="text-5xl uppercase">All Records</h1>
        <p className="font-mono">All records that exists in our store.</p>
      </div>
      <Filter />
      <AlbumGrid albums={albums} />
    </section>
  )
}
