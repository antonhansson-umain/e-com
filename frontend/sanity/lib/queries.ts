import {defineQuery} from 'next-sanity'
import test from 'node:test'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

// const postFields = /* groq */ `
//   _id,
//   "status": select(_originalId in path("drafts.**") => "draft", "published"),
//   "title": coalesce(title, "Untitled"),
//   "slug": slug.current,
//   excerpt,
//   coverImage,
//   "date": coalesce(date, _updatedAt),
//   "author": author->{firstName, lastName, picture},
// `

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

// export const getHomePageQuery = defineQuery(`
//   *[_type == 'homePage'][0]
// `)
export const getHomePageQuery = defineQuery(`*[_type == "homePage"][0]`)

// {
//     _id,
//     _type,
//     heading,
//     subheading,
//   }
// put this in getHomePageQuery
// "pageBuilder": pageBuilder[]{
//   ...,
//   _type == "callToAction" => {
//     ${linkFields},
//   },
//   _type == "infoSection" => {
//     content[]{
//       ...,
//       markDefs[]{
//         ...,
//         ${linkReference}
//       }
//     }
//   },
// },

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
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

// defined($genres) => count(genres[genreName in $genres]) > 0,
// !defined($genres) => true,
// defined($genres) => count([@ in $genres]) > 0,

export const getAlbumsQuery = defineQuery(`
  *[
    _type == "album" &&
    select(
      !defined(genres) => true,
      defined($genres) => count([@ in $genres]) > 0 && count((genres[]->genreName)[@ in $genres]) > 0,
      true
    )
  ]{
    _id,
    title,
    description,
    "artist": artist->artistName,
    genres[]->{genreName},
    price,
    "image": picture.asset->url
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
   }`)
