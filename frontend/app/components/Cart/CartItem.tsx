import {GetAlbumByIdResult} from '@/sanity.types'
import Image from 'next/image'
import QuantityCounter from '../QuantityCounter'
import CartQuantityCounter from '../CartQuantityCounter'
import {X} from 'lucide-react'
import Link from 'next/link'
import {useSideBarContext} from '@/contexts/sidebar-context'
import {useCartStore} from '@/hooks/useCartStore'

export default function CartItem({
  album,
}: {
  album: Exclude<GetAlbumByIdResult, null> & {quantity: number}
}) {
  const {setIsOpen} = useSideBarContext()
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return (
    <li className="grid grid-cols-[1fr_2fr_auto] grid-rows-[auto_auto_auto_auto] gap-x-2 p-2 hover:bg-white/50 transition-colors group">
      <Link
        href={`/shop/${album._id}`}
        className="grid grid-cols-subgrid grid-rows-subgrid col-start-1 col-span-2 row-span-4 row-start-1 "
        onClick={() => setIsOpen(false)}
        aria-label={`Go to ${album.title} by ${album.artist}`}
      >
        <div className="bg-white px-4 place-items-center grid grid-cols-subgrid grid-rows-subgrid col-start-1 row-span-4">
          <Image
            src={album?.image ?? 'images/placeholder.webp'}
            alt={`Album cover for ${album.title} by ${album.artist}`}
            width={96}
            height={120}
            className="row-span-4"
          />
        </div>
        <div className="grid grid-rows-subgrid grid-cols-subgrid row-start-1 row-span-4 col-start-2 w-full">
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 col-start-1">
            <div className="uppercase truncate text-xl">{album.title}</div>
          </div>
          <div className="grid grid-rows-subgrid grid-cols-subgrid row-start-2 row-span-1 col-start-2 truncate">
            {album.artist}
          </div>
          <span className="grid grid-rows-subgrid grid-cols-subgrid row-start-3 row-span-1 col-start-2 text-xl mb-2">
            ${album.price}
          </span>
        </div>
      </Link>
      <div className="col-start-2 row-start-4 w-full">
      <CartQuantityCounter albumId={album._id}/>
      </div>
      <button onClick={() => removeFromCart(album._id)}>
        <X />
      </button>
    </li>
  )
}
