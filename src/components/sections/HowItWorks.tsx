import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { howItWorksSteps } from '../../data/howItWorks'

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Get Started in 3 Steps"
          description="Finding and booking a service is quick and simple."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.id} className="text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-semibold text-heading">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
