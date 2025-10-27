'use client'

import {useCartStore} from '@/hooks/useCartStore'
import {ShoppingCart} from 'lucide-react'
import {useEffect, useState} from 'react'

interface CartIconProps {
  count?: number
  size?: number | string
  className?: string
}

export default function CartIcon({className = 'text-black'}: CartIconProps) {
  const cart = useCartStore((state) => state.cart)
  const getTotalQty = Object.values(cart).reduce((acc, qty) => acc + qty, 0)

  return (
    <div className="relative inline-block">
      <ShoppingCart className={className} />
      {getTotalQty > 0 && (
        <span
          className="
            absolute -top-1 -right-0.5
            bg-cherry text-white text-[0.7rem] leading-none
            rounded-full px-[0.3rem] py-[0.15rem]
            min-w-[1rem] text-center
          "
        >
          {getTotalQty}
        </span>
      )}
    </div>
  )
}
