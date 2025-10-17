'use client'

import {Plus, X} from 'lucide-react'
import Button from './Button'
import {useSideBarContext} from '@/contexts/sidebar-context'
import FilterSidebar from './Filter/FilterSidebar'

// {filters}: {filters: string[]}
export default function Filter() {
  const {setIsOpen, setContent, setTitle} = useSideBarContext()
  const openFiltersSidebar = () => {
    setContent(<FilterSidebar />)
    setTitle('Filters')
    setIsOpen(true)
  }
  return (
    <div className="grid sm:grid-cols-[1fr_auto] gap-4">
      <div className="grid gap-4">
        <span className="uppercase text-3xl">Filters</span>
        <div className="flex flex-wrap gap-4">
          <Button variant="tertiary" size="sm" className="flex gap-2 justify-center items-center">
            <span>Test</span>
            <X />
          </Button>
          <Button
            variant="tertiary"
            size="sm"
            className="flex gap-2 justify-center items-center"
            onClick={openFiltersSidebar}
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="grid gap-4">
        <span className="uppercase text-3xl">Sort By</span>
        <select
          name="sortBy"
          id="sortBy"
          className="rounded-lg font-mono text-xl h-10 sm:w-64 px-2 border-2 border-black/25 hover:border-black transition-colors"
        >
          <option value="relevance">Relevance</option>
        </select>
      </div>
    </div>
  )
}
