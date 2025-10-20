'use client'
import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'
import Cart from './Cart'
import {useSideBarContext} from '@/contexts/sidebar-context'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {setIsOpen, setContent} = useSideBarContext()

  const handleCartOpen = () => {
    setIsOpen(true)
    setContent('cart')
  }

  const links = [
    {href: '/shop', label: '[ All records ]'},
    {href: '/shop/featured', label: '[ Featured ]'},
  ]

  const mobileMenu = isMenuOpen && (
    <nav className="absolute left-0 w-full bg-white sm:hidden top-full">
      <ul className="flex flex-col items-center py-4 space-y-4 font-mono">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-all duration-200 hover:text-red-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
  return (
    <header className="fixed z-50 inset-x-0 top-0 bg-white m-4 sm:m-8 h-16 px-4 flex items-center">
      <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-4 items-center mx-auto md:max-w-[calc(100%-64px)] ">
        <div className="flex items-center gap-8">
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6 text-xs sm:text-base">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-all duration-200 hover:text-red-300 text-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="block sm:hidden text-black w-[1.5rem] h-[1.5rem] top-[5rem] transition-all duration-200 hover:text-red-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        <Link href="/">
          <Image
            src="/images/wow_logo.svg"
            alt="WOW records logo"
            width={72}
            height={20}
            className="place-self-center"
          />
        </Link>
        <div className="flex items-center justify-end gap-4 transition-all duration-200 hover:text-red-300">
          <button className="sm:hidden" aria-label="Cart" onClick={handleCartOpen}>
            <CartIcon className="mx-2 inline" />
          </button>
          <button className="hidden sm:inline-flex" onClick={handleCartOpen}>
            [ Cart <CartIcon className="mx-2 inline" /> ]
          </button>
        </div>
        {mobileMenu}
      </div>
    </header>
  )
}
