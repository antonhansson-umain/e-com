import {Group} from 'lucide-react'
import {defineType, defineField} from 'sanity'

export const linkGroup = defineType({
  type: 'object',
  title: 'Link Group',
  icon: Group,
  name: 'linkGroup',
  fields: [
    defineField({
      type: 'string',
      title: 'Group Title',
      name: 'linkGroupTitle',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      title: 'Links',
      name: 'links',
      of: [{type: 'navLink'}],
    }),
  ],
  preview: {
    select: {
      title: 'linkGroupTitle',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: 'Link Group',
      }
    },
  },
})
