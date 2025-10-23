import {GetAlbumsQueryResult, GetPageQueryResult} from '@/sanity.types'

export type Album = GetAlbumsQueryResult[number]
// export type Album = Omit<GetAlbumsQueryResult[number], 'genres'> & {
//   genres: string[]
// }
export type PageType = GetPageQueryResult
export type PageBuilderItem = NonNullable<NonNullable<PageType>['pageBuilder']>[number]
export type HeroSectionType = Extract<PageBuilderItem, {_type: 'heroSection'}>
export type SelectedAlbumsSectionType = Extract<
  PageBuilderItem,
  {_type: 'selectedAlbumsSection'}
> & {related?: {albums: Album[]} | null}
