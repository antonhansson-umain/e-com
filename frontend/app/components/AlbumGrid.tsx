import type {Album} from '@/types/types'
import AlbumCard from './AlbumCard'
import {GetAlbumsQueryResult} from '@/sanity.types'

interface AlbumGridProps {
  albums: GetAlbumsQueryResult
}

export default function AlbumGrid({albums}: AlbumGridProps) {
  return (
    <section className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-[1rem] md:gap-[2rem]">
      {albums.map((album) => (
        <div key={album._id}>
          <AlbumCard album={album} />
        </div>
      ))}
    </section>
  )
}
