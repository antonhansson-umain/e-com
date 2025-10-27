'use client'

import {useSideBarContext} from '@/contexts/sidebar-context'
import CartIcon from '../CartIcon'
import Brackets from './Brackets'

export default function CartButton() {
  const {setIsOpen, setContent} = useSideBarContext()

  const handleCartOpen = () => {
    setIsOpen(true)
    setContent('cart')
  }
  return (
    <button
      onClick={handleCartOpen}
      className="flex items-center justify-end transition-colors hover:text-cherry w-max justify-self-end font-text text-base"
    >
      {/* <span className="hidden sm:inline-flex">{'[ Cart '}</span> */}
      <Brackets>
        <span className="hidden sm:inline-flex">Cart</span>
        <CartIcon className="mx-2 inline" />
      </Brackets>
      {/* <span className="hidden sm:inline-flex">{']'}</span> */}
    </button>
  )
}
