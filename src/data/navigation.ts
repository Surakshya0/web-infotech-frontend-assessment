import type { NavLink, MegaMenuColumn } from '../types'

/**
 * Top-level navigation items. Services opens the mega menu,
 * the rest are simple links.
 */
export const navItems: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

/**
 * Three columns of service categories shown in the Services
 * mega menu and the mobile Services submenu.
 */
export const servicesColumns: MegaMenuColumn[] = [
  {
    title: 'Digital & Design',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'App Development', href: '#services' },
      { label: 'Graphic Design', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
    ],
  },
  {
    title: 'Home & Lifestyle',
    links: [
      { label: 'Repairs & Maintenance', href: '#services' },
      { label: 'Cleaning', href: '#services' },
      { label: 'Beauty & Salon', href: '#services' },
      { label: 'Moving & Delivery', href: '#services' },
    ],
  },
  {
    title: 'Business & More',
    links: [
      { label: 'Consulting', href: '#services' },
      { label: 'Legal Services', href: '#services' },
      { label: 'Photography', href: '#services' },
      { label: 'Personal Training', href: '#services' },
    ],
  },
]