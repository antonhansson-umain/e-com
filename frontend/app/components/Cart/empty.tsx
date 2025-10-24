import React from 'react'
import Button from '../Button'
import {useSideBarContext} from '@/contexts/sidebar-context'

export default function EmptyCart() {
  const {setIsOpen} = useSideBarContext()
  return (
    <div className="p-4 flex flex-col items-center gap-4 my-auto">
      <p>Your cart is empty</p>
      <Button variant="secondary" href="/shop" className="w-full" onClick={() => setIsOpen(false)}>
        Continue Shopping
      </Button>
    </div>
  )
}
