import NewFilterButton from './NewFilterButton'
import {Filters} from '@/types/Filters'
import FilterButton from './FilterButton'
import SortBy from './SortBy'

export default function Filter({filters}: {filters: Filters}) {
  return (
    <div className="grid sm:grid-cols-[1fr_auto] gap-4">
      <div className="grid gap-4">
        <span className="uppercase text-3xl">Filters</span>
        <div className="flex flex-wrap gap-4">
          {Object.entries(filters).map(([category, values]) => {
            if (category === 'sort') return
            return values?.map((value, index) => (
              <FilterButton key={category + value + index} category={category} value={value} />
            ))
          })}
          <NewFilterButton />
        </div>
      </div>
      <SortBy />
    </div>
  )
}
