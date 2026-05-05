'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugin de GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname()

  useEffect(() => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  useEffect(() => {
    // Detectar si es dispositivo móvil o tablet
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 1024

    // Solo inicializar Lenis en desktop - usar scroll nativo en mobile
    if (isMobile) {
      return // Salir temprano en mobile para mejor performance
    }

    // Inicializar Lenis con configuración optimizada (solo desktop)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Exponer instancia de Lenis globalmente para modals
    ;(window as any).lenis = lenis

    // Sincronizar Lenis con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Integrar con GSAP ticker para animaciones suaves
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Cleanup: destruir Lenis y remover del ticker
    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      ;(window as any).lenis = null
    }
  }, [])

  return <>{children}</>
}
