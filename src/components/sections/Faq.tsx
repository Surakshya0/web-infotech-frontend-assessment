import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/faq'

/**
 * Faq
 * Stub — FAQ section will be built here.
 */
export default function Faq() {
  return (
    <section>
      <Accordion items={faqItems} />
    </section>
  )
}
