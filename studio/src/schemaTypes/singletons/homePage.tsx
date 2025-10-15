// import {defineField, defineType} from 'sanity'

// /**
//  * Page schema.  Define and edit the fields for the 'page' content type.
//  * Learn more: https://www.sanity.io/docs/schema-types
//  */

// export const homePage = defineType({
//   name: 'homePage',
//   title: 'Home Page',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'heading',
//       title: 'Heading',
//       type: 'string',
//       initialValue: 'Welcome to Wow Records',
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: 'subheading',
//       title: 'Subheading',
//       initialValue: 'Wows or Woes.',
//       type: 'string',
//     }),
//     // defineField({
//     //   name: 'pageBuilder',
//     //   title: 'Page builder',
//     //   type: 'array',
//     //   of: [{type: 'callToAction'}, {type: 'infoSection'}],
//     //   options: {
//     //     insertMenu: {
//     //       // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/array-type#efb1fe03459d
//     //       views: [
//     //         {
//     //           name: 'grid',
//     //           previewImageUrl: (schemaTypeName) =>
//     //             `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
//     //         },
//     //       ],
//     //     },
//     //   },
//     // }),
//   ],
//   preview: {
//     prepare() {
//       return {
//         title: 'Home Page',
//       }
//     },
//   },
// })
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
      name: 'description',
      description: 'Used on the Homepage',
      title: 'Description',
      type: 'string',
      initialValue: 'Wows or Woes.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero section',
      type: 'heroSection',
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
