import {page} from './documents/page'
import {album} from './documents/album'
import {genre} from './documents/genre'
import {artist} from './documents/artist'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {country} from './documents/country'
import {homePage} from './singletons/homePage'
import {tag} from './documents/tag'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  homePage,
  // Documents
  page,
  country,
  genre,
  artist,
  album,
  tag,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
