import {defineQuery} from 'next-sanity'
import test from 'node:test'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

export const footerQuery = defineQuery(`
  *[_type == "footer"][0]{
    tagline,
    linkGroups[]{
      linkGroupTitle,
      links[]{
        linkLabel,
        linkPath
      }
  }}
`)

export const headerQuery = defineQuery(`
  *[_type == "header"][0]{
    linkGroups
  }
`)

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    // "post": post->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`

export const getPageQuery = defineQuery(`
*[_type == "page" && slug.current == $slug][0]{
  _id,
  _type,
  name,
  slug,
  heading,
  subheading,
  "pageBuilder": pageBuilder[]{
      ...,
      _type == "selectedAlbumsSection" => {
      ...,
      "tag": tag[]->{_id, title},
      "related": {
      "albums": *[
        _type == "album" &&
        count(tags[]._ref[@ in ^.tag[]._ref]) > 0
      ][0...2]{
      _id,
      title,
      description,
      "artist": artist->artistName,
      genres[]->{genreName},
      "tags": tags[]->_id,
      price,
      picture, 
        }
      }
    }
  }
}
`)

export const getHomePageQuery = defineQuery(`
  *[_type == 'homePage'][0]{
    _id, // apparently required
    _type, // apparently required
    title,
    subtitle,
    cta,
    ctaHref,
    image,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "selectedAlbumsSection" => {
      ...,
      "tag": tag[]->{_id, title},
      "related": {
      "albums": *[
        _type == "album" &&
        count(tags[]._ref[@ in ^.tag[]._ref]) > 0
      ][0...2]{
      _id,
      title,
      description,
      "artist": artist->artistName,
      genres[]->{genreName},
      "tags": tags[]->_id,
      price,
      picture, 
        }
      }
    }
  }
}
`)

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)

export const getAlbumsQuery = defineQuery(`
  *[
    _type == "album" &&
    select(
      !defined($genres) => true,
      defined($genres) => count([@ in $genres]) > 0 && count((genres[]->genreName)[@ in $genres]) > 0,
      true
    ) &&
    select(
      !defined($countries) => true,
      defined($countries) => count([@ in $countries]) > 0 && artist->Country->isoCode in $countries,
      true
    )
  ] | order(
      select(
      $sortBy == "price-high" => -price,
      $sortBy == "price-low" => price,
      true => _createdAt
    ) asc
    )
  {
    _id,
    title,
    description,
    "artist": artist->artistName,
    genres[]->{genreName},
    price,
    picture, // will be using urlForImage()
  }
`)

export const getAlbumById = defineQuery(`
   *[_type == 'album' && _id == $id][0]{
    _id,
    description,
    "genres": genres[]->genreName,
    title,
    "artist": artist->artistName,
    price,
    "image": picture.asset->url
  }
  `)

export const getGenresQuery = defineQuery(`
*[_type == 'genre']{
  "label": genreName,
  "value": genreName
}
`)

export const getCountriesQuery = defineQuery(`
  *[_type == 'country']{
    "label": flag + " " + name,
    "value": isoCode
  }
  `)

  