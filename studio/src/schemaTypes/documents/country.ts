import {defineField, defineType} from 'sanity'

export const country = defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    defineField({
      name: 'countryName',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      countryName: 'countryName',
    },
    prepare(selection) {
      return {
        title: selection.countryName,
      }
    },
  },
})
