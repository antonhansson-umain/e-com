import {Suspense} from 'react'
import {AllPosts} from '@/app/components/Posts'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <>
      <div className="relative">

        {/* background image */}
        <div className="relative bg-[url(/images/tile-1-black.png)] bg-size-[5px]">
          <div className="container">
            <div className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">Main header
                </h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* recent posts section */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  )
}
