import {X} from 'lucide-react'
import Button from '../Button'
import NewFilterButton from './NewFilterButton'
import {Filters} from '@/types/Filters'
import FilterSidebar from './FilterSidebar'

export default function Filter({filters}: {filters: Filters}) {
  // const filterOptions =
  return (
    <div className="grid sm:grid-cols-[1fr_auto] gap-4">
      <div className="grid gap-4">
        <span className="uppercase text-3xl">Filters</span>
        <div className="flex flex-wrap gap-4">
          {Object.entries(filters).map(([k, v]) => {
            return v?.map((s, index) => (
              <Button
                key={k + s + index}
                variant="tertiary"
                size="sm"
                className="flex gap-2 justify-center items-center"
                datatype={k}
              >
                <span>{s}</span>
                <X />
              </Button>
            ))
          })}
          <NewFilterButton />
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
