'use client'

import SideBar from '@/app/components/SideBar'
import React, {createContext, useContext, useState} from 'react'

type SideBarContext = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setContent: React.Dispatch<React.SetStateAction<React.JSX.Element>>
  setTitle: React.Dispatch<React.SetStateAction<string>>
}
export const SideBarContext = createContext<SideBarContext | null>(null)

export default function SideBarContextProvider({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState(<></>)
  const [title, setTitle] = useState('')
  return (
    <SideBarContext.Provider value={{isOpen, setIsOpen, setContent, setTitle}}>
      <SideBar title={title}>{content}</SideBar>
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
