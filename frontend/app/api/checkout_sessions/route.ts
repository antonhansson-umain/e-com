import {NextRequest, NextResponse} from 'next/server'
import {headers} from 'next/headers'
import {stripe} from '../../../lib/stripe'
import {Cart} from '@/hooks/useCartStore'
import {getAlbum} from '@/actions/getAlbum'

export async function POST(request: NextRequest) {
  try {
    const cart: Cart = await request.json()
    if (Object.keys(cart).length < 1) throw Error('Cart is empty')

    const headersList = await headers()
    const origin = headersList.get('origin')

    const albums = (
      await Promise.all(
        Object.entries(cart).map(async ([id, quantity]) => {
          const album = await getAlbum(id)

          return album ? {...album, quantity} : null
        }),
      )
    ).filter((i) => i !== null)

    if (albums.length < 1) {
      throw Error('Could not find albums')
    }

    const lineItems = albums.map((album) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: album.title,
          images: [album.image || '/images/placeholder.webp'],
          metadata: {
            productId: album._id,
          },
        },
        unit_amount: album.price * 100,
      },
      quantity: album.quantity,
    }))

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    })
    if (!session.url) throw Error('No sessions url')
    return NextResponse.json({url: session.url, session_id: session.id}) // ✅ Return JSON not redirect
  } catch (err) {
    return NextResponse.json({error: 'Could not create checkout session'}, {status: 500})
  }
}
