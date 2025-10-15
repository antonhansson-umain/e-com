import {GetAlbumsQueryResult, GetHomePageQueryResult} from '@/sanity.types'

export type Album = GetAlbumsQueryResult[number]

export type HomePage = GetHomePageQueryResult
export type HeroSectionType = HomePage['hero']
