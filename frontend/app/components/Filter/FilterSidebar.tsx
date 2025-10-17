import {useState} from 'react'
import SideBarFooter from '../SideBar/SideBarFooter'

export default function FilterSidebar() {
  const [filters, setFilters] = useState()
  const buildPath = () => {
    return '/'
  }
  return (
    <>
      <ul className="flex flex-col px-2 py-4 overflow-scroll">
        {/* {Object.keys(albums).length <= 0 ? (
          <>Loading...</>
        ) : (
          Object.entries(albums).map(([id, album]) => <CartItem key={id} album={album} />)
        )} */}
      </ul>
      <SideBarFooter actionLabel="apply" href={buildPath()}></SideBarFooter>
    </>
  )
}
