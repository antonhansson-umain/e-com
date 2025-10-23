import {GetAlbumsQueryResult, GetPageQueryResult, LinkGroup, NavLink} from '@/sanity.types'

export type Album = GetAlbumsQueryResult[number]
export type PageType = GetPageQueryResult
export type PageBuilderItem = NonNullable<NonNullable<PageType>['pageBuilder']>[number]
export type HeroSectionType = Extract<PageBuilderItem, {_type: 'heroSection'}>
export type SelectedAlbumsSectionType = Extract<PageBuilderItem, {_type: 'selectedAlbumsSection'}>
export type HeaderLinkGroups = (
  | (LinkGroup & {
      links?: NavLink[]
    })
  | NavLink
)[]
export type NavGroup = LinkGroup & {links: NavLink[]}
