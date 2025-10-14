import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumsQuery} from '@/sanity/lib/queries'
import AlbumGrid from '@/app/components/AlbumGrid'

export default async function page() {
  const {data: albums} = await sanityFetch({query: getAlbumsQuery, params: {}})
  return (
      <section>
        <AlbumGrid albums={albums} />
      </section>
  )
}
