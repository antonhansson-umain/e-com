import SideBarFooter from '../SideBar/SideBarFooter'

export default function FilterSidebar() {
  return (
    <form className="h-full flex flex-col justify-between text-xl overflow-y-scroll">
      <div className="p-4 flex flex-col gap-4 overflow-y-scroll">
        <fieldset
          id="genres"
          name="genres"
          className="border-b border-black/25 py-4 flex flex-col gap-2"
        >
          <legend className="font-mono uppercase">Genres</legend>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="genre-Emo"
              value={'Emo'}
              name="genres"
              className="w-6 aspect-square"
            />
            <label htmlFor="genre-Emo">Emo</label>
          </div>
        </fieldset>
      </div>
      <SideBarFooter actionLabel="apply" />
    </form>
  )
}
