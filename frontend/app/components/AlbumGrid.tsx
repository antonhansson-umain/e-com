import {cn} from '@/lib/cn'
import AlbumCard from './AlbumCard'
import {GetAlbumsQueryResult} from '@/sanity.types'

interface AlbumGridProps {
  albums: GetAlbumsQueryResult
  className?: string
}

export default function AlbumGrid({albums, className}: AlbumGridProps) {
  return (
    <section
      className={cn(
        'grid sm:grid-cols-[repeat(auto-fit,minmax(min(30rem,100%),1fr))] gap-4 md:gap-8',
        className,
      )}
    >
      {albums.map((album) => (
        <AlbumCard key={album._id} album={album} />
      ))}
    </section>
  )
}
