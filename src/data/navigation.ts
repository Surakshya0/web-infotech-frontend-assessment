import { Rocket, Sparkles } from 'lucide-react'
import type { MegaMenuItem } from '../types'

/**
 * Seed data for the header navigation. The mega menu will be
 * built and expanded in the Header section step.
 */
export const megaMenuData: MegaMenuItem[] = [
  {
    label: 'Services',
    href: '#services',
    icon: Sparkles,
    description: 'Browse all of our services',
    columns: [
      {
        title: 'Digital',
        links: [
          { label: 'Web Development', href: '#services' },
          { label: 'App Development', href: '#services' },
        ],
      },
    ],
  },
  {
    label: 'How it Works',
    href: '#how-it-works',
    icon: Rocket,
    description: 'Get started in three steps',
  },
]
