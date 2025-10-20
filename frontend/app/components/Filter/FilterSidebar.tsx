import {getFilterOptions} from '@/actions/getFilterOptions'
import SideBarFooter from '../SideBar/SideBarFooter'

export default async function FilterSidebar() {
  const filterOptions = await getFilterOptions()
  console.log(filterOptions)
  return (
    <form className="h-full flex flex-col justify-between text-xl overflow-y-scroll">
      <div className="p-4 flex flex-col gap-4 overflow-y-scroll">
        {filterOptions.map((o) => (
          <fieldset
            key={o.label}
            id={o.label}
            name={o.label}
            className="border-b border-black/25 py-4 flex flex-col gap-2"
          >
            <legend className="font-mono uppercase">{o.label}</legend>
            {o.filters.map((filter) => (
              <div className={`flex items-center gap-2`} key={o.label + filter.value}>
                <input
                  type="checkbox"
                  id={o.label + filter.value}
                  value={filter.value}
                  name={o.label}
                  className="w-6 aspect-square"
                />
                <label htmlFor={o.label + filter.value}>{filter.label}</label>
              </div>
            ))}
          </fieldset>
        ))}
      </div>
      <SideBarFooter actionLabel="apply" />
    </form>
  )
}
