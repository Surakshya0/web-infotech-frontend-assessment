import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/faq'

export default function Faq() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Have Questions?"
          description="Find quick answers to the most common questions about using Servexa."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  )
}
