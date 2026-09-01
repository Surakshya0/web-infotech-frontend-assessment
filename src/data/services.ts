import { Code2, Home } from 'lucide-react'
import type { Service } from '../types'

/**
 * Seed data for the featured services section.
 */
export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Development',
    description: 'A dedicated developer will build a modern, responsive website.',
    icon: Code2,
    category: 'Web & Digital',
    price: 'From $450',
    featured: true,
    tags: ['React', 'Responsive'],
  },
  {
    id: 'home-cleaning',
    title: 'Deep Home Cleaning',
    description: 'Professional cleaners leave your home spotless.',
    icon: Home,
    category: 'Home & Maintenance',
    price: 'From $80',
    featured: true,
    tags: ['Eco-friendly'],
  },
]

export const trendingServices = services.filter((service) => service.featured)
