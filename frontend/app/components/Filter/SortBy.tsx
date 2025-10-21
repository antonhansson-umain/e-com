'use client'

import {useRouter, useSearchParams} from 'next/navigation'

export default function SortBy({originPath = '/shop'}: {originPath?: string}) {
  const name = 'sort'
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    const params = new URLSearchParams(searchParams)
    if (value === 'relevance') {
      params.delete(name)
    } else {
      params.set(name, value)
    }
    router.push(`${originPath}/?` + params.toString())
  }

  const options = [
    {
      label: 'Relevance',
      value: 'relevance',
    },
    {
      label: 'Price: Low to High',
      value: 'price-low',
    },
    {
      label: 'Price: High to Low',
      value: 'price-high',
    },
  ]

  return (
    <div className="flex flex-col gap-4 place-content-start">
      <span className="uppercase text-3xl">Sort By</span>
      <select
        name={name}
        id={name}
        className="rounded-lg font-mono text-xl h-10 sm:w-64 px-2 border-2 border-black/25 hover:border-black transition-colors"
        onChange={handleChange}
        defaultValue={searchParams.get(name) !== null ? searchParams.get(name)! : ''}
      >
        {options.map((o) => (
          <option key={o.label + o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
