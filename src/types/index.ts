import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface MegaMenuColumn {
  title: string
  links: NavLink[]
}

export interface MegaMenuItem {
  label: string
  icon: LucideIcon
  description: string
  href: string
  columns?: MegaMenuColumn[]
  featured?: MegaMenuItem
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: LucideIcon
  iconColor: string
  backgroundColor: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  category: string
  price: string
  featured?: boolean
  tags: string[]
}

export interface HowItWorksStep {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FooterColumn {
  title: string
  links: NavLink[]
}
