import SideBar from '.'
import Cart from '../Cart'
import FilterSidebar from '../Filter/FilterSidebar'

export default function SideBarWrapper() {
  return (
    <SideBar
      views={{
        cart: <Cart />,
        filters: <FilterSidebar />,
      }}
    />
  )
}
