import Button from './Button'
import type {HeroSectionType} from '@/types/types'

type HeroSectionProps = {
  block: HeroSectionType

  index: number
}

export default function HeroSection({block}: HeroSectionProps) {
  const {title, description, ctaText, ctaLink, backgroundImage} = block
  const cleanSlug = ctaLink?.replace(/[\u200B-\u200D\uFEFF]/g, '') || ''

  return (
    <section
      className="relative max-w-full w-screen h-screen flex flex-col items-center justify-center text-center bg-cover bg-center p-4"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage?.url})` : undefined,
      }}
    >
      <h1 className="font-bg-header text-white font-bold">{title}</h1>
      <p className="font-text text-white my-6">{description}</p>
      <Button href={cleanSlug} variant="primary" size="sm">
        {ctaText}
      </Button>
    </section>
  )
}
// pt-22 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24
// w-full min-h-[85vh]
