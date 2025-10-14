import Button from '../Button'

export default function SideBarFooter({
  children,
  actionLabel,
  action,
}: {
  children?: React.ReactNode
  actionLabel: string
  action: () => void
}) {
  return (
    <div className="p-4 border-t border-black/50">
      {children}
      <Button className="w-full" variant="secondary" onClick={action}>
        {actionLabel}
      </Button>
    </div>
  )
}
