export default function Brackets({children}: {children: React.ReactNode}) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline-flex">{'['}</span>
      {children}
      <span className="hidden sm:inline-flex">{']'}</span>
    </div>
  )
}
