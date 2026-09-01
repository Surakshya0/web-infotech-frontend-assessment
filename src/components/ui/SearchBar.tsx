import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import Button from './Button'

const MAX_SUGGESTIONS = 5

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  suggestions: string[]
  onSubmit?: (query: string) => void
}

/**
 * SearchBar
 * Controlled search input with an inline icon, a submit button
 * and a client-side autocomplete dropdown.
 */
export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  suggestions,
  onSubmit,
}: SearchBarProps) {
  const [open, setOpen] = useState(false)

  const trimmed = value.trim()
  const matches = trimmed
    ? suggestions
        .filter((term) => term.toLowerCase().includes(trimmed.toLowerCase()))
        .slice(0, MAX_SUGGESTIONS)
    : []

  const showDropdown = open && matches.length > 0

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setOpen(false)
    onSubmit?.(trimmed)
  }

  function handleSelect(match: string) {
    onChange(match)
    setOpen(false)
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <SearchIcon
          size={20}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={value}
          onChange={(event) => {
            onChange(event.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setOpen(false)
            }
          }}
          placeholder={placeholder}
          aria-label="Search for a service"
          className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-heading placeholder:text-muted shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />

        {showDropdown && (
          <ul
            role="listbox"
            aria-expanded={showDropdown}
            className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-left shadow-lg transition-opacity duration-150"
          >
            {matches.map((match) => (
              <li key={match} role="option">
                <button
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleSelect(match)}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-body transition-colors hover:bg-surface hover:text-primary"
                >
                  <SearchIcon size={16} className="text-muted" />
                  {match}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full shrink-0 sm:w-auto">
        Search
      </Button>
    </form>
  )
}