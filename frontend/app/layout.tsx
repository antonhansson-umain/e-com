import './globals.css'

import localFont from 'next/font/local'
import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {draftMode} from 'next/headers'
import {VisualEditing, toPlainText} from 'next-sanity'
import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import * as demo from '@/sanity/lib/demo'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'
import {handleError} from './client-utils'

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  })
  const title = settings?.title || demo.title
  const description = settings?.description || demo.description

  const ogImage = resolveOpenGraphImage(settings?.ogImage)
  let metadataBase: URL | undefined = undefined
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const GTPressuraTrialMono = localFont({
  src: '../fonts/GT-Pressura-Mono-Regular-Trial.woff2',
})

const GTPressuraTrial = localFont({
  src: [
    {
      path: '../fonts/GT-Pressura-Extended-Bold-Trial.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/GT-Pressura-Extended-Text-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <html
      lang="en"
      className={` ${GTPressuraTrialMono.className}  ${GTPressuraTrial.className} bg-white text-black`}
    >
      <body>
        <section className="min-h-screen pt-24 sm:pt-32 relative">
          {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
          <SanityLive onError={handleError} />
          <Header />
          <main className="">{children}</main>
          <Footer />
        </section>
        <SpeedInsights />
        <DraftModeToast />
      </body>
    </html>
  )
}
