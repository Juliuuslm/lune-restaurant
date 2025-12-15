import type { Metadata } from 'next'
import Image from 'next/image'
import { menuCategories, type MenuItem } from '@/lib/constants/menu-data'
import { PageHero } from '@/components/sections/PageHero'
import { RevealText } from '@/components/animations/RevealText'
import { Wheat, ChevronDown, Coffee, Wine } from 'lucide-react'

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

function MenuItem({ item }: { item: MenuItem }) {
  return (
    <div className="group relative py-8 border-b border-gray-200 hover:border-gold transition-colors duration-500 cursor-default">
      <div className="flex justify-between items-baseline z-10 relative">
        <h3 className="text-2xl md:text-3xl font-serif text-black group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h3>
        <span className="text-xl font-serif text-gold opacity-80 group-hover:opacity-100 ml-4 whitespace-nowrap">
          €{item.price}
        </span>
      </div>
      <p className="mt-2 text-gray-500 font-light text-sm md:text-base max-w-xl group-hover:text-gray-800 transition-colors duration-300">
        {item.desc}
      </p>

      {/* Imagen hover en desktop */}
      {item.image && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none translate-x-12 group-hover:translate-x-0 z-20">
          <Image
            src={item.image}
            alt={item.name}
            width={192}
            height={128}
            className="w-full h-full object-cover rounded shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      )}
    </div>
  )
}

export default function MenuPage() {
  const navItems = [
    { id: 'entrees', label: 'Para Empezar', icon: Wheat },
    { id: 'plats', label: 'Plats Principaux', icon: ChevronDown },
    { id: 'desserts', label: 'Dulces', icon: Coffee },
    { id: 'vins', label: 'Vinos', icon: Wine },
  ]

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

      {/* Sticky Navigation */}
      <div className="sticky top-[64px] lg:top-[64px] z-40 bg-cream border-b border-gray-200 py-4 shadow-sm overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-start md:justify-center gap-4 md:gap-8 lg:gap-16 overflow-x-auto pb-2 -mb-2 scrollbar-thin">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 py-2 px-2 text-xs md:text-sm uppercase tracking-wide md:tracking-widest whitespace-nowrap transition-colors border-b-2 border-transparent hover:text-gold hover:border-gold text-gray-600 active:scale-95 flex-shrink-0"
              >
                <span className="hidden md:inline">
                  <item.icon size={14} />
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        {menuCategories.map((category, idx) => (
          <section
            key={category.id}
            id={category.id}
            className="py-section-sm md:py-section-md scroll-mt-[180px]"
          >
            <RevealText className="mb-12 text-center">
              <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-2">
                {category.subtitle}
              </span>
              <h2 className="text-4xl font-serif text-black">{category.title}</h2>
            </RevealText>

            <div className="space-y-4">
              {category.items.map((item, i) => (
                <MenuItem key={i} item={item} />
              ))}
            </div>

            {/* Divider */}
            {idx < menuCategories.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-10"></div>
            )}
          </section>
        ))}

        {/* Decorative Image */}
        <RevealText>
          <div className="w-full h-64 md:h-80 overflow-hidden my-12 relative grayscale hover:grayscale-0 transition-all duration-1000 bg-gray-200">
            <Image
              src="/images/pagina-menu/chef-plating.jpg"
              alt="Chef emplatando en Lune"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <p className="text-white font-serif text-2xl italic tracking-wider">
                "L'excellence est un détail"
              </p>
            </div>
          </div>
        </RevealText>
      </div>
    </>
  )
}
