import Image from 'next/image'
import Link from 'next/link'
import type {Album} from '@/types/types'
import AddToCartButton from './AddToCartButton'

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({album}: AlbumCardProps) {
  return (
    <div className="sm:hover:bg-white/40 transition-colors sm:p-2">
      <article className="w-full grid grid-cols-[1fr_auto] grid-rows-[1fr_auto]">
        <Link
          href={`/shop/${album._id}`}
          className="grid grid-cols-subgrid grid-rows-subgrid row-span-2 col-span-2 col-start-1 row-start-1 "
        >
          <div className="p-8 w-full bg-white place-items-center col-span-2 row-start-1 row-span-1 mb-4">
            <Image
              src={album.image ?? '/images/placeholder.png'}
              alt={album.title}
              width={256}
              height={256}
            />
          </div>
          <footer className="col-start-1 row-start-2 row-span-2 pb-4">
            <h3 className="uppercase">{album.title}</h3>
            <div className="capitalize">{album.artist}</div>
            <div className="row-start-3">${album.price}</div>
          </footer>
        </Link>
        <div className="col-start-2 row-start-2 row-span-1">
          <AddToCartButton
            albumId={album._id}
            ariaLabel={`Add ${album.title} by ${album.artist} to cart`}
          />
        </div>
      </article>
    </div>
  )
}
