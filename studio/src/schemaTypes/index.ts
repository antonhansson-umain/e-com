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
import {heroSection} from './objects/heroSection'
import {selectedAlbumsSection} from './objects/selectedAlbumsSection'
import {footer} from './singletons/footer'
import {header} from './singletons/header'
import {navLink} from './objects/navLink'
import {linkGroup} from './objects/linkGroup'
import {order} from './documents/order'
import {orderItem} from './objects/orderItem'
import {asset} from './documents/asset'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  homePage,
  header,
  footer,
  // Documents
  page,
  country,
  genre,
  artist,
  album,
  tag,
  order,
  asset,
  // Objects
  heroSection,
  selectedAlbumsSection,
  blockContent,
  infoSection,
  callToAction,
  link,
  navLink,
  linkGroup,
  orderItem,
]
