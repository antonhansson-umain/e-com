'use client'

import { useCartStore } from '@/hooks/useCartStore'
import QuantityCounter from './QuantityCounter'

export default function CartQuantityCounter({ albumId }: { albumId: string }) {
  const incrementItemInCart = useCartStore((s) => s.incrementItemInCart)
  const decrementItemInCart = useCartStore((s) => s.decrementItemInCart)
  const removeFromCart = useCartStore((s) => s.removeFromCart)
  const getItemQty = useCartStore((s) => s.getItemQty)

  const quantity = getItemQty(albumId)

  const handleIncrement = () => {
    incrementItemInCart(albumId)
  }

  const handleDecrement = () => {
    if (quantity <= 1) {
      removeFromCart(albumId)
    } else {
      decrementItemInCart(albumId)
    }
  }

  return (
    <QuantityCounter
      value={quantity}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
}