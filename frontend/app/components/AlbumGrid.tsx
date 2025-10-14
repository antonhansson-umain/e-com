import type {Album} from './AlbumCard'
import AlbumCard from './AlbumCard'

interface AlbumGridProps {
  albums: Album[]
}

export default function AlbumGrid({albums}: AlbumGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] md:gap-[2rem]">
      {albums.map((album) => (
        <div key={album._id}>
          <AlbumCard album={album} />
        </div>
      ))}
    </section>
  )
}
