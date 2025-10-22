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
      of: [
        {
          type: 'object',
          title: 'Link Group',
          name: 'linkGroup',
          fields: [
            {
              type: 'string',
              title: 'Group Title',
              name: 'linkGroupTitle',
              validation: (rule) => rule.required(),
            },
            {
              type: 'array',
              title: 'Links',
              name: 'links',
              of: [
                {
                  type: 'object',
                  name: 'link',
                  title: 'Link',
                  fields: [
                    {
                      type: 'string',
                      name: 'linkLabel',
                      description: 'The label that should show instead of the actual link itself.',
                      title: 'Link Label',
                      validation: (rule) => rule.required(),
                    },
                    {
                      type: 'string',
                      name: 'linkPath',
                      title: 'Link Path',
                      description:
                        "If it's a link to a page on this website, only use slug. If it's a link to an external website: use the full URL.",
                      validation: (rule) => rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
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
