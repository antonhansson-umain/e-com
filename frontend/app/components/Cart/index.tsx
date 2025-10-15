'use client'

import SideBarFooter from '../SideBar/SideBarFooter'
import {useCartStore} from '@/hooks/useCart'
import {getAlbum} from '@/actions/getAlbum'
import {useEffect, useState} from 'react'
import EmptyCart from './empty'
import {GetAlbumByIdResult} from '@/sanity.types'

type UICart = {
  [id: string]: GetAlbumByIdResult & {quantity: number}
}

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  const isEmpty = Object.keys(cart).length <= 0
  if (isEmpty) return <EmptyCart />

  const [albums, setAlbums] = useState<UICart>({})

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

  return (
    <>
      {Object.keys(albums).length <= 0 ? (
        <>Loading..</>
      ) : (
        <ul className="p-4">
          {Object.entries(albums).map(([id, album]) => (
            <li key={id}>{album.title}</li>
          ))}
        </ul>
      )}
      <SideBarFooter actionLabel="CHECKOUT" href="/checkout">
        <div className="flex justify-between items-center">
          <div className="text-xl">SUBTOTAL</div>
          <div className="text-3xl">$</div>
        </div>
      </SideBarFooter>
    </>
  )
}
