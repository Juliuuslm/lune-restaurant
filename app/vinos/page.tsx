import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { VinosContent } from '@/components/pages/VinosContent'

export const metadata: Metadata = {
  title: 'Vinos',
  description:
    'Explora nuestra cuidada selección de vinos franceses. Más de 400 etiquetas curadas por nuestra sommelier Claire Dubois.',
}

export const revalidate = 3600 // ISR: 1 hora

export default function VinosPage() {
  return (
    <>
      <PageHero
        image="/images/vinos/hero.jpg"
        title="La Cave"
        subtitle="Collection Privée"
        height="standard"
        overlay="dark"
      >
        <p className="mt-8 text-gray-300 font-light text-lg max-w-xl mx-auto leading-relaxed">
          Un viaje a través de los terroirs más prestigiosos de Francia, curado con pasión y
          paciencia.
        </p>
      </PageHero>

      <VinosContent />
    </>
  )
}
