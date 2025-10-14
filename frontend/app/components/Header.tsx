'use client'
import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    {href: '/products', label: '[ All records ]'},
    {href: '/featured', label: '[ Featured ]'},
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
        <Link href="/cart">[ Cart ]</Link>
      </ul>
    </nav>
  )

  return (
    <header className="fixed z-50 inset-x-0 top-0 bg-white flex items-center justify-between m-4 sm:m-8 h-16 px-4">
      <div className="flex items-center gap-8">
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6 text-xs sm:text-base">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-all duration-200 hover:text-red-300">
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="relative w-[71px] h-[20px] block">
          <Image
            src="/images/wow_logo.svg"
            alt="WOW records logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4 transition-all duration-200 hover:text-red-300">
        <Link href="/products" className="sm:hidden" aria-label="Cart">
          <CartIcon className="mx-2 inline" />
        </Link>

        <Link href="/products" className="hidden sm:inline-flex">
          [ Cart <CartIcon className="mx-2 inline" /> ]
        </Link>
      </div>
      {mobileMenu}
    </header>
  )
}
