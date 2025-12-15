'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface RevealTextProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function RevealText({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  duration = 1,
}: RevealTextProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    // Respetar preferencia de movimiento reducido del usuario
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        // Si el usuario prefiere movimiento reducido, mostrar elemento sin animación
        gsap.set(elementRef.current, { opacity: 1, y: 0, x: 0 })
        return
      }
    }

    // Configurar animación según dirección
    const animations: Record<string, gsap.TweenVars> = {
      up: { opacity: 0, y: 50 },
      down: { opacity: 0, y: -50 },
      left: { opacity: 0, x: -50 },
      right: { opacity: 0, x: 50 },
    }

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        ...animations[direction],
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none',
          // markers: process.env.NODE_ENV === 'development', // Descomentar para debug
        },
      })
    })

    // Cleanup
    return () => ctx.revert()
  }, [delay, direction, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
