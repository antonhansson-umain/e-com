import {cn} from '@/lib/cn'
import Link from 'next/link'
import {AnchorHTMLAttributes} from 'react'

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: React.ReactNode
}

export default function NavLink({className, href, children, ...props}: NavLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={cn('hover:text-red-300 transition-colors text-nowrap', className)}
    >
      {children}
    </Link>
  )
}
