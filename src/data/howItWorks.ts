import { Search, UserCheck } from 'lucide-react'
import type { HowItWorksStep } from '../types'

/**
 * Seed data for the "How It Works" section.
 */
export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'search',
    title: 'Search for a service',
    description: 'Find the service you need from vetted professionals.',
    icon: Search,
  },
  {
    id: 'verified',
    title: 'Verified professionals',
    description: 'Every expert is background-checked and rated by customers.',
    icon: UserCheck,
  },
]
