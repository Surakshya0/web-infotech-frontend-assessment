import { useState } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SearchBar from '../ui/SearchBar'
import { popularSearches, searchTerms } from '../../data/search'

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container className="text-center">
        <div className="animate-fade-up">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Find the right <span className="text-primary">service for you</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Connect with verified local experts for home, business, and digital services.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="What service are you looking for?"
              suggestions={searchTerms}
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <TrendingUp size={16} className="text-accent" />
              Popular:
            </span>
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-body transition-colors hover:border-primary hover:text-primary"
              >
                {term}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <Button size="lg">
              <ArrowRight size={18} />
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}