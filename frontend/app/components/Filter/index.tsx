import NewFilterButton from './NewFilterButton'
import {Filters} from '@/types/Filters'
import FilterButton from './FilterButton'

export default function Filter({filters}: {filters: Filters}) {
  return (
    <div className="grid sm:grid-cols-[1fr_auto] gap-4">
      <div className="grid gap-4">
        <span className="uppercase text-3xl">Filters</span>
        <div className="flex flex-wrap gap-4">
          {Object.entries(filters).map(([category, values]) => {
            return values?.map((value, index) => (
              <FilterButton key={category + value + index} category={category} value={value} />
            ))
          })}
          <NewFilterButton />
        </div>
      </div>
      <div className="flex flex-col gap-4 place-content-start">
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
