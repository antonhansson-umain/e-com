import Image from 'next/image'
import {Plus} from 'lucide-react'

// move to types file
export interface Album {
  _id: string
  title: string
  artist: string
  image: string
  price: number
}

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({album}: AlbumCardProps) {
  return (
    <article>
      <div className="flex bg-blue-100 w-full items-center justify-center p-8">
        <div className="h-[16rem] w-[16rem] relative">
          <Image src={album.image} alt={album.title} fill />
        </div>
      </div>
      <footer className="flex items-start justify-between mt-4 --font-sans text-xl">
        <div>
          <p className="uppercase">{album.title}</p>
          <p className="capitalize">{album.artist}</p>
          <p>{album.price}
            <span className="ml-1 text-base align-baseline text-[90%]">€</span>
          </p>
        </div>
        <button
          aria-label={`Add ${album.title} by ${album.artist} to cart`}
          className="p-2 hover:text-blue-600 transition"
        >
          <Plus size={30} />
        </button>
      </footer>
    </article>
  )
}
