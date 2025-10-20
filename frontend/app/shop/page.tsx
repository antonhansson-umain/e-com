import AlbumGrid from '@/app/components/AlbumGrid'
import {getAlbums} from '@/actions/getAlbums'
import Filter from '../components/Filter'
import {formatFilters} from '@/lib/formatFilters'

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>
}) {
  const rawFilters = await searchParams
  const filters = formatFilters(rawFilters)
  const albums = await getAlbums(filters)
  return (
    <section className="grid gap-8 relative">
      <div className="grid gap-4">
        <h1 className="text-5xl uppercase">All Records</h1>
        <p className="font-mono">All records that exists in our store.</p>
      </div>
      <Filter filters={filters} />
      <AlbumGrid albums={albums} />
    </section>
  )
}
