import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/sections/PageHero'
import { RevealText } from '@/components/animations/RevealText'
import { Feather, Droplet, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Historia',
  description:
    'Descubre la historia de Lune, desde sus orígenes en Mont martre hasta convertirse en un referente de la cocina francesa contemporánea.',
}

export const dynamic = 'force-static'

export default function HistoriaPage() {
  return (
    <>
      <PageHero
        image="/images/historia/hero.jpg"
        title="Notre Histoire"
        subtitle="Notre Héritage"
        height="standard"
        overlay="light"
      >
        <div className="w-24 h-px bg-white/50 mx-auto mt-8"></div>
      </PageHero>

      {/* Content */}
      <div className="bg-white text-black">
      <section className="py-section-sm md:py-section-md px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealText>
              <div className="relative">
                <span className="absolute -top-12 -left-8 text-9xl font-serif text-gray-100 -z-10">
                  01
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                  Bajo la luz de
                  <br />
                  la luna.
                </h2>
                <p className="text-gray-600 leading-8 font-light text-lg mb-6">
                  Todo comenzó en una noche clara de 1998 en Montmartre. Antoine Riviere, cansado
                  del ruido incesante de la gastronomía moderna, buscaba un refugio.
                </p>
                <p className="text-gray-600 leading-8 font-light text-lg">
                  La luna bañaba el espacio vacío. En ese momento, nació el concepto: un
                  restaurante donde la comida no compitiera por atención, sino que brillara por su
                  propia pureza.
                </p>
              </div>
            </RevealText>
            {/* Vintage Image */}
            <div className="aspect-[4/5] overflow-hidden relative group bg-gray-200">
              <Image
                src="/images/historia/vintage.jpg"
                alt="Vintage - Historia de Lune"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-section-md bg-black text-cream text-center px-6">
        <RevealText>
          <p className="font-serif text-3xl md:text-5xl italic leading-relaxed max-w-4xl mx-auto opacity-90">
            "La cocina es el arte de transformar lo efímero en un recuerdo eterno."
          </p>
          <p className="mt-8 text-gold text-sm tracking-widest uppercase">
            — Antoine Riviere, Fundador
          </p>
        </RevealText>
      </section>

      {/* Chef Section */}
      <section className="py-section-sm md:py-section-md px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 aspect-square overflow-hidden relative">
              {/* Chef Image */}
              <Image
                src="/images/historia/chef.png"
                alt="Chef Lune Dessendre"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div className="order-1 md:order-2">
              <RevealText>
                <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-4">
                  L'Âme Culinaire
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Lune Dessendre</h2>
                <p className="text-gray-600 leading-8 font-light text-lg mb-6">
                  Con tres estrellas Michelin en su haber antes de los 35 años, Lune se unió al
                  proyecto con una visión clara: redefinir la gastronomía a través de la intuición
                  femenina.
                </p>
                <p className="text-gray-600 leading-8 font-light text-lg">
                  Su filosofía de "Micro-Saisonalité" es intransigente. Ella cree que la naturaleza
                  dicta el menú, y su tarea es simplemente escuchar.
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-section-sm md:py-section-md px-6">
        <div className="container mx-auto max-w-5xl">
          <RevealText className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif">Nuestros Pilares</h2>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Feather strokeWidth={1} size={32} />
              </div>
              <h3 className="text-xl font-serif">Silencio</h3>
              <p className="text-gray-500 font-light leading-7">El lujo es la ausencia de ruido.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Droplet strokeWidth={1} size={32} />
              </div>
              <h3 className="text-xl font-serif">Pureza</h3>
              <p className="text-gray-500 font-light leading-7">Ingredientes sin disfraces.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Sun strokeWidth={1} size={32} />
              </div>
              <h3 className="text-xl font-serif">Tiempo</h3>
              <p className="text-gray-500 font-light leading-7">
                Respetamos el ritmo de las cosas buenas.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
