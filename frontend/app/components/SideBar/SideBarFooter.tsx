'use client'

import {useSideBarContext} from '@/contexts/sidebar-context'
import Button from '../Button'

export default function SideBarFooter({
  children,
  actionLabel,
  action,
  href,
}: {
  children?: React.ReactNode
  actionLabel: string
  action?: () => void
  href?: string
}) {
  const {setIsOpen} = useSideBarContext()

  const handleClick = () => {
    setIsOpen(false)
    action?.()
  }
  return (
    <div className="p-4 border-t border-black/50 flex flex-col gap-4">
      {children}
      <Button
        className="w-full"
        variant="secondary"
        onClick={handleClick}
        {...(href ? {href} : {})}
      >
        {actionLabel}
      </Button>
    </div>
  )
}
