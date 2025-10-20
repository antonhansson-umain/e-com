'use client'

import {Plus} from 'lucide-react'
import Button from '../Button'
import {useSideBarContext} from '@/contexts/sidebar-context'

export default function NewFilterButton() {
  const {setIsOpen, setContent} = useSideBarContext()
  const openFiltersSidebar = () => {
    setContent('filters')
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
