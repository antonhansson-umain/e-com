import {defineField, defineType} from 'sanity'
import {FootprintsIcon} from 'lucide-react'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: FootprintsIcon,
  fields: [
    defineField({
      name: 'tagline',
      description: 'Text used below the logo.',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Wows or Woes.',
    }),
    defineField({
      type: 'array',
      name: 'linkGroups',
      title: 'Link Groups',
      of: [{type: 'linkGroup'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})
