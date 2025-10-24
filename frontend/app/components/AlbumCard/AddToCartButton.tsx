'use client'

import {Album} from '@/types/types'
import {Plus} from 'lucide-react'
import {useCartStore} from '../../../hooks/useCartStore'
import Button from '../Button'

export default function AddToCartButton({
  ariaLabel,
  albumId,
  variant
}: {
  ariaLabel: string
  albumId: Album['_id']
  variant?: 'primary' | 'secondary'
}) {
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <Button
      aria-label={ariaLabel}
      variant={variant}
      onClick={() => addToCart(albumId)}
    >
      {ariaLabel
       ?? <Plus size={30} />}
    </Button>
  )
}
