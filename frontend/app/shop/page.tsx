import {sanityFetch} from '@/sanity/lib/live'
import {getAlbumsQuery} from '@/sanity/lib/queries'
import AlbumCard from '../components/AlbumCard'

export default async function page() {
  const {data: albums} = await sanityFetch({query: getAlbumsQuery, params: {}})
  return (
    <ul>
      {albums.map((album) => (
        <li key={album._id}>
          <AlbumCard
            album={album}
          />
        </li>
      ))}
    </ul>
  )
}
