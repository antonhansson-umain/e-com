import type {Metadata} from 'next'
import Head from 'next/head'
import {getAlbumsQuery, getHomePageQuery, pagesSlugs} from '@/sanity/lib/queries'
import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {PageOnboarding} from '@/app/components/Onboarding'
import {STORE_NAME} from '@/constants'
import SelectedAlbumsSection from './components/SelectedAlbumsSection'
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
  const {data: homePage} = await sanityFetch({
    query: getHomePageQuery,
    params: {slug: 'home'},
    stega: false,
  })

  return {
    title: homePage?.heading ?? STORE_NAME,
    description: homePage?.subheading,
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params

  const [{data: homePage}, albums] = await Promise.all([
    sanityFetch({query: getHomePageQuery, params}),
    getAlbums(),
  ])

  // const [{data: homePage}] = await Promise.all([sanityFetch({query: getHomePageQuery, params})])
  //   const [{data: albums}] = await Promise.all([sanityFetch({query: getAlbumsQuery, params})])
  // const albums = await getAlbums()

  if (!homePage?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{homePage.heading}</title>
      </Head>
      <div className="">
        <PageBuilderPage page={homePage} albums={albums} />
        <div className="container">
          <div className="pb-6 border-b border-gray-100">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                {homePage.heading}
              </h2>
              <p className="mt-4 text-base lg:text-lg leading-relaxed text-gray-600 uppercase font-light">
                {homePage.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
