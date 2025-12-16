'use client'

import { useEffect, useRef } from 'react'

function preventTouchMove(e: TouchEvent) {
  const target = e.target as HTMLElement
  const isScrollable = target.closest('[data-modal-scrollable]')
  if (!isScrollable) {
    e.preventDefault()
  }
}

export function useScrollLock(isLocked: boolean) {
  const scrollPositionRef = useRef(0)
  const wasLockedRef = useRef(false)

  useEffect(() => {
    if (isLocked) {
      wasLockedRef.current = true
      const lenisInstance = (window as any).lenis

      if (lenisInstance) {
        // Desktop: detener Lenis + sobrescribir overflow:clip con overflow:hidden
        lenisInstance.stop()
        document.documentElement.style.overflow = 'hidden'
        document.documentElement.style.position = 'relative'
      } else {
        // Mobile: position fixed trick para iOS Safari
        const scrollY = window.scrollY
        scrollPositionRef.current = scrollY
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.width = '100%'
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        document.addEventListener('touchmove', preventTouchMove, { passive: false })
      }

      return () => {
        // Cleanup: restaurar scroll
        if (lenisInstance) {
          document.documentElement.style.overflow = ''
          document.documentElement.style.position = ''
          if ((window as any).lenis) {
            (window as any).lenis.start()
          }
        } else {
          // Restaurar mobile scroll
          document.body.style.position = ''
          document.body.style.top = ''
          document.body.style.width = ''
          document.body.style.overflow = ''
          document.documentElement.style.overflow = ''
          window.scrollTo(0, scrollPositionRef.current)
          document.removeEventListener('touchmove', preventTouchMove)
        }
        wasLockedRef.current = false
      }
    }
  }, [isLocked])
}
