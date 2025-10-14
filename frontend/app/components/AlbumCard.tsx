import Image from 'next/image'
import {Plus} from 'lucide-react'

// move to types file
export interface Album {
  _id: string,
  title: string,
  artist: string,
  image: string,
  price: number
}

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({album}: AlbumCardProps) {
  return (
    <div>
      <div className="flex bg-blue-100 w-full items-center justify-center p-8">
        <div className="h-[16rem] w-[16rem] relative">
            <Image src={album.image} alt={album.title} fill/>
        </div>
      </div>
      <div className="flex items-start justify-between --font-sans text-xl">
        <div>
          <p className="uppercase">{album.title}</p>
          <p className="capitalize">{album.artist}</p>
          <p>{album.price}€</p>
        </div>
        <button>
          <Plus size={30}/>
        </button>
      </div>
    </div>
  )
}
