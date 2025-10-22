import { getAlbums } from '@/actions/getAlbums'
import AlbumCard from '../AlbumCard'
import Button from '../Button'
import type {SelectedAlbumsSectionType, Album} from '@/types/types'

interface SelectedAlbumsSectionProps {
  block:
    | SelectedAlbumsSectionType
    | {
        sectionTitle: string
        sectionDescription: string
        ctaText: string
        ctaLink: string
        title: string
      }
  albums: Album[]
}

export default function SelectedAlbumsSection({block, albums}: SelectedAlbumsSectionProps) {
  const {title, sectionDescription, ctaText, ctaLink} = block
  
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-none py-8 gap-[1rem] md:gap-[2rem]">
      <aside className="grid grid-rows-[1fr_0.5fr] gap-4 lg:gap-0">
        <div>
          <h2 className="font-sm-header">{title}</h2>
          <p className="font-text">{sectionDescription}</p>
        </div>
        <Button variant="primary" href={ctaLink} className="justify-self-start">
          {ctaText}
        </Button>
      </aside>
      {albums.slice(0, 2).map((album) => (
        <div key={album._id} className="mt-0 lg:mt-14">
          <AlbumCard album={album} />
        </div>
      ))}
    </section>
  )
}
