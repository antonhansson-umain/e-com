import {Link} from 'lucide-react'
import {defineType, defineField} from 'sanity'

export const navLink = defineType({
  type: 'object',
  title: 'Navlink',
  name: 'navLink',
  icon: Link,
  fields: [
    defineField({
      type: 'string',
      name: 'linkLabel',
      description: 'The label that should show instead of the actual link itself.',
      title: 'Link Label',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'linkPath',
      title: 'Link Path',
      description:
        "If it's a link to a page on this website, only use slug. If it's a link to an external website: use the full URL.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'linkLabel',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: 'Nav Link',
      }
    },
  },
})
