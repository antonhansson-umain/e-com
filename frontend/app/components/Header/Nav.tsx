'use client'

import {HeaderLinkGroups, NavGroup as NavGroupType} from '@/types/types'
import {Menu, X} from 'lucide-react'
import React, {useRef, useState} from 'react'
import NavGroup from './NavGroup'
import NavLink from './NavLink'
import useClickOutside from '@/hooks/useClickOutside'
import {cn} from '@/lib/cn'
import Brackets from './Brackets'

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
        className="block md:hidden text-black w-[1.5rem] h-[1.5rem] top-[5rem] transition-all duration-200 hover:text-red-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      <nav
        className={cn('hidden md:block', {
          'block max-md:absolute left-0 w-full bg-white top-full': isOpen,
        })}
      >
        <menu
          className={cn('flex items-center md:gap-6 text-xs md:text-base', {
            'max-md:flex-col max-md:border-t border-black/25 max-md:*:not-last:border-b *:not-last:border-black/25 *:min-h-9 *:flex *:items-center max-md:*:w-full  max-md:*:justify-center max-md:**:*:justify-center':
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
                <NavLink href={group.linkPath} onClick={handleLinkClick} key={group._type + index}>
                  <Brackets key={group._type + index}>{group.linkLabel}</Brackets>
                </NavLink>
              )
          })}
        </menu>
      </nav>
    </>
  )
}
