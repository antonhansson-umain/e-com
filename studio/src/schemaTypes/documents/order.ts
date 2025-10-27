import {defineField, defineType} from 'sanity'

export const order = defineType({
  name: 'order',
  title: 'Order',
  //   icon: Music,
  type: 'document',
  fields: [
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'orderItem'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'paid',
      options: {
        list: [
          {title: 'Paid', value: 'paid'},
          {title: 'Processing', value: 'processing'},
          {title: 'Shipped', value: 'shipped'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stripeCheckoutSessionId',
      title: 'Stripe Checkout Session ID',
      type: 'string',
      //   readOnly: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'customerEmail',
      subtitle: '_createdAt',
    },
  },
})
