import {CogIcon, HomeIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import pluralize from 'pluralize-esm'
import {Album, Compass, Database, FootprintsIcon, MenuIcon} from 'lucide-react'

/**
 * Structure builder is useful whenever you want to control how documents are grouped and
 * listed in the studio or for adding additional in-studio previews or content to documents.
 * Learn more: https://www.sanity.io/docs/structure-builder-introduction
 */

const DISABLED_TYPES = ['settings', 'assist.instruction.context', 'homePage']

const PRODUCT_DOCUMENT_IDS = ['album']
const NAVIGATION_DOCUMENT_IDS = ['header', 'footer']
const DATA_DOCUMENT_IDS = ['genre', 'artist', 'country', 'tag']

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      // Navigation
      S.listItem()
        .title('Navigation')
        .icon(Compass)
        .child(
          S.list()
            .title('Navigation Elements')
            .items([
              S.listItem()
                .title('Header')
                .child(S.document().schemaType('header').documentId('elementHeader'))
                .icon(MenuIcon),
              S.listItem()
                .title('Footer')
                .child(S.document().schemaType('footer').documentId('elementFooter'))
                .icon(FootprintsIcon),
            ]),
        ),
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homePage').documentId('siteHome'))
        .icon(HomeIcon),
      ...S.documentTypeListItems()
        // Remove the "assist.instruction.context" and "settings" content  from the list of content types
        .filter(
          (listItem: any) =>
            ![DISABLED_TYPES, DATA_DOCUMENT_IDS, NAVIGATION_DOCUMENT_IDS, PRODUCT_DOCUMENT_IDS]
              .flat()
              .includes(listItem.getId()),
        )
        // Pluralize the title of each document type.  This is not required but just an option to consider.
        .map((listItem) => {
          return listItem.title(pluralize(listItem.getTitle() as string))
        }),
      S.divider(),
      // Data
      S.listItem()
        .title('Data')
        .icon(Database)
        .child(
          S.list()
            .title('Database')
            .items([
              ...S.documentTypeListItems()
                .filter((listItem: any) => DATA_DOCUMENT_IDS.includes(listItem.getId()))
                .map((listItem) => {
                  return listItem.title(pluralize(listItem.getTitle() as string))
                }),
            ]),
        ),
      // Products
      S.listItem()
        .title('Products')
        .icon(Album)
        .child(
          S.list()
            .title('Products')
            .items([
              ...S.documentTypeListItems()
                .filter((listItem: any) => PRODUCT_DOCUMENT_IDS.includes(listItem.getId()))
                .map((listItem) => {
                  return listItem.title(pluralize(listItem.getTitle() as string))
                }),
            ]),
        ),
      S.divider(),
      // Settings Singleton in order to view/edit the one particular document for Settings.  Learn more about Singletons: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('settings').documentId('siteSettings'))
        .icon(CogIcon),
    ])
