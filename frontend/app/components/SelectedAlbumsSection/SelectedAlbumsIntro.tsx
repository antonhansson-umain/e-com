import Button from '../Button'

interface SelectedAlbumsIntroProps {
  sectionTitle: string
  sectionDescription: string
  label: string
}

export default function SelectedAlbumsIntro({
  sectionTitle,
  sectionDescription,
  label,
}: SelectedAlbumsIntroProps) {
  return (
    <aside className="grid grid-rows-[1fr_0.5fr] gap-4">
      <div>
        <h2 className="font-sm-header">{sectionTitle}</h2>
        <p className="font-text">{sectionDescription}</p>
      </div>
      <Button size="sm" variant="primary" className="justify-self-start">
        {label}
      </Button>
    </aside>
  )
}