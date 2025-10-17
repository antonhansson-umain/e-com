// import {useState} from 'react'
import SideBarFooter from '../SideBar/SideBarFooter'
import {getGenres} from '@/actions/getGenres'

export default async function FilterSidebar() {
  //   const [filters, setFilters] = useState()
  const buildPath = () => {
    return '/'
  }
  const filterOptions = {
    genres: await getGenres(),
  }

  return (
    <>
      {/* <ul className="flex flex-col px-2 py-4 overflow-scroll">
        {filterOptions.genres.map((genre) => (
          <li>{genre.genreName}</li>
        ))}
      </ul> */}
      <form>
        <SideBarFooter actionLabel="apply"></SideBarFooter>
      </form>
    </>
  )
}
