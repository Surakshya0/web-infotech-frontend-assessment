import { Code2, Home } from 'lucide-react'
import type { ServiceCategory } from '../types'

/**
 * Seed data for the service/category cards section.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web-design',
    title: 'Web & Digital',
    description: 'Design, build and grow your online presence.',
    icon: Code2,
    iconColor: 'text-blue-600',
    backgroundColor: 'bg-blue-50',
  },
  {
    id: 'home-services',
    title: 'Home & Maintenance',
    description: 'Home repairs, cleaning and improvements.',
    icon: Home,
    iconColor: 'text-orange-600',
    backgroundColor: 'bg-orange-50',
  },
]
