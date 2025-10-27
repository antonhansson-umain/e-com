'use client'

import {cn} from '@/lib/cn'
import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  href?: string
}

export default function Button({
  children,
  className,
  size,
  variant,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const classNames = cn(
    'font-mono text-white rounded-lg transition-colors cursor-pointer uppercase place-items-center',
    {
      'h-14 min-w-48 px-4': size === 'md' || !size,
      'h-10 px-2': size === 'sm',
    },
    {
      'bg-cherry hover:bg-cherry-700': variant === 'primary' || !variant,
      'bg-neutral-800 hover:bg-black': variant === 'secondary',
      'bg-transparent border-2 border-black/25 text-black hover:border-black':
        variant === 'tertiary',
      'bg-transparent text-black p-0 p-0 h-auto min-w-0 hover:text-cherry':
        variant === 'quaternary',
    },
    className,
  )
  if (href)
    return (
      <Link
        href={href}
        {...(onClick ? {onClick} : {})}
        className={cn(classNames, 'flex items-center justify-center')}
      >
        {children}
      </Link>
    )
  return (
    <button className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
