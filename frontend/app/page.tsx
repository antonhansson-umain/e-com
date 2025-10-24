import {getHomePageQuery, pagesSlugs} from '@/sanity/lib/queries'
import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getAlbums} from '@/actions/getAlbums'
import Button from './components/Button'
import {notFound} from 'next/navigation'
import {urlForImage} from '@/sanity/lib/utils'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: pagesSlugs,
    perspective: 'published',
    stega: false,
  })
  return data
}

export default async function Page(props: Props) {
  const params = await props.params

  const { data: homePage } = await sanityFetch({
    query: getHomePageQuery, 
    params,
  })
  
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
      <PageBuilderPage page={homePage} />
    </>
  )
}
