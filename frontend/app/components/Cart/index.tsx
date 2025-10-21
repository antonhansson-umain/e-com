'use client'

import SideBarFooter from '../SideBar/SideBarFooter'
import {useCartStore} from '@/hooks/useCartStore'
import {getAlbum} from '@/actions/getAlbum'
import {useEffect, useState} from 'react'
import EmptyCart from './empty'
import {GetAlbumByIdResult} from '@/sanity.types'
import CartItem from './CartItem'
import Spinner from '../Spinner'

type UICart = {
  [id: string]: GetAlbumByIdResult & {quantity: number}
}

export default function Cart() {
  const [albums, setAlbums] = useState<UICart>({})
  const [buttonLabel, setButtonLabel] = useState<React.ReactNode>('CHECKOUT')

  const cart = useCartStore((state) => state.cart)
  const calculateSubtotal = () => {
    return Object.values(albums).reduce((acc, album) => acc + album.price * album.quantity, 0)
  }

  useEffect(() => {
    const loadAlbums = async () => {
      const results = await Promise.all(
        Object.entries(cart).map(async ([id, quantity]) => {
          const album = await getAlbum(id)
          return [id, {...album, quantity}]
        }),
      )
      setAlbums(Object.fromEntries(results))
    }
    loadAlbums()
  }, [cart])

  const isEmpty = Object.keys(cart).length <= 0
  if (isEmpty) return <EmptyCart />

  async function handleCheckout() {
    setButtonLabel(<Spinner />)
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cart),
    })
    const {url} = await res.json()
    window.location.href = url
  }

  return (
    <>
      <ul className="flex flex-col px-2 py-4 overflow-scroll">
        {Object.keys(albums).length <= 0 ? (
          <>Loading...</>
        ) : (
          Object.entries(albums).map(([id, album]) => <CartItem key={id} album={album} />)
        )}
      </ul>
      <SideBarFooter actionLabel={buttonLabel} action={handleCheckout} closeOnClick={false}>
        <div className="flex justify-between items-center">
          <div className="text-xl">SUBTOTAL</div>
          <div className="text-3xl">${calculateSubtotal()}</div>
        </div>
      </SideBarFooter>
    </>
  )
}
