import Button from './Button'
import type { HeroSectionType } from '@/types/types'

export default function HeroSection(props: HeroSectionType) {
    const { title, description, ctaText, backgroundImage } = props

  return (
    <section
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>{ctaText}</Button>
    </section>
  )
}
