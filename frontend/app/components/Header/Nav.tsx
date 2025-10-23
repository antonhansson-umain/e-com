'use client'

import {HeaderLinkGroups, NavGroup as NavGroupType} from '@/types/types'
import {Menu, X} from 'lucide-react'
import React, {useRef, useState} from 'react'
import NavGroup from './NavGroup'
import NavLink from './NavLink'
import useClickOutside from '@/hooks/useClickOutside'
import {cn} from '@/lib/cn'

type NavProps = React.HTMLAttributes<HTMLDivElement> & {
  linkGroups?: HeaderLinkGroups | null
}

export default function Nav({linkGroups}: NavProps) {
  const navRef = useRef<HTMLDivElement | null>(null)
  const {isOpen, setIsOpen} = useClickOutside(navRef)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block sm:hidden text-black w-[1.5rem] h-[1.5rem] top-[5rem] transition-all duration-200 hover:text-red-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      <nav
        className={cn('hidden sm:block', {
          'block max-sm:absolute left-0 w-full bg-white top-full': isOpen,
        })}
      >
        <menu
          className={cn('flex items-center sm:gap-6 text-xs sm:text-base', {
            'max-sm:flex-col max-sm:border-t border-black/25 max-sm:*:not-last:border-b *:not-last:border-black/25 *:min-h-9 *:flex *:items-center max-sm:*:w-full  max-sm:*:justify-center max-sm:**:*:justify-center':
              isOpen,
          })}
          ref={navRef}
        >
          {linkGroups?.map((group, index) => {
            if (group._type === 'linkGroup')
              return (
                <NavGroup
                  key={group._type + index}
                  group={group as NavGroupType}
                  handleLinkClick={handleLinkClick}
                />
              )
            if (group._type === 'navLink')
              return (
                <NavLink key={group._type + index} href={group.linkPath} onClick={handleLinkClick}>
                  {group.linkLabel}
                </NavLink>
              )
          })}
        </menu>
      </nav>
    </>
  )
}

// const mobileMenu = isMenuOpen && (
//   <nav className="absolute left-0 w-full bg-white sm:hidden top-full">
//     <ul className="flex flex-col items-center py-4 space-y-4 font-mono">
//       {links.map((link) => (
//         <li key={link.label}>
//           <Link
//             href={link.href}
//             className="transition-all duration-200 hover:text-red-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </nav>
// )
