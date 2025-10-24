import {Image} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const asset = defineType({
  name: 'asset',
  title: 'Asset',
  icon: Image,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
