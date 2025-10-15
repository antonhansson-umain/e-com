'use client'

import {Minus, Plus} from 'lucide-react'
import Button from './Button'
import {cn} from '@/lib/cn'
import {useCartStore} from '@/hooks/useCartStore'

export default function QuantityCounter({
  albumId,
  className,
}: {
  albumId: string
  className?: string
}) {
  const incrementItemInCart = useCartStore((state) => state.incrementItemInCart)
  const decrementItemInCart = useCartStore((state) => state.decrementItemInCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const getItemQty = useCartStore((state) => state.getItemQty)

  const increment = () => {
    incrementItemInCart(albumId)
  }
  const decrement = () => {
    if (getItemQty(albumId) <= 1) {
      removeFromCart(albumId)
      return
    }
    decrementItemInCart(albumId)
  }

  return (
    <div className={cn(`flex items-center text-xl`, className)}>
      <QuantityCounterButton icon={<Plus />} onClick={increment} />
      <span className="text-center w-14">{getItemQty(albumId)}</span>
      <QuantityCounterButton icon={<Minus />} onClick={decrement} className={'justify-self-end'} />
    </div>
  )
}

function QuantityCounterButton({
  icon,
  onClick,
  className,
}: {
  icon: React.ReactNode
  onClick: () => void
  className?: string
}) {
  return (
    <Button
      variant="tertiary"
      size="sm"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick()
      }}
      className={cn('aspect-square p-0 h-8 w-8', className)}
    >
      {icon}
    </Button>
  )
}
