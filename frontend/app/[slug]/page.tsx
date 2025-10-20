import type {Metadata} from 'next'
import Head from 'next/head'

import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getPageQuery, pagesSlugs, getAlbumsQuery} from '@/sanity/lib/queries'
import {GetPageQueryResult} from '@/sanity.types'
import {PageOnboarding} from '@/app/components/Onboarding'
import {notFound} from 'next/navigation'
import SelectedAlbumsSection from '../components/SelectedAlbumsSection'
import {getAlbums} from '@/actions/getAlbums'

type Props = {
  params: Promise<{slug: string}>
}

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: pagesSlugs,
    // // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  // const [{data: page}, {data: albums}] = await Promise.all([
  //   sanityFetch({query: getPageQuery, params}),
  //   sanityFetch({query: getAlbumsQuery, params}),
  // ])

    const [{data: page}, albums] = await Promise.all([
      sanityFetch({query: getPageQuery, params}),
      getAlbums(),
    ])

  if (!page?._id) {
    return notFound()
  }

  return (
    <div className="my-12 lg:my-24">
      <Head>
        <title>{page.heading}</title>
      </Head>
      <PageBuilderPage page={page as GetPageQueryResult} albums={albums} />
    </div>
  )
}
