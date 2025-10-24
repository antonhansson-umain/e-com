import {defineType, defineField} from 'sanity'

export const orderItem = defineType({
  type: 'object',
  title: 'Order Item',
  name: 'orderItem',
  fields: [
    defineField({
      type: 'reference',
      to: [{type: 'album'}],
      name: 'item',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'quantity',
      title: 'Quantity',
      initialValue: 1,
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'item.title',
      subtitle: 'quantity',
      media: 'item.picture',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: selection.media,
      }
    },
  },
})
