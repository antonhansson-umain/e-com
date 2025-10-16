import AlbumGrid from '../AlbumGrid'
import Button from '../Button'
import {GetAlbumsQueryResult} from '@/sanity.types'

interface SelectedAlbumsSectionProps {
  albums: GetAlbumsQueryResult
  title: string
  description: string
  cta: string
  ctaHref: string
}

export default function SelectedAlbumsSection({
  albums,
  title,
  description,
  cta,
  ctaHref,
}: SelectedAlbumsSectionProps) {
  return (
    <section>
      <h2 className="font-sm-header">{title}</h2>
      <div className="grid md:grid-cols-[auto_1fr] gap-8">
        <aside className="flex flex-col gap-4">
          <p className="font-text">{description}</p>
          <div className="h-full flex items-center">
            <Button variant="primary" href={ctaHref}>
              {cta}
            </Button>
          </div>
        </aside>
        <AlbumGrid albums={albums.slice(0, 2)} className="sm:grid-cols-2" />
      </div>
    </section>
  )
}
