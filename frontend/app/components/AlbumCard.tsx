import Image from 'next/image'
import Link from 'next/link'
import {Plus} from 'lucide-react'
import type { Album } from '@/types/types'

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({album}: AlbumCardProps) {
  return (
    <article>
      <Link
        href={`/shop/${album._id}`}
        className="flex bg-white w-full items-center justify-center p-8"
      >
        <div className="h-[16rem] w-[16rem] relative">
          <Image src={album.image ?? "/images/placeholder.png"} alt={album.title} fill sizes="16rem"/>
        </div>
      </Link>
      <footer className="flex items-start justify-between mt-4 --font-sans text-xl">
        <div>
          <p className="uppercase">{album.title}</p>
          <p className="capitalize">{album.artist}</p>
          <p>
            {album.price}
            <span className="ml-1 text-base align-baseline text-[90%]">€</span>
          </p>
        </div>
        <button
          aria-label={`Add ${album.title} by ${album.artist} to cart`}
          className="p-2 hover:text-(--color-cherry) transition cursor-pointer"
        >
          <Plus size={30} />
        </button>
      </footer>
    </article>
  )
}
