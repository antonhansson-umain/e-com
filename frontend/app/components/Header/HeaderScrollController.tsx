'use client'
import React, { useEffect, useRef } from 'react'

export default function HeaderScrollWrapper({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const handleScroll = () => {
      if (window.scrollY < 80) {
        header.style.transform = 'translateY(0)'
        lastScrollY.current = window.scrollY
        return
      }
      if (window.scrollY > lastScrollY.current) {
        header.style.transform = 'translateY(-150%)'
      } else {
        header.style.transform = 'translateY(0)'
      }
      lastScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement, { ref: headerRef } as any)
        : children}
    </>
  )
}
