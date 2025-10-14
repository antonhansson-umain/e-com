// store/useCartStore.ts
import {Album} from '@/types/types'
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

type Cart = Record<Album['_id'], number>

interface CartState {
  cart: Cart
  addToCart: (id: Album['_id'], quantity?: number) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: {},
      addToCart: (id, quantity = 1) =>
        set((state) => ({
          cart: {
            ...state.cart,
            [id]: (state.cart[id] || 0) + quantity,
          },
        })),
      removeFromCart: (id) =>
        set((state) => {
          const cart = {...state.cart}
          delete cart[id]
          return {cart}
        }),
      clearCart: () => set({cart: {}}),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
