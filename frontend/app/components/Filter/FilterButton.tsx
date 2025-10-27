'use client'

import {X} from 'lucide-react'
import Button from '../Button'
import {useRouter, useSearchParams} from 'next/navigation'

export default function FilterButton({category, value}: {category: string; value: string}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const removeFilter = () => {
    const params = new URLSearchParams(searchParams)
    params.delete(category, value)
    router.push(`/shop?${params.toString()}`)
  }
  return (
    <Button
      variant="tertiary"
      size="sm"
      className="flex gap-2 justify-center items-center"
      datatype={category}
      onClick={removeFilter}
    >
      <span>{value}</span>
      <X />
    </Button>
  )
}
