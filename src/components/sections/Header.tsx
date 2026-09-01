import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { navItems, servicesColumns } from '../../data/navigation'

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="Servexa home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-base font-bold text-white">
        S
      </span>
      <span className="text-xl font-bold tracking-tight text-heading">
        Servexa
      </span>
    </a>
  )
}

function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="services-mega-menu"
      role="region"
      aria-hidden={!open}
      inert={!open}
      className={`absolute left-1/2 top-full w-[40rem] -translate-x-1/2 pt-2 transition duration-200 ${
        open
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-1 opacity-0'
      }`}
    >
      <div className="grid grid-cols-3 gap-8 rounded-xl border border-slate-200 bg-white p-8 shadow-xl">
        {servicesColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              {column.title}
            </h3>
            <ul className="space-y-1">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-md px-3 py-2 text-sm text-body transition-colors hover:bg-surface hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function DesktopNav() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false)
      }
    }

    function handleClickOutside(event: MouseEvent) {
      const nav = navRef.current
      if (nav && !nav.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onMouseLeave={() => setServicesOpen(false)}
      className="relative hidden h-full items-center gap-1 md:flex"
    >
      {navItems.map((item) => {
        if (item.label === 'Services') {
          return (
            <div key={item.label} className="contents">
              <button
                type="button"
                onClick={() => setServicesOpen((current) => !current)}
                onMouseEnter={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                aria-controls="services-mega-menu"
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  servicesOpen
                    ? 'text-primary'
                    : 'text-body hover:text-primary'
                }`}
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )
        }

        return (
          <a
            key={item.label}
            href={item.href}
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-body transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        )
      })}

      <MegaMenu
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </nav>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
    setServicesOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        className="grid h-10 w-10 place-items-center rounded-lg text-heading transition-colors hover:bg-surface-alt/60 md:hidden"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-lg md:hidden"
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4">
            {navItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((current) => !current)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-surface hover:text-primary"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-200 ${
                        servicesOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 py-2 pl-3">
                          {servicesColumns.map((column) => (
                            <div key={column.title}>
                              <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted">
                                {column.title}
                              </h3>
                              <ul className="space-y-0.5">
                                {column.links.map((link) => (
                                  <li key={link.label}>
                                    <a
                                      href={link.href}
                                      onClick={closeMenu}
                                      className="block rounded-md px-2 py-2 text-sm text-body transition-colors hover:bg-surface hover:text-primary"
                                    >
                                      {link.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-surface hover:text-primary"
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
          <div className="border-t border-slate-100 px-4 py-4">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <DesktopNav />

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Log in</Button>
          <Button>Get Started</Button>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}