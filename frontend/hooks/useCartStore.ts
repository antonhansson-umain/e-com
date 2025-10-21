import {Album} from '@/types/types'
import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

export type Cart = Record<Album['_id'], number>

interface CartState {
  cart: Cart
  getItemQty: (id: Album['_id']) => number
  // getTotalQty: () => number
  incrementItemInCart: (id: Album['_id']) => void
  decrementItemInCart: (id: Album['_id']) => void
  addToCart: (id: Album['_id'], quantity?: number) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: {},
      getItemQty: (id) => {
        const cart = get().cart
        return cart[id]
      },
      // getTotalQty: () => {
      //   const cart = get().cart
      //   return Object.values(cart).reduce((acc, qty) => acc + qty, 0)
      // },
      incrementItemInCart: (id) =>
        set((state) => ({
          cart: {
            ...state.cart,
            [id]: state.cart[id] + 1,
          },
        })),
      decrementItemInCart: (id) =>
        set((state) => ({
          cart: {
            ...state.cart,
            [id]: state.cart[id] - 1 < 1 ? 1 : state.cart[id] - 1, // prevent going to less than 1
          },
        })),
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
