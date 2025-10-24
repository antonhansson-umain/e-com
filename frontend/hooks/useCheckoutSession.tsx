import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

export type CheckoutSession = {
  session_id?: string
}

interface CheckoutSessionState {
  checkoutSession: CheckoutSession
  getSessionId: () => string | undefined
  setSessionId: (id: string) => void
  clearSessionId: () => void
}

export const useCheckoutSession = create<CheckoutSessionState>()(
  persist(
    (set, get) => ({
      checkoutSession: {session_id: undefined},
      getSessionId: () => get().checkoutSession.session_id,
      setSessionId: (id) =>
        set((state) => ({
          checkoutSession: {
            session_id: id,
          },
        })),
      clearSessionId: () =>
        set((state) => ({
          checkoutSession: {
            session_id: undefined,
          },
        })),
    }),
    {
      name: 'checkout-session-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
