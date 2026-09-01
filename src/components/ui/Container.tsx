import type { ReactNode } from 'react'

/**
 * Container
 * Reusable layout wrapper that centers content and applies
 * consistent horizontal padding. Responsive padding will be
 * refined when we build the sections.
 */
interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={className}>{children}</div>
}
