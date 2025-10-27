import {getAlbum} from '@/actions/getAlbum'
import {getAlbums} from '@/actions/getAlbums'
import ProductDetailsSection from '@/app/components/ProductDetailsSection'
import SelectedAlbumsSection from '@/app/components/SelectedAlbumsSection'
import {notFound} from 'next/navigation'

export default async function page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params
  const album = await getAlbum(id)
  if (!album) return notFound()
  const relatedAlbums = await getAlbums({genres: album.genres})
  const block = {
    title: 'You may also like...',
    sectionDescription: "If you like this, you'll love these.",
    ctaText: 'Shop Similar',
    ctaLink: `/shop?genres=${album.genres[0]}`,
  }
  return (
    <div>
      <ProductDetailsSection album={album} />
      <SelectedAlbumsSection block={block} albums={relatedAlbums.slice(0, 2)} />
    </div>
  )
}
