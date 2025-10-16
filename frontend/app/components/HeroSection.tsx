import Button from './Button'
import type { HeroSectionType } from '@/types/types'

type HeroSectionProps = {
    block: HeroSectionType
    index: number
}

export default function HeroSection({block}: HeroSectionProps) {
    const { title, description, ctaText, ctaLink, backgroundImage } = block

    console.log("background image: ", backgroundImage)

  return (
    <section className='h-[8rem] w-full'
      style={{
        backgroundImage: backgroundImage ? `url(${block.backgroundImage?.url})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >  
      <h1>{title}</h1>
      <p>{description}</p>
      <Button href={ctaLink}>{ctaText}</Button>
    </section>
  )
}


