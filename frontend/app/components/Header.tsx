'use client'
import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default function Header() {
  // const {data: settings} = await sanityFetch({
  //   query: settingsQuery,
  // })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed z-50 inset-x-0 bg-white/90 flex items-center justify-between p-6 m-8">
      <div className="flex items-center gap-8">
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-xs sm:text-base tracking-tight leading-5">
            <li>
              <Link href="/products" className="hover:underline">
                [ All records ]
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                [ Featured ]
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="block md:hidden text-black w-[1.5rem] h-[1.5rem]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/" className="relative w-[70px] h-[20px] block">
          <Image
            src="/images/wow_logo.svg"
            alt="WOW records logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">

        <Link href="/products" className="md:hidden hover:underline" aria-label="Cart">
          <CartIcon className="inline" />
        </Link>

        <Link href="/products" className="hidden md:inline-flex hover:underline">
          [ Cart <CartIcon className="mx-2 inline" /> ]
        </Link>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-200 md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 font-mono">
            <li>
              <Link href="/products">[ All records ]</Link>
            </li>
            <li>
              <Link href="/featured">[ Featured ]</Link>
            </li>
            <li>
              <Link href="/cart">[ Cart ]</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
