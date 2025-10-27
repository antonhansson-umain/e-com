import {Filters} from '@/types/Filters'

export function formatFilters(rawFilters: {[key: string]: string | string[] | undefined}): Filters {
  const filters: Record<string, string[] | null> = {}
  Object.entries(rawFilters).forEach(([k, v]) => {
    filters[k] = formatFilterValue(v)
  })
  return filters
}

function formatFilterValue(rawFilterValue: string | string[] | undefined) {
  if (!rawFilterValue) return null
  if (Array.isArray(rawFilterValue)) {
    return rawFilterValue.flatMap((s) => s.split(','))
  }
  return [rawFilterValue.split(',')].flat()
}
