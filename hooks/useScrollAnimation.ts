'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationConfig {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  scrollTrigger?: ScrollTrigger.Vars
  duration?: number
  delay?: number
  ease?: string
}

/**
 * Hook personalizado para animaciones de scroll con GSAP
 * @param config - Configuración de la animación
 * @returns ref - Referencia al elemento DOM a animar
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  config: ScrollAnimationConfig
) {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    if (!elementRef.current) return

    // Respetar preferencia de movimiento reducido del usuario
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        // Si el usuario prefiere movimiento reducido, aplicar estilos finales sin animación
        if (config.to) {
          gsap.set(elementRef.current, config.to)
        } else {
          gsap.set(elementRef.current, { opacity: 1, y: 0, x: 0 })
        }
        return
      }
    }

    const ctx = gsap.context(() => {
      const element = elementRef.current

      if (config.from) {
        gsap.from(element, {
          ...config.from,
          duration: config.duration ?? 1,
          delay: config.delay ?? 0,
          ease: config.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
            ...config.scrollTrigger,
          },
        })
      }

      if (config.to) {
        gsap.to(element, {
          ...config.to,
          duration: config.duration ?? 1,
          delay: config.delay ?? 0,
          ease: config.ease ?? 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
            ...config.scrollTrigger,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [
    config.from,
    config.to,
    config.scrollTrigger,
    config.duration,
    config.delay,
    config.ease,
  ])

  return elementRef
}
