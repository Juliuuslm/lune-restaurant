'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registrar plugins de GSAP (solo en cliente)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Presets de animaciones reutilizables
export const fadeInUp = {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
}

export const fadeInDown = {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: 'power3.out',
}

export const fadeInLeft = {
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: 'power2.out',
}

export const fadeInRight = {
  opacity: 0,
  x: 50,
  duration: 0.8,
  ease: 'power2.out',
}

export const scaleIn = {
  scale: 0.9,
  opacity: 0,
  duration: 0.6,
  ease: 'back.out(1.7)',
}

export const fadeIn = {
  opacity: 0,
  duration: 0.8,
  ease: 'power2.out',
}

// Configuración de ScrollTrigger por defecto
export const defaultScrollTrigger = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
}

// Helper para crear animaciones de scroll
export function createScrollAnimation(
  element: HTMLElement | null,
  animationProps: gsap.TweenVars,
  scrollTriggerProps?: ScrollTrigger.Vars
) {
  if (!element) return null

  return gsap.from(element, {
    ...animationProps,
    scrollTrigger: {
      trigger: element,
      ...defaultScrollTrigger,
      ...scrollTriggerProps,
    },
  })
}

export { gsap, ScrollTrigger }
