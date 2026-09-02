import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { serviceCategories } from '../../data/serviceCategories'

export default function Categories() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Categories"
          title="Explore Services"
          description="Browse by category to find exactly what you need."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <article
                key={category.id}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.backgroundColor} ${category.iconColor}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-heading">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
                >
                  Browse services
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
