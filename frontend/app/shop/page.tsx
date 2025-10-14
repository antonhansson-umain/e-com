import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumsQuery} from '@/sanity/lib/queries'

export default async function page() {
  const {data: albums} = await sanityFetch({query: getAlbumsQuery, params: {}})
  return (
    <>
      {albums.map((album) => (
        <li key={album._id}>{album.title}</li>
      ))}
    </>
  )
}
