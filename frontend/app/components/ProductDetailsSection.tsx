import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from './AlbumCard/AddToCartButton'
import {PortableText} from '@portabletext/react'
import {GetAlbumByIdResult} from '@/sanity.types'
import QuantityCounter from './QuantityCounter'

type ProductDetailsSectionProps = {
  album: NonNullable<GetAlbumByIdResult>
}

export default function ProductDetailsSection({album}: ProductDetailsSectionProps) {
  const {title, description, artist, genres, price, image} = album

  return (
    <article className="grid grid-cols-2 items-center gap-4 py-8 bg-gray-100">
      <div>
        <figure className="p-8 w-full place-items-center">
          <Image
            src={image ?? '/images/placeholder.webp'}
            alt={`Album art for ${title} by ${artist}`}
            width={450}
            height={450}
            className="object-cover"
            priority
          />
        </figure>
      </div>

      <section className="flex flex-col gap-4">
        <h1 className="font-md-header">{title}</h1>
        <h2 className="font-sm-header">{artist}</h2>

        <nav className="flex gap-2">
          {genres.map((genre) => (
            <Link key={genre} href={`/shop?genres=${genre}`}>
              <button className="p-2 border rounded-lg font-button text-base">{genre}</button>
            </Link>
          ))}
        </nav>
        <section className="font-text">
          {description && <PortableText value={description} />}
        </section>

        <ul className="flex flex-col gap-2">
          <li className="flex flex-col">
            Size
            <span>{price}€</span>
          </li>
          <li className="flex flex-col">
            Article no
            <span>{price}€</span>
          </li>
          <li className="flex flex-col">
            Delivery time
            <span>{price}€</span>
          </li>
        </ul>

        <footer className="flex flex-col items-end">
          <h3 className="font-md-header">
            <span className="text-[80%]">$</span>
            {price}
          </h3>
          <div className="flex">
            {/* <QuantityCounter albumId={album._id} /> */}
            <AddToCartButton ariaLabel="Add to cart" albumId={album._id} variant="secondary"/>
          </div>
        </footer>
      </section>
    </article>
  )
}

// ctaLink: `/shop?genres=${album.genres[0]}`,
