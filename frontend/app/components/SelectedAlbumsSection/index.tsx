import AlbumCard from '../AlbumCard'
import SelectedAlbumsIntro from './SelectedAlbumsIntro'
import type { SelectedAlbumsSectionType, Album } from '@/types/types'

interface SelectedAlbumsSectionProps {
  block: SelectedAlbumsSectionType;
  albums: Album[];
}

export default function SelectedAlbumsSection({block, albums}: SelectedAlbumsSectionProps) {
  const {sectionTitle, sectionDescription, ctaText} = block
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-none py-8 gap-[1rem] md:gap-[2rem]">
      <SelectedAlbumsIntro
        sectionTitle={sectionTitle}
        sectionDescription={sectionDescription}
        label={ctaText}
      />

{/* homepage: albums query: first 2 results
product page: specific genre query first 2 results
campaing pages: specific tag query first 2 results */}

      {albums.slice(0, 2).map((album) => (
        <div key={album._id} className="mt-0 lg:mt-14">
          <AlbumCard album={album} />
        </div>
      ))} 
    </section>
  )
}
