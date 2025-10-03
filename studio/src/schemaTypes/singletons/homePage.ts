// import {CogIcon} from '@sanity/icons'
// import {defineArrayMember, defineField, defineType} from 'sanity'

// import * as demo from '../../lib/initialValues'

// /**
//  * Settings schema Singleton.  Singletons are single documents that are displayed not in a collection, handy for things like site settings and other global configurations.
//  * Learn more: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
//  */

// export const homePage = defineType({
//   name: 'homePage',
//   title: 'Home Page',
//   type: 'document',
//   icon: CogIcon,
//   fields: [
//     defineField({
//       name: 'title',
//       description: 'This field is the title of your blog.',
//       title: 'Title',
//       type: 'string',
//       initialValue: demo.title,
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'description',
//       description: 'Used on the Homepage',
//       title: 'Description',
//       type: 'array',
//       initialValue: demo.description,
//       of: [
//         // Define a minified block content field for the description. https://www.sanity.io/docs/block-content
//         defineArrayMember({
//           type: 'block',
//           options: {},
//           styles: [],
//           lists: [],
//           marks: {
//             decorators: [],
//             annotations: [
//               {
//                 name: 'link',
//                 type: 'object',
//                 title: 'Link',
//                 fields: [
//                   defineField({
//                     name: 'linkType',
//                     title: 'Link Type',
//                     type: 'string',
//                     initialValue: 'href',
//                     options: {
//                       list: [
//                         {title: 'URL', value: 'href'},
//                         {title: 'Page', value: 'page'},
//                         {title: 'Post', value: 'post'},
//                       ],
//                       layout: 'radio',
//                     },
//                   }),
//                   defineField({
//                     name: 'href',
//                     title: 'URL',
//                     type: 'url',
//                     hidden: ({parent}) => parent?.linkType !== 'href' && parent?.linkType != null,
//                     validation: (Rule) =>
//                       Rule.custom((value, context: any) => {
//                         if (context.parent?.linkType === 'href' && !value) {
//                           return 'URL is required when Link Type is URL'
//                         }
//                         return true
//                       }),
//                   }),
//                   // defineField({
//                   //   name: 'page',
//                   //   title: 'Page',
//                   //   type: 'reference',
//                   //   to: [{type: 'page'}],
//                   //   hidden: ({parent}) => parent?.linkType !== 'page',
//                   //   validation: (Rule) =>
//                   //     Rule.custom((value, context: any) => {
//                   //       if (context.parent?.linkType === 'page' && !value) {
//                   //         return 'Page reference is required when Link Type is Page'
//                   //       }
//                   //       return true
//                   //     }),
//                   // }),
//                   // defineField({
//                   //   name: 'post',
//                   //   title: 'Post',
//                   //   type: 'reference',
//                   //   to: [{type: 'post'}],
//                   //   hidden: ({parent}) => parent?.linkType !== 'post',
//                   //   validation: (Rule) =>
//                   //     Rule.custom((value, context: any) => {
//                   //       if (context.parent?.linkType === 'post' && !value) {
//                   //         return 'Post reference is required when Link Type is Post'
//                   //       }
//                   //       return true
//                   //     }),
//                   // }),
//                   defineField({
//                     name: 'openInNewTab',
//                     title: 'Open in new tab',
//                     type: 'boolean',
//                     initialValue: false,
//                   }),
//                 ],
//               },
//             ],
//           },
//         }),
//       ],
//     }),
//     defineField({
//       name: 'ogImage',
//       title: 'Open Graph Image',
//       type: 'image',
//       description: 'Displayed on social cards and search engine results.',
//       options: {
//         hotspot: true,
//         aiAssist: {
//           imageDescriptionField: 'alt',
//         },
//       },
//       fields: [
//         defineField({
//           name: 'alt',
//           description: 'Important for accessibility and SEO.',
//           title: 'Alternative text',
//           type: 'string',
//           validation: (rule) => {
//             return rule.custom((alt, context) => {
//               if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
//                 return 'Required'
//               }
//               return true
//             })
//           },
//         }),
//       ],
//     }),
//   ],
//   preview: {
//     prepare() {
//       return {
//         title: 'Home Page',
//       }
//     },
//   },
// })

import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [{type: 'callToAction'}, {type: 'infoSection'}],
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/array-type#efb1fe03459d
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
    select: {
      name: 'name',
      slug: 'slug',
    },
    prepare(selection) {
      return {
        title: selection.name,
        subtitle: `/${selection?.slug.current ?? ''}`,
      }
    },
  },
})
