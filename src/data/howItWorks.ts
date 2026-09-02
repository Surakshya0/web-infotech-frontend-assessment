import { CalendarCheck, Search, UserCheck } from 'lucide-react'
import type { HowItWorksStep } from '../types'

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 'search',
    title: 'Search for a service',
    description: 'Find the service you need from vetted professionals.',
    icon: Search,
  },
  {
    id: 'choose',
    title: 'Choose a professional',
    description: 'Every expert is background-checked and rated by customers.',
    icon: UserCheck,
  },
  {
    id: 'book',
    title: 'Book & get it done',
    description: 'Schedule at your convenience and track the progress.',
    icon: CalendarCheck,
  },
]
