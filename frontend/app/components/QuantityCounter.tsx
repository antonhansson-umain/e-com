'use client'

import {Minus, Plus} from 'lucide-react'
import Button from './Button'
import {cn} from '@/lib/cn'

export default function QuantityCounter({
  value,
  onIncrement,
  onDecrement,
  className,
}: {
  value: number
  onIncrement: () => void
  onDecrement: () => void
  className?: string
}) {

  return (
    <div className={cn(`flex items-center text-xl`, className)}>
      <QuantityCounterButton icon={<Minus />} onClick={onDecrement} className={'justify-self-end'} />
      <span className="text-center w-14">{value}</span>
      <QuantityCounterButton icon={<Plus />} onClick={onIncrement} />
    </div>
  )
}

function QuantityCounterButton({
  icon,
  onClick,
  className,
}: {
  icon: React.ReactNode
  onClick: () => void
  className?: string
}) {
  return (
    <Button
      variant="tertiary"
      size="sm"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onClick()
      }}
      className={cn('aspect-square p-0 h-8 w-8', className)}
    >
      {icon}
    </Button>
  )
}
