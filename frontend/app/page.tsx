import type {Metadata} from 'next'
import Head from 'next/head'
import {getAlbumsQuery} from '@/sanity/lib/queries'
import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getHomePageQuery, pagesSlugs} from '@/sanity/lib/queries'
import {GetHomePageQueryResult, GetPageQueryResult} from '@/sanity.types'
import {PageOnboarding} from '@/app/components/Onboarding'
import {STORE_NAME} from '@/constants'
import SelectedAlbumsSection from './components/SelectedAlbumsSection'
import HeroSection from './components/HeroSection'

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
    params,
    // Metadata should never contain stega
    stega: false,
  })

  return {
    title: homePage?.title,
    description: homePage?.description,
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  // const [{data: homePage}] = await Promise.all([sanityFetch({query: getHomePageQuery, params})])
  const {data: homePage} = await sanityFetch({query: getHomePageQuery, params: {}})
  const {data: albums} = await sanityFetch({query: getAlbumsQuery, params: {}})

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
        <title>{homePage.title}</title>
      </Head>
      <div className="">
        <HeroSection {...homePage.hero}/>
        <div className="container">
          <div className="pb-6 border-b border-gray-100">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
                {homePage.title}
              </h2>
              <p className="mt-4 text-base lg:text-lg leading-relaxed text-gray-600 uppercase font-light">
                {homePage.description}
              </p>
            </div>
          </div>
          
        <SelectedAlbumsSection albums={albums}/>
        </div>
      </div>
      {/* <PageBuilderPage page={homePage as GetHomePageQueryResult} /> */}
    </div>
  )
}
