'use client'

import SideBarFooter from '../SideBar/SideBarFooter'

export default function index() {
  const isEmpty = false
  if (isEmpty) return <>Empty state</>
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
