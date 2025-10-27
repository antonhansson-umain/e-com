import {Music} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const genre = defineType({
  name: 'genre',
  title: 'Genre',
  icon: Music,
  type: 'document',
  fields: [
    defineField({
      name: 'genreName',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'genreName',
    },
  },
})
