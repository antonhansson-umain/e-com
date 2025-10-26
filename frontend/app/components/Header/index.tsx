import Link from 'next/link'
import Logo from '../Logo'
import CartButton from './CartButton'
import Nav from './Nav'
import {headerQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {HeaderLinkGroups} from '@/types/types'

export default async function Header() {
  const {data: header} = await sanityFetch({
    query: headerQuery,
  })

  return (
    <header className="fixed z-50 inset-x-0 top-0 bg-white m-4 sm:m-8 h-16 px-4 md:px-10 grid grid-cols-3 items-center gap-4 font-text">
      <Nav linkGroups={header?.linkGroups as HeaderLinkGroups | null} />
      <Link href="/" className="hover:text-black justify-self-center">
        <Logo />
      </Link>
      <CartButton />
    </header>
  )
}
