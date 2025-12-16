'use client'

import { useEffect, useRef } from 'react'

export function useScrollLock(isLocked: boolean) {
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    if (!isLocked) return

    const lenisInstance = (window as any).lenis

    if (lenisInstance) {
      // Desktop: Estrategia de intercepción de eventos
      // 1. Detener Lenis para bloquear scroll de fondo
      lenisInstance.stop()

      // 2. Interceptar eventos wheel ANTES de que Lenis los procese (fase de captura)
      const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement
        const modalScrollable = target.closest('[data-modal-scrollable]')

        if (modalScrollable) {
          // Evento viene del modal: detener propagación para que Lenis NO lo vea
          e.stopPropagation()
          // Dejar que el navegador maneje el scroll nativo dentro del modal
          // No hacemos preventDefault(), permitimos scroll nativo
        }
        // Si NO viene del modal, Lenis ya lo bloqueó con stop()
      }

      // 3. Interceptar touchmove para mobile
      const handleTouchMove = (e: TouchEvent) => {
        const target = e.target as HTMLElement
        const modalScrollable = target.closest('[data-modal-scrollable]')

        if (modalScrollable) {
          // Permitir scroll dentro del modal
          e.stopPropagation()
        } else {
          // Bloquear scroll fuera del modal
          e.preventDefault()
        }
      }

      // Usar capture: true para interceptar en fase de captura (ANTES de Lenis)
      window.addEventListener('wheel', handleWheel, { capture: true, passive: true })
      window.addEventListener('touchmove', handleTouchMove, { capture: true, passive: false })

      return () => {
        // Cleanup: remover listeners y reiniciar Lenis
        window.removeEventListener('wheel', handleWheel, { capture: true })
        window.removeEventListener('touchmove', handleTouchMove, { capture: true })

        if ((window as any).lenis) {
          (window as any).lenis.start()
        }
      }
    } else {
      // Mobile sin Lenis: position fixed trick para iOS Safari
      const scrollY = window.scrollY
      scrollPositionRef.current = scrollY

      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'

      const handleTouchMove = (e: TouchEvent) => {
        const target = e.target as HTMLElement
        const modalScrollable = target.closest('[data-modal-scrollable]')
        if (!modalScrollable) {
          e.preventDefault()
        }
      }

      document.addEventListener('touchmove', handleTouchMove, { passive: false })

      return () => {
        // Restaurar mobile scroll
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        window.scrollTo(0, scrollPositionRef.current)
        document.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [isLocked])
}
