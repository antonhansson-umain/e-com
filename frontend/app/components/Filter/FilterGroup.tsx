'use client'

import {GetCountriesQueryResult, GetGenresQueryResult} from '@/sanity.types'
import {ChevronDown, ChevronUp} from 'lucide-react'
import {useState} from 'react'
import {useSearchParams} from 'next/navigation'

export default function FilterGroup({
  category,
  initCollapse,
}: {
  category: {
    label: string
    filters: GetGenresQueryResult | GetCountriesQueryResult
  }
  initCollapse?: boolean
}) {
  const searchParams = useSearchParams()
  const [isCollapsed, setIsCollapsed] = useState(searchParams.has(category.label) || initCollapse)
  const handleCollapse = () => setIsCollapsed(!isCollapsed)
  return (
    <fieldset
      id={category.label}
      name={category.label}
      className="border-b border-black/25 py-4 flex flex-col gap-2"
    >
      <div
        className="flex items-center justify-between hover:cursor-pointer"
        role="button"
        aria-labelledby={`${category.label}-button`}
        onClick={handleCollapse}
      >
        <legend className="font-mono uppercase">{category.label}</legend>
        <button
          type="button"
          onClick={handleCollapse}
          aria-label={`${isCollapsed ? 'Fold' : 'Collapse'} '${category.label}' filter group`}
          id={`${category.label}-button`}
        >
          {isCollapsed ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {category.filters.map(
        (filter) =>
          isCollapsed && (
            <div
              className={`grid grid-cols-[auto_1fr] items-center gap-2`}
              key={category.label + filter.value}
            >
              <input
                type="checkbox"
                id={category.label + filter.value}
                value={filter.value}
                name={category.label}
                defaultChecked={searchParams.has(category.label, filter.value)}
                className={'w-6 aspect-square'}
              />
              <label htmlFor={category.label + filter.value} className="truncate">
                {filter.label}
              </label>
            </div>
          ),
      )}
    </fieldset>
  )
}
