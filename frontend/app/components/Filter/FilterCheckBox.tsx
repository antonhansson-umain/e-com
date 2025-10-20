'use client'

import {useSearchParams} from 'next/navigation'

export default function FilterCheckBox({category, value}: {category: string; value: string}) {
  const searchParams = useSearchParams()
  return (
    <input
      type="checkbox"
      id={category + value}
      value={value}
      name={category}
      defaultChecked={searchParams.has(category, value)}
      className="w-6 aspect-square "
    />
  )
}
