import {GetAlbumsQueryResult, GetPageQueryResult} from '@/sanity.types'

export type Album = GetAlbumsQueryResult[number]

// export type HomePage = GetHomePageQueryResult
// export type HeroSectionType = HomePage['hero']

export type PageType = GetPageQueryResult
export type HeroSectionType = PageType['heroSection']

  