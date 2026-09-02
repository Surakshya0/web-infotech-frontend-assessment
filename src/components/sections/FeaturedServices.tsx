import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function FeaturedServices() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Explore Top Services"
          description="From home repairs to web design — compare, book, and get the job done."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.id}
                className="group rounded-xl border border-slate-200 bg-surface p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-heading">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
                >
                  Explore service
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
