import AlbumCard from '../AlbumCard'
import SelectedAlbumsIntro from './SelectedAlbumsIntro'
import {GetAlbumsQueryResult} from '@/sanity.types'

interface SelectedAlbumsSectionProps {
  albums: GetAlbumsQueryResult
}

export default function SelectedAlbumsSection({albums}: SelectedAlbumsSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-none py-8 gap-[1rem] md:gap-[2rem]">
      <SelectedAlbumsIntro
        sectionTitle="New in"
        sectionDescription="Discover the latest releases"
        label="Shop all"
      />

      {albums.slice(0, 2).map((album) => (
        <div key={album._id} className="mt-0 lg:mt-14">
          <AlbumCard album={album} />
        </div>
      ))}
    </section>
  )
}
