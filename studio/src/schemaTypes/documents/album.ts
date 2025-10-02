import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const album = defineType({
  name: 'album',
  title: 'Album',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: "A slug is required for the product's detail page",
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(99),
    }),
    defineField({
      name: 'picture',
      title: 'Album Art',
      type: 'image',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'number',
      validation: (rule) => rule.required().min(6).max(12),
    }),
    defineField({
      name: 'articleNumber',
      title: 'Article Number',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'artist'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'genre'}],
        },
      ],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artistName: 'artist.artistName',
      picture: 'picture',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.artistName,
        media: selection.picture,
      }
    },
  },
})
