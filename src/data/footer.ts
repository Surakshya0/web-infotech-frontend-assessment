import type { NavLink, FooterColumn } from '../types'

export const footerNav: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web & Digital', href: '#services' },
      { label: 'Home & Maintenance', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]
