import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { PhilosophySection } from '@/components/sections/PhilosophySection'
import { StatsSection } from '@/components/sections/StatsSection'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Bienvenido a Lune. Experiencia gastronómica única que combina cocina francesa contemporánea con elegancia minimalista en el corazón de París.',
}

// Forzar generación estática (SSG)
export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <StatsSection />
    </>
  )
}
