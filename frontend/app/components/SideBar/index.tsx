'use client'

import {cn} from '@/lib/cn'
import {X} from 'lucide-react'
import {useState} from 'react'

type SideBarProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string
}

export default function SideBar({title, children}: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <aside
      aria-hidden={!isOpen}
      className={cn(
        'fixed top-0 right-0 bg-butter/80 backdrop-blur-sm h-screen w-full sm:w-80 z-1000 border-l border-black/50 transition-all grid grid-rows-[auto_1fr_auto]',
        {
          'translate-x-full': !isOpen,
        },
      )}
    >
      <header className="flex justify-between items-center p-4 border-b border-black/50 gap-4">
        {title && <h2 className="text-4xl uppercase">{title}</h2>}
        <button onClick={() => setIsOpen(false)}>
          <X width={48} height={48} strokeWidth={1} />
        </button>
      </header>
      {children}
      {/* <SideBarFooter action={() => {}} actionLabel="apply" /> */}
    </aside>
  )
}
