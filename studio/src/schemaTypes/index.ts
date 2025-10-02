import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {album} from './documents/album'
import {genre} from './documents/genre'
import {artist} from './documents/artist'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {country} from './documents/country'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Demo Documents
  page,
  post,
  person,
  // Actual Documents
  country,
  genre,
  artist,
  album,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
