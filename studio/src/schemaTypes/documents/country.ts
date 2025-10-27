import {EarthGlobeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const country = defineType({
  name: 'country',
  title: 'Country',
  icon: EarthGlobeIcon,
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'flag',
      title: 'Flag Emoji',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isoCode',
      title: 'ISO Code',
      type: 'string',
      validation: (rule) => rule.required().min(2).max(2),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      flag: 'flag',
      isoCode: 'isoCode',
    },
    prepare(selection) {
      return {
        title: `${selection.flag} ${selection.name}`,
        subtitle: selection.isoCode,
      }
    },
  },
})
