import {getFilterOptions} from '@/actions/getFilterOptions'
import SideBarFooter from '../SideBar/SideBarFooter'
import FilterGroup from './FilterGroup'

export default async function FilterSidebar() {
  const filterOptions = await getFilterOptions()
  return (
    <form className="h-full flex flex-col justify-between text-xl overflow-y-scroll">
      <div className="p-4 flex flex-col gap-4 overflow-y-scroll">
        {filterOptions.map((o) => (
          <FilterGroup
            key={o.label}
            category={o}
            {...(o.label === 'genres' ? {initCollapse: true} : {})}
          />
        ))}
      </div>
      <SideBarFooter actionLabel="apply" />
    </form>
  )
}
