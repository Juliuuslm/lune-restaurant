'use client'

import { Star, Clock, MapPin } from 'lucide-react'
import { RevealText } from '@/components/animations/RevealText'

const stats = [
  {
    icon: Star,
    title: 'Michelin Experience',
    text: '2 Estrellas Michelin (2024).',
  },
  {
    icon: Clock,
    title: 'Horarios',
    text: 'Cena: Mar - Dom, 19:00 - 23:00',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    text: '12 Rue de la Lune, París',
  },
]

export function StatsSection() {
  return (
    <section className="py-section-sm md:py-section-md px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 bg-[#FBFBFB]">
              <stat.icon
                className="mx-auto mb-6 text-gold"
                size={32}
                strokeWidth={1}
              />
              <h3 className="text-lg font-serif mb-4 font-medium">{stat.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-6">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
