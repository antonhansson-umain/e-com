'use client'

import {useSideBarContext} from '@/contexts/sidebar-context'
import {cn} from '@/lib/cn'
import {X} from 'lucide-react'
import {useEffect, useRef} from 'react'

type SideBarProps = React.HTMLAttributes<HTMLDivElement> & {
  // title: string
  views: {
    cart: React.ReactNode
    filters: React.ReactNode
  }
}

export default function SideBar({views}: SideBarProps) {
  const {isOpen, setIsOpen, content} = useSideBarContext()
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <aside
      ref={ref}
      aria-hidden={!isOpen}
      className={cn(
        'fixed top-0 right-0 bg-background/80 backdrop-blur-xl h-screen w-full sm:w-80 z-[1000] border-l border-black/50 transition-all grid grid-rows-[auto_1fr_auto]',
        {'translate-x-full': !isOpen},
      )}
    >
      <header className="flex justify-between items-center p-4 border-b border-black/50 gap-4">
        <h2 className="text-4xl uppercase">
          {content === 'cart' ? 'Cart' : content === 'filters' ? 'Filters' : ''}
        </h2>
        <button
          onClick={() => setIsOpen(false)}
          className="ml-auto"
          {...(!isOpen ? {tabIndex: -1} : {})}
        >
          <X width={48} height={48} strokeWidth={1} />
        </button>
      </header>
      {content === 'cart' && views.cart}
      {content === 'filters' && views.filters}
    </aside>
  )
}
