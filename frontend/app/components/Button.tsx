'use client'

import {cn} from '@/lib/cn'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export default function Button({children, className, size, variant, ...props}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-mono text-white rounded-lg transition-colors cursor-pointer',
        {
          'h-14 min-w-48 px-4': size === 'md' || !size,
          'h-10 min-w-32': size === 'sm',
        },
        {
          'bg-red-500 hover:bg-red-600': variant === 'primary' || !variant,
          'bg-neutral-800 hover:bg-black': variant === 'secondary',
          'bg-transparent border-2 border-black/25 text-black hover:border-black':
            variant === 'tertiary',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
