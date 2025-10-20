'use client'

// import SideBar from '@/app/components/SideBar'
import React, {createContext, useContext, useState} from 'react'

export type SideBarContent = 'cart' | 'filters'

type SideBarContext = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  content: SideBarContent
  setContent: React.Dispatch<React.SetStateAction<SideBarContent>>
}
export const SideBarContext = createContext<SideBarContext | null>(null)

export default function SideBarContextProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<SideBarContent>('cart')
  return (
    <SideBarContext.Provider value={{isOpen, setIsOpen, content, setContent}}>
      {children}
    </SideBarContext.Provider>
  )
}

export function useSideBarContext() {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('useSideBarContext must be used within a SideBarContextProvider')
  }
  return context
}
