import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { MenuContent } from '@/components/pages/MenuContent'

export const metadata: Metadata = {
  title: 'Menú',
  description:
    'Descubre nuestra carta de platos franceses elaborados con ingredientes de temporada. Entrées, plats principaux y desserts de la cocina francesa contemporánea.',
  openGraph: {
    title: 'Menú | Restaurante Lune',
    description: 'Carta de platos franceses con ingredientes de temporada',
  },
}

// ISR: Revalidar cada hora (el menú puede cambiar)
export const revalidate = 3600

export default function MenuPage() {
  return (
    <>
      <PageHero
        image="/images/pagina-menu/hero.jpg"
        title="La Carte"
        subtitle="Saison Hiver 2024"
        height="standard"
        overlay="dark"
        additionalPadding
      />

      <MenuContent />
    </>
  )
}
