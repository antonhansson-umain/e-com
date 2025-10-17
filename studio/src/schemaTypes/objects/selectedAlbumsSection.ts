// section title, section description, cta label, query?

import {defineField, defineType} from 'sanity'
import {ListMusic} from 'lucide-react'

export const selectedAlbumsSection = defineType({
  name: 'selectedAlbumsSection',
  title: 'Selected Albums Section',
  type: 'object',
  icon: ListMusic,

  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Selected Albums Section',
      }
    },
  },
})
