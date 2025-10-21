'use client'

import {useCartStore} from '@/hooks/useCartStore'
import {useCheckoutSession} from '@/hooks/useCheckoutSession'

export default function Message({sessionId}: {sessionId: string}) {
  const getSessionId = useCheckoutSession((state) => state.getSessionId)
  const clearSessionId = useCheckoutSession((state) => state.clearSessionId)
  const clearCart = useCartStore((state) => state.clearCart)
  const cart = useCartStore((state) => state.cart)
  const totalCartQty = Object.keys(cart).length
  const storedSessionId = getSessionId()
  if (totalCartQty > 0 && storedSessionId && sessionId !== storedSessionId)
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl">Something went wrong!</h1>
        <p>Checkout session IDs mismatched. Try checking out again.</p>
        <p className="text-xs">
          This is a fake store. No money will be withdrawn and no products are actually sold.
        </p>
      </div>
    )
  if (sessionId === storedSessionId) {
    clearCart()
    clearSessionId()
  }
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl">Order success!</h1>
      <p>An order confirmation will be sent to your email.</p>
      <p className="text-xs">
        This is a fake store. No money will be withdrawn and no products are actually sold.
      </p>
    </div>
  )
}
