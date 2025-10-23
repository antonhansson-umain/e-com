import {defineField, defineType} from 'sanity'
import {Menu} from 'lucide-react'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  icon: Menu,
  fields: [
    defineField({
      type: 'array',
      name: 'linkGroups',
      title: 'Link Groups',
      of: [
        {type: 'linkGroup'},
        {
          type: 'navLink',
          title: 'Single Link',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
})
