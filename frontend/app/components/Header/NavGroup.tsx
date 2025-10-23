'use client'

import {NavLink as NavLinkType} from '@/sanity.types'
import {ChevronDown, ChevronUp} from 'lucide-react'
import NavLink from './NavLink'
import {useRef} from 'react'
import {NavGroup as NavGroupType} from '@/types/types'
import useClickOutside from '@/hooks/useClickOutside'
import {cn} from '@/lib/cn'

export default function NavGroup({
  group,
  handleLinkClick,
}: {
  group: NavGroupType
  handleLinkClick: () => void
}) {
  const ref = useRef<HTMLLIElement | null>(null)
  const {isOpen, setIsOpen} = useClickOutside(ref)

  return (
    <li className="relative min-h-9 items-center flex flex-col sm:flex-row" ref={ref}>
      <button
        className="flex items-center gap-2 hover:text-red-300 transition-colors w-full min-h-9"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{group.linkGroupTitle}</span>
        {!isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </button>
      {isOpen && (
        <ul
          className={cn(
            'sm:absolute top-full left-0 bg-white min-w-full flex flex-col items-center sm:borderz-10',
          )}
        >
          {group.links?.map((navLink: NavLinkType, index) => (
            <li
              key={navLink.linkPath + index}
              className="w-full flex h-9 items-center sm:border sm:not-first:border-t-0 first:border-t not-last:border-b border-black/25 "
            >
              <NavLink
                href={navLink.linkPath}
                className="min-w-full px-2 h-full flex items-center"
                onClick={handleLinkClick}
              >
                {navLink.linkLabel}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
