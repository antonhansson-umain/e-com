import {Sparkle} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  icon: Sparkle,
  type: 'document',
  fields: [
    defineField({
      name: 'tagName',
      title: 'Tag',
      type: 'string'
    }),
    defineField({
      name: 'tagDescription',
      title: 'Tag Description',
      type: 'string'
    }),
  ],
  preview: {
    select: {
      title: 'tagName',
    },
  },
})