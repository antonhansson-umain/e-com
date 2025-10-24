import {defineField, defineType} from 'sanity'
import {Disc} from 'lucide-react'

export const selectedAlbumsSection = defineType({
  name: 'selectedAlbumsSection',
  title: 'Selected Albums Section',
  type: 'object',
  icon: Disc,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Filter by Tag',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      description: 'Display albums with this tag'
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button link',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
