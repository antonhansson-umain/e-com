'use client'

import {useEffect, useRef, useState} from 'react'

export default function useClickOutside(ref: React.RefObject<HTMLElement | null>) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [setIsOpen])
  return {isOpen, setIsOpen}
}
