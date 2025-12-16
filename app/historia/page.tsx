import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { HistoriaContent } from '@/components/pages/HistoriaContent'

export const metadata: Metadata = {
  title: 'Historia',
  description:
    'Descubre la historia de Lune, desde sus orígenes en Montmartre hasta convertirse en un referente de la cocina francesa contemporánea.',
}

export const dynamic = 'force-static'

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        image="/images/historia/hero.jpg"
        title="Nuestra Historia"
        subtitle="Nuestro Legado"
        height="standard"
        overlay="medium"
      >
        <div className="w-24 h-px bg-white/50 mx-auto mt-8"></div>
      </PageHero>

      <HistoriaContent />
    </>
  )
}
