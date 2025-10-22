import {GetAlbumsQueryResult, GetPageQueryResult} from '@/sanity.types'

export type Album = GetAlbumsQueryResult[number]
export type PageType = GetPageQueryResult
export type PageBuilderItem = NonNullable<NonNullable<PageType>['pageBuilder']>[number]
export type HeroSectionType = Extract<PageBuilderItem, {_type: 'heroSection'}>
export type SelectedAlbumsSectionType = Extract<PageBuilderItem, {_type: 'selectedAlbumsSection'}>
