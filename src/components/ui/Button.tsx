import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Button
 * Reusable button primitive. Intentional but minimal —
 * variants/styles will be added when we build the sections.
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}
