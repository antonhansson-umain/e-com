import Link from 'next/link'
import Logo from './Logo'
import {footerQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'

export default async function Footer() {
  const {data: footer} = await sanityFetch({
    query: footerQuery,
  })
  return (
    <footer className="bg-maroon text-white px-4 sm:px-20 py-16 sm:py-16 grid sm:grid-cols-[2fr_5fr] gap-16">
      <div className="flex flex-col gap-2">
        <Link href={'/'} className="w-max">
          <Logo />
        </Link>
        <p className="font-mono">{footer?.tagline}</p>
      </div>
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-16">
        {footer &&
          footer.linkGroups &&
          footer.linkGroups.map((group, index) => (
            <div key={group.linkGroupTitle + index}>
              <h3 className="uppercase mb-4">{group.linkGroupTitle}</h3>
              <ul className="space-y-2">
                {group.links &&
                  group.links.map((link) => (
                    <li key={link.linkLabel}>
                      <Link href={link.linkPath} className="hover:underline font-mono">
                        {link.linkLabel}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </footer>
  )
}
