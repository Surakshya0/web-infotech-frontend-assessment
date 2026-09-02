import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Cta() {
  return (
    <section className="bg-primary py-16 sm:py-20 lg:py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to find the right service?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Join thousands of customers who find the right expert for any task —
          quickly, easily, and stress-free.
        </p>

        <div className="mt-8">
          <Button variant="white" size="lg">
            Get Started
            <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </section>
  )
}
