import Image from 'next/image'
import Link from 'next/link'
import {urlForImage} from '@/sanity/lib/utils'
import AddToCartButton from './AlbumCard/AddToCartButton'
import type {Album} from '@/types/types'
import {PortableText} from '@portabletext/react'

type ProductDetailsSectionProps = {
  album: Album
}

export default function ProductDetailsSection({album}: ProductDetailsSectionProps) {
  const {title, description, artist, genres, price, picture} = album

  console.log("Genres:", genres)

  return (
    <article className="grid grid-cols-2 gap-8 bg-gray-100">
      <div>
        <div className="p-8 w-full bg-white place-items-center col-span-2 row-start-1 row-span-1 mb-4">
          <Image
            src={urlForImage(picture)?.width(448).height(448).url() ?? '/images/placeholder.webp'}
            alt={`Album art for ${title} by ${artist}`}
            width={256}
            height={256}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-md-header">{title}</h1>
        <h2 className="font-sm-header">{artist}</h2>
  
        <span className="flex gap-2">
          {genres.map((genre) => (
            <Link key={genre} href={`/shop?genres=${genre}`}>
            <button className="p-2 border rounded-lg font-button text-base">
              {genre}
            </button>
            </Link>
          ))}
        </span>
        <div className="font-text">{description && <PortableText value={description} />}</div>
        <div className="flex flex-col">
          Size
          <span>{price}€</span>
        </div>
        <div className="flex flex-col">
          Article no
          <span>{price}€</span>
        </div>
        <div className="flex flex-col">
          Delivery time
          <span>{price}€</span>
        </div>

        <div className="flex flex-col items-end">
          <h3>{price}€</h3>
          <div className="flex">
            <p>quantity</p>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </article>
  )
}

// ctaLink: `/shop?genres=${album.genres[0]}`,
