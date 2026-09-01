import type { ReactNode } from 'react'

/**
 * Container
 * Centers content and applies consistent responsive horizontal padding.
 */
interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}