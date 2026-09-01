import type { FooterColumn } from '../types'

/**
 * Seed data for the footer link columns.
 */
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
      { label: 'About us', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]
