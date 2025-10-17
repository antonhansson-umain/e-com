'use client'

import {Plus} from 'lucide-react'
import Button from '../Button'
import FilterSidebar from './FilterSidebar'
import {useSideBarContext} from '@/contexts/sidebar-context'

export default function NewFilterButton() {
  const {setIsOpen, setContent, setTitle} = useSideBarContext()
  const openFiltersSidebar = () => {
    setContent(<FilterSidebar />)
    setTitle('Filters')
    setIsOpen(true)
  }
  return (
    <Button
      variant="tertiary"
      size="sm"
      className="flex gap-2 justify-center items-center"
      onClick={openFiltersSidebar}
    >
      <Plus />
    </Button>
  )
}
