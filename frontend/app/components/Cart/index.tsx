'use client'

import {useSideBarContext} from '@/contexts/sidebar-context'
import Button from '../Button'
import SideBarFooter from '../SideBar/SideBarFooter'

export default function index() {
  const {setIsOpen} = useSideBarContext()
  const isEmpty = true // TODO: implement actual cart logic
  if (isEmpty)
    return (
      <div className="p-4 flex flex-col items-center gap-4 my-auto">
        <p>Your cart is empty</p>
        <Button
          variant="secondary"
          href="/shop"
          className="w-full"
          onClick={() => setIsOpen(false)}
        >
          Continue Shopping
        </Button>
      </div>
    )
  return (
    <>
      <ul className="p-4">
        <li>Item</li>
      </ul>
      <SideBarFooter actionLabel="CHECKOUT" href="/checkout">
        <div className="flex justify-between items-center">
          <div className="text-xl">SUBTOTAL</div>
          <div className="text-3xl">$</div>
        </div>
      </SideBarFooter>
    </>
  )
}
