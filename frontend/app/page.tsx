import type {Metadata} from 'next'
// import Head from 'next/head'
import {getHomePageQuery, pagesSlugs} from '@/sanity/lib/queries'
import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {STORE_NAME} from '@/constants'
import {getAlbums} from '@/actions/getAlbums'
import Button from './components/Button'
import {notFound} from 'next/navigation'
import {urlForImage} from '@/sanity/lib/utils'

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
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const params = await props.params
//   const {data: homePage} = await sanityFetch({
//     query: getHomePageQuery,
//     params,
//     stega: false,
//   })

//   return {
//     title: homePage?.title ?? STORE_NAME,
//     description: homePage?.subtitle,
//   } satisfies Metadata
// }

export default async function Page(props: Props) {
  const params = await props.params

  const [{data: homePage}, albums] = await Promise.all([
    sanityFetch({query: getHomePageQuery, params}),
    getAlbums(),
  ])

  if (!homePage) return notFound()

  return (
    <>
      <section
        className="!max-w-full w-screen h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center !p-4"
        style={{
          backgroundImage: homePage.image
            ? `url(${urlForImage(homePage.image)?.minWidth(320).minHeight(667)})`
            : undefined,
        }}
      >
        <h1 className="font-bg-header">{homePage.title}</h1>
        <p className="font-text text-white my-6">{homePage.subtitle}</p>
        <Button href={homePage.ctaHref}>{homePage.cta}</Button>
      </section>
      <PageBuilderPage page={homePage} albums={albums} />
    </>
  )
}
