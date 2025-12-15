'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { id: 'home', label: 'Inicio', href: '/' },
  { id: 'historia', label: 'Historia', href: '/historia' },
  { id: 'menu', label: 'Menú', href: '/menu' },
  { id: 'vinos', label: 'Vinos', href: '/vinos' },
  { id: 'reservas', label: 'Reservas', href: '/reservas' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const ticking = useRef(false)

  // Detectar scroll con throttle usando requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50)
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Cerrar menú al cambiar de página
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevenir scroll cuando menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500',
          scrolled
            ? 'py-4 bg-cream/95 backdrop-blur-md shadow-sm'
            : 'py-8 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'text-2xl font-serif tracking-widest font-bold z-50 transition-colors duration-300 cursor-pointer hover:opacity-80',
              scrolled || isMenuOpen ? 'text-black' : 'text-white',
              isMenuOpen && '!text-cream'
            )}
          >
            LUNE
          </Link>

          {/* Desktop Navigation */}
          <div
            className={cn(
              'hidden lg:flex space-x-8 xl:space-x-12 text-sm tracking-widest uppercase font-medium whitespace-nowrap',
              scrolled ? 'text-black' : 'text-white'
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-gold',
                  pathname === link.href && 'text-gold border-b border-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'lg:hidden z-50 p-3 focus:outline-none transition-colors active:scale-95',
              scrolled || isMenuOpen ? 'text-black' : 'text-white',
              isMenuOpen && '!text-cream'
            )}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-[#0F0F0F] text-cream z-40 flex flex-col justify-center items-center transition-transform duration-300 md:duration-700 ease-in-out',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex flex-col space-y-8 text-center font-serif text-3xl">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                'hover:text-gold transition-colors',
                pathname === link.href && 'text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
