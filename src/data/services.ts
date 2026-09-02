import { Code2, Home, Monitor, Palette, Wrench, Zap } from 'lucide-react'
import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'home-cleaning',
    title: 'Home Cleaning',
    description:
      'Professional cleaners leave your home spotless with eco-friendly products.',
    icon: Home,
    category: 'Home & Maintenance',
    price: 'From $80',
    tags: ['Eco-friendly', 'Same-day'],
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description:
      'Licensed plumbers handle leaks, installations, and emergency repairs.',
    icon: Wrench,
    category: 'Home & Maintenance',
    price: 'From $95',
    tags: ['Licensed', 'Emergency'],
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description:
      'Certified electricians for wiring, fixtures, and safety inspections.',
    icon: Zap,
    category: 'Home & Maintenance',
    price: 'From $110',
    tags: ['Certified', 'Insured'],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'A dedicated developer builds a modern, responsive website for your business.',
    icon: Code2,
    category: 'Web & Digital',
    price: 'From $450',
    tags: ['React', 'Responsive'],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Creative designers craft logos, branding, and marketing materials.',
    icon: Palette,
    category: 'Web & Digital',
    price: 'From $200',
    tags: ['Branding', 'Print'],
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description:
      'Expert technicians troubleshoot hardware, software, and network issues.',
    icon: Monitor,
    category: 'Web & Digital',
    price: 'From $60',
    tags: ['Remote', 'On-site'],
  },
]

export const trendingServices = services.filter((service) => service.featured)
