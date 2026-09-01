import { useState } from 'react'
import type { FaqItem } from '../../types'

/**
 * Accordion
 * Minimal functional accordion component.
 * Reused later for the interactive FAQ section.
 */
interface AccordionProps {
  items: FaqItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button type="button" onClick={() => toggle(item.id)}>
              {item.question}
            </button>
            {isOpen && <p>{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
