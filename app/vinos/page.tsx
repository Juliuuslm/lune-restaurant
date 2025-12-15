import type { Metadata } from 'next'
import Image from 'next/image'
import { wineCategories, pairingInfo } from '@/lib/constants/wines-data'
import { PageHero } from '@/components/sections/PageHero'
import { WineCard } from '@/components/sections/WineCard'
import { RevealText } from '@/components/animations/RevealText'
import { Grape, GlassWater } from 'lucide-react'

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

      {/* Content */}
      <div className="bg-dark-surface text-cream">
      {/* Sommelier Section */}
      <section className="py-section-md px-6 border-b border-gray-900">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <RevealText>
              <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-4">
                Head Sommelier
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Claire Dubois</h2>
              <p className="text-gray-400 leading-8 font-light mb-6">
                "El vino no es solo una bebida, es geografía líquida. Mi misión en Lune es
                encontrar esas botellas que cuentan una historia honesta sobre su origen."
              </p>
              <div className="flex items-center space-x-4 text-gold text-sm tracking-widest uppercase">
                <GlassWater size={16} />
                <span>Meilleur Ouvrier de France 2019</span>
              </div>
            </RevealText>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden relative group bg-gray-800">
            {/* Sommelier Image */}
            <Image
              src="/images/vinos/sommelier.jpg"
              alt="Claire Dubois - Head Sommelier"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              quality={85}
            />
          </div>
        </div>
      </section>

      {/* Wine Lists */}
      <section className="py-section-lg px-6">
        <div className="container mx-auto max-w-4xl space-y-24">
          {wineCategories.map((category, idx) => (
            <div key={category.id}>
              <RevealText className="flex items-center justify-center mb-12 space-x-4">
                <div className="h-px w-12 bg-gold"></div>
                <h3 className="text-3xl font-serif italic">{category.title}</h3>
                <div className="h-px w-12 bg-gold"></div>
              </RevealText>
              <div className="space-y-8">
                {category.wines.map((wine, i) => (
                  <WineCard key={i} wine={wine} />
                ))}
              </div>
              {idx < wineCategories.length - 1 && (
                <div className="w-full h-px bg-gray-800 my-16"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pairing Section */}
      <section className="py-section-md text-center bg-black border-t border-gray-900">
        <RevealText>
          <Grape className="mx-auto text-gold mb-6" size={40} strokeWidth={1} />
          <h2 className="text-3xl font-serif mb-6">{pairingInfo.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-6">
            {pairingInfo.description}
          </p>
          <div className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300 cursor-default">
            Maridaje Completo (+€{pairingInfo.price})
          </div>
          <p className="text-xs text-gray-600 mt-6 max-w-xl mx-auto px-6">{pairingInfo.details}</p>
        </RevealText>
      </section>
      </div>
    </>
  )
}
