'use client'
import {ShoppingCart} from 'lucide-react'

interface CartIconProps {
  count?: number
  size?: number | string
  className?: string
}

export default function CartIcon({count = 0, size = 24, className = 'text-black'}: CartIconProps) {
  return (
    <div className="relative inline-block">
      <ShoppingCart size={size} className={className} />

      {count > 0 && (
        <span
          className="
            absolute -top-1 -right-0.5
            bg-red-500 text-white text-[0.7rem] leading-none
            rounded-full px-[0.3rem] py-[0.15rem]
            min-w-[1rem] text-center
          "
        >
          {count}
        </span>
      )}
    </div>
  )
}
