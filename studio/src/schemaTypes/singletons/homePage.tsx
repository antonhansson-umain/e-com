import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

/**
 * Settings schema Singleton.  Singletons are single documents that are displayed not in a collection, handy for things like site settings and other global configurations.
 * Learn more: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
 */

export const homePage = defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your home page.',
      title: 'Title',
      type: 'string',
      initialValue: 'Welcome to Wow Records',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      description: 'Appears below title.',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Wows or Woes.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cta',
      description: 'Label for CTA button',
      title: 'Call-To-Action',
      type: 'string',
      initialValue: 'Shop Now',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      description: 'Path for CTA button',
      title: 'Call-To-Action Path',
      type: 'string',
      initialValue: '/shop',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      description: 'Background image.',
      title: 'Hero Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [{type: 'selectedAlbumsSection'}],
      options: {
        insertMenu: {
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
