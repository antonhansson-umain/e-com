import AlbumCard from '../AlbumCard'
import SelectedProductsIntro from './SelectedProductsIntro'
import {GetAlbumsQueryResult} from '@/sanity.types'

interface SelectedProductsSectionProps {
  albums: GetAlbumsQueryResult
}

export default function SelectedProductsSection({albums}: SelectedProductsSectionProps) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-3 gap-[1rem] md:gap-[2rem]">
      <SelectedProductsIntro
        sectionTitle="New in"
        sectionDescription="Discover the latest releases"
        label="Shop all"
      />

      {/* map the list of 2 first albums for homepage, use props for other queries (will be displayed depending on filters) */}
      {albums.slice(0, 2).map((album) => (
        <div key={album._id}>
          <AlbumCard album={album} />
        </div>
      ))}
    </section>
  )
}

// slice(0, 2)
