import {getAlbums} from '@/actions/getAlbums'
import SelectedAlbumsSection from '../components/SelectedAlbumsSection'
import {redirect} from 'next/navigation'
import Message from './Message'

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>
}) {
  const {session_id} = await searchParams
  if (!session_id) redirect('/')
  const sessionId = Array.isArray(session_id) ? session_id[0] : session_id

  const albums = await getAlbums()
  const block = {
    title: 'You may also like...',
    sectionDescription: 'Based on your recent purchase.',
    ctaText: 'Shop Now',
    ctaLink: '/shop',
  }
  return (
    <>
      <Message sessionId={sessionId} />
      <SelectedAlbumsSection albums={albums.slice(0, 2)} block={block} />
    </>
  )
}
