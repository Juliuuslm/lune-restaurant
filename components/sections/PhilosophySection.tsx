'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RevealText } from '@/components/animations/RevealText'
import { ImageModal, ImageTriggerButton } from '@/components/ui/ImageModal'

export function PhilosophySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <section className="py-24 md:py-40 px-6 bg-cream relative">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Imagen */}
        <div className="order-2 md:order-1 relative">
          <RevealText direction="left" delay={0.2}>
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl bg-gray-200 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500">
              <Image
                src="/images/pagina-principal/philosophy.jpg"
                alt="Filosofía de Lune - Detalle de plato gourmet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                quality={85}
              />
              <ImageTriggerButton onClick={() => setIsModalOpen(true)} />
            </div>
          </RevealText>
          {/* Cita decorativa */}
          <RevealText direction="up" delay={0.4}>
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-sm border-l-2 border-gold shadow-lg hover:shadow-xl hover:border-l-gold-light transition-all duration-300 group">
              <p className="font-serif italic text-lg text-gray-800 group-hover:text-gold transition-colors duration-300">
                "La cuisine est un art de la patience."
              </p>
            </div>
          </RevealText>
        </div>

        {/* Texto */}
        <div className="order-1 md:order-2 space-y-8">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-bold">
            Nuestra Filosofía
          </span>

          <RevealText>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-black">
              La esencia de lo invisible
            </h2>
          </RevealText>

          <p className="text-gray-600 leading-8 font-light text-lg">
            En el corazón de Lune, creemos que la verdadera sofisticación reside en la
            sustracción. Nuestra cocina busca despertar los sentidos con precisión y equilibrio.
          </p>

          <Link
            href="/menu"
            className="inline-block border-b border-black pb-1 text-sm tracking-widest uppercase hover:text-gold hover:border-gold transition-colors"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>
    </section>

    {/* Image Modal */}
    <ImageModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      src="/images/pagina-principal/philosophy.jpg"
      alt="Filosofía de Lune - Detalle de plato gourmet"
      title="Nuestra Filosofía"
      description="En el corazón de Lune, creemos que la verdadera sofisticación reside en la sustracción. Nuestra cocina busca despertar los sentidos con precisión y equilibrio."
    />
    </>
  )
}
