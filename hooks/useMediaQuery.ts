'use client'

import { useState, useEffect } from 'react'

/**
 * Hook para detectar media queries de forma reactiva
 * @param query - Media query CSS (ej: '(min-width: 768px)')
 * @returns boolean - true si la media query coincide
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // Set inicial
    setMatches(media.matches)

    // Listener para cambios
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern API
    if (media.addEventListener) {
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    } else {
      // Fallback para navegadores antiguos
      media.addListener(listener)
      return () => media.removeListener(listener)
    }
  }, [query])

  return matches
}

// Helpers predefinidos para breakpoints comunes
export const useIsMobile = () => useMediaQuery('(max-width: 767px)')
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)')
