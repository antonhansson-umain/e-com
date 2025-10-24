'use client'

import {Album} from '@/types/types'
import {Plus} from 'lucide-react'
import {useCartStore} from '../../../hooks/useCartStore'

export default function AddToCartButton({
  ariaLabel,
  albumId,
}: {
  ariaLabel: string
  albumId: Album['_id']
}) {
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <button
      aria-label={ariaLabel}
      className=" hover:text-(--color-cherry) transition cursor-pointer"
      onClick={() => addToCart(albumId)}
    >
      <Plus size={30} />
    </button>
  )
}
