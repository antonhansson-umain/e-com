import {TAGLINE} from '@/constants'
import Link from 'next/link'

export default function Footer() {
  const columns = [
    {
      title: 'Categories',
      links: [
        {
          path: '/shop',
          label: 'All records',
        },
        {
          path: '/shop/featured',
          label: 'Featured',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        {
          path: '/orders',
          label: 'Orders',
        },
        {
          path: '/support',
          label: 'Support',
        },
        {
          path: '/privacy',
          label: 'Privacy Policy',
        },
      ],
    },
    {
      title: 'Contact',
      links: [
        {
          path: 'mailto:hi@umain-ecom.com',
          label: 'hi@umain-ecom.com',
        },
        {
          path: 'tel:+46700000000',
          label: '070-000 00 00',
        },
        {
          path: 'https://maps.app.goo.gl/dEefnU1XW1ETcK6b9',
          label: 'Grev Turegatan 1, 114 46 Stockholm',
        },
      ],
    },
  ]
  return (
    <footer className="bg-maroon text-white px-4 sm:px-20 py-16 sm:py-16  grid lg:grid-cols-[2fr_3fr] gap-y-16">
      <div>
        <div>WOW</div>
        <p className="font-mono">{TAGLINE}</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-16">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="uppercase mb-4">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="hover:underline font-mono">
                    {link.label}
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
