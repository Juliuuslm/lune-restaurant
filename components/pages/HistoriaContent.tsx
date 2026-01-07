'use client'

import { useState } from 'react'
import Image from 'next/image'
import { RevealText } from '@/components/animations/RevealText'
import { ImageModal, ImageTriggerButton } from '@/components/ui/ImageModal'
import { Feather, Droplet, Sun } from 'lucide-react'

export function HistoriaContent() {
  const [modalImage, setModalImage] = useState<{
    src: string
    alt: string
    title: string
    description: string
  } | null>(null)

  return (
    <>
      {/* Content */}
      <div className="bg-white text-black">
      <section className="py-section-sm md:py-section-md px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealText>
              <div className="relative">
                {/* Background number decorativo */}
                <span className="absolute text-6xl sm:text-8xl md:text-9xl font-serif text-gray-100 select-none pointer-events-none -top-2 sm:-top-4 md:-top-8 -left-1 sm:-left-2 md:-left-4">
                  01
                </span>
                <div className="relative z-10 aspect-square overflow-hidden bg-gray-200 group">
                  <Image
                    src="/images/historia/vintage.jpg"
                    alt="Historia del Restaurante Lune"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={85}
                  />
                  <ImageTriggerButton
                    onClick={() =>
                      setModalImage({
                        src: '/images/historia/vintage.jpg',
                        alt: 'Historia del Restaurante Lune',
                        title: 'Bajo la luz de la luna.',
                        description: 'En 1998, Antoine Riviere abrió las puertas de Lune en el corazón de París, un espacio donde el silencio es parte del plato. Su visión: cocina sin pretensiones, pero con alma.',
                      })
                    }
                  />
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="text-4xl font-serif mb-6">Bajo la luz de la luna.</h2>
              <p className="text-gray-600 leading-8 font-light">
                En 1998, Antoine Riviere abrió las puertas de Lune en el corazón de París, un
                espacio donde el silencio es parte del plato. Su visión: cocina sin pretensiones,
                pero con alma.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="py-section-sm md:py-section-md px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealText delay={0.2} className="order-2 md:order-1">
              <div className="space-y-6">
                <span className="absolute text-6xl sm:text-8xl md:text-9xl font-serif text-gray-200 select-none pointer-events-none -top-2 sm:-top-4 md:-top-8">
                  02
                </span>
                <h2 className="text-4xl font-serif relative z-10">La cocina como lienzo.</h2>
                <p className="text-gray-600 leading-8 font-light">
                  Cada plato que sale de la cocina de Lune es una experiencia sensorial. No usamos
                  la complejidad para impresionar, sino la precisión para emocionar. Los
                  ingredientes hablan por sí mismos.
                </p>
              </div>
            </RevealText>

            <RevealText className="order-1 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden shadow-xl bg-gray-200">
                <Image
                  src="/images/pagina-menu/chef-plating.jpg"
                  alt="Chef preparando un plato en Lune"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                />
              </div>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Tercera sección */}
      <section className="py-section-sm md:py-section-md px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealText>
              <div className="relative">
                <span className="absolute text-6xl sm:text-8xl md:text-9xl font-serif text-gray-100 select-none pointer-events-none -top-2 sm:-top-4 md:-top-8 -left-1 sm:-left-2 md:-left-4">
                  03
                </span>
                <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl bg-gray-200">
                  <Image
                    src="/images/pagina-menu/plats-1.jpg"
                    alt="Platillo de Lune"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </RevealText>

            <RevealText delay={0.2}>
              <h2 className="text-4xl font-serif mb-6">El tiempo es ingrediente.</h2>
              <p className="text-gray-600 leading-8 font-light">
                No buscamos la rapidez, sino el momento perfecto. En Lune, el ritmo de la cocina
                sigue el ritmo de la naturaleza. Nada se apresura, nada se fuerza.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-section-md bg-black text-cream text-center px-6">
        <RevealText>
          <p className="font-serif text-3xl md:text-5xl italic leading-relaxed max-w-4xl mx-auto opacity-90">
            "La cocina es el arte de transformar lo efímero en un recuerdo eterno."
          </p>
          <p className="mt-8 text-sm tracking-widest uppercase text-gold">
            — Antoine Riviere, Fundador
          </p>
        </RevealText>
      </section>

      {/* Chef Section */}
      <section className="py-section-sm md:py-section-md px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 aspect-square overflow-hidden relative group bg-gray-200">
              {/* Chef Image */}
              <Image
                src="/images/historia/chef.png"
                alt="Lune Dessendre - L'Âme Culinaire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                quality={85}
              />
              <ImageTriggerButton
                onClick={() =>
                  setModalImage({
                    src: '/images/historia/chef.png',
                    alt: 'Lune Dessendre - Chef',
                    title: "L'Âme Culinaire",
                    description: 'Desde 2015, Lune Dessendre lidera la cocina de Lune con una visión moderna y respetuosa de la tradición francesa. Bajo su dirección, Lune obtuvo sus 2 estrellas Michelin.',
                  })
                }
              />
            </div>

            <div className="order-1 md:order-2">
              <RevealText>
                <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-4">
                  Chef Ejecutivo
                </span>
                <h2 className="text-4xl font-serif mb-6">Lune Dessendre</h2>
                <p className="text-xs tracking-widest uppercase text-gold mb-6">
                  L'Âme Culinaire
                </p>
                <p className="text-gray-600 leading-8 font-light">
                  Desde 2015, Lune Dessendre lidera la cocina de Lune con una visión moderna y
                  respetuosa de la tradición francesa. Bajo su dirección, Lune obtuvo sus 2
                  estrellas Michelin en 2024.
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
              <h3 className="text-2xl font-serif">Silencio</h3>
              <p className="text-gray-500 font-light leading-7">El lujo es la ausencia de ruido.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Droplet strokeWidth={1} size={32} />
              </div>
              <h3 className="text-2xl font-serif">Pureza</h3>
              <p className="text-gray-500 font-light leading-7">Ingredientes sin disfraces.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black">
                <Sun strokeWidth={1} size={32} />
              </div>
              <h3 className="text-2xl font-serif">Tiempo</h3>
              <p className="text-gray-500 font-light leading-7">
                Respetamos el ritmo de las cosas buenas.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          src={modalImage.src}
          alt={modalImage.alt}
          title={modalImage.title}
          description={modalImage.description}
        />
      )}
    </>
  )
}
