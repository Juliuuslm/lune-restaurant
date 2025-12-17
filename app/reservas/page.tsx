import type { Metadata} from 'next'
import { PageHero } from '@/components/sections/PageHero'
import { ReservaForm } from '@/components/forms/ReservaForm'
import { RevealText } from '@/components/animations/RevealText'
import { Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reservas',
  description:
    'Reserva tu mesa en Restaurante Lune. Disponibilidad de martes a domingo. Experiencia gastronómica inolvidable.',
}

export const dynamic = 'force-static'

export default function ReservasPage() {
  return (
    <>
      <PageHero
        image="/images/reservas/hero.jpg"
        title="Reservas"
        subtitle="Tu Mesa"
        height="standard"
        overlay="dark"
      />

      {/* Content */}
      <div className="bg-cream text-black min-h-screen">
      <div className="container mx-auto max-w-6xl px-6 -mt-12 md:-mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white p-6 md:p-10 lg:p-12 shadow-2xl border-t-4 border-gold">
            <RevealText>
              <h2 className="text-3xl font-serif mb-8 text-black">Solicitar Reserva</h2>
              <ReservaForm />
            </RevealText>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8 pt-12 lg:pt-0">
            <RevealText delay={0.2} className="bg-white p-6 sm:p-8 md:p-10 shadow-lg">
              <h3 className="text-xl font-serif mb-6 flex items-center">
                <Utensils size={20} className="mr-3 text-gold" />
                Información
              </h3>
              <ul className="space-y-4 text-sm font-light text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Código de Vestimenta</span>
                  <span className="font-medium text-black">Tenue de Ville</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Niños</span>
                  <span className="font-medium text-black">Mayores de 12</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Duración aprox.</span>
                  <span className="font-medium text-black">2-3 horas</span>
                </li>
              </ul>
            </RevealText>

            <RevealText delay={0.4} className="bg-black text-white p-6 sm:p-8 md:p-10 shadow-lg text-center">
              <h3 className="text-xl font-serif mb-4 text-gold">Comedor Privado</h3>
              <p className="text-gray-400 font-light text-sm mb-6 leading-relaxed">
                Para eventos exclusivos en nuestra sala privada "La Lune Noire".
              </p>
              <a
                href="mailto:events@lune-paris.com"
                className="inline-block border-b border-gold pb-1 text-gold text-sm tracking-widest uppercase hover:text-white hover:border-white transition-all"
              >
                events@lune-paris.com
              </a>
            </RevealText>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
