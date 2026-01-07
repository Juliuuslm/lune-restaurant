'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { menuCategories, type MenuItem as MenuItemType } from '@/lib/constants/menu-data'
import { RevealText } from '@/components/animations/RevealText'
import { DishModal } from '@/components/ui/DishModal'
import { Wheat, ChevronDown, Coffee } from 'lucide-react'

function MenuItem({ item, onClick }: { item: MenuItemType; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative py-8 border-b border-gray-200 hover:border-gold transition-colors duration-500 cursor-pointer"
    >
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
            quality={75}
          />
        </div>
      )}

      {/* Indicador de click - visible por defecto, desaparece al hacer hover */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 opacity-100 group-hover:opacity-0 transition-all duration-300">
        Ver detalles →
      </div>
    </div>
  )
}

export function MenuContent() {
  const [selectedDish, setSelectedDish] = useState<MenuItemType | null>(null)

  // Precargar TODAS las imágenes del menú al cargar la página
  useEffect(() => {
    const imagesToPreload: string[] = []

    menuCategories.forEach(category => {
      category.items.forEach(item => {
        if (item.image) {
          imagesToPreload.push(item.image)
        }
      })
    })

    // Precargar imágenes de forma no bloqueante
    imagesToPreload.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  const navItems = [
    { id: 'entrees', label: 'Para Empezar', icon: Wheat },
    { id: 'plats', label: 'Plats Principaux', icon: ChevronDown },
    { id: 'desserts', label: 'Dulces', icon: Coffee },
  ]

  return (
    <>
      {/* Sticky Navigation */}
      <div className="sticky top-16 z-30 bg-cream border-b border-gray-200 py-4 shadow-sm overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-start md:justify-center gap-4 md:gap-8 lg:gap-16 overflow-x-auto pb-2 -mb-2 scrollbar-thin">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 py-3 px-3 text-xs sm:text-sm uppercase tracking-wide md:tracking-widest whitespace-nowrap transition-colors border-b-2 border-transparent hover:text-gold hover:border-gold text-gray-600 active:scale-95 flex-shrink-0"
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
            className="py-12 md:py-16 scroll-mt-[180px]"
          >
            <RevealText className="mb-8 md:mb-10 text-center">
              <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-2">
                {category.subtitle}
              </span>
              <h2 className="text-4xl font-serif text-black">{category.title}</h2>
            </RevealText>

            <div className="space-y-4">
              {category.items.map((item, i) => (
                <MenuItem key={i} item={item} onClick={() => setSelectedDish(item)} />
              ))}
            </div>

            {/* Divider */}
            {idx < menuCategories.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6 md:my-8"></div>
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
              sizes="(max-width: 1024px) 100vw, 896px"
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

      {/* Dish Modal */}
      {selectedDish && (
        <DishModal
          isOpen={!!selectedDish}
          onClose={() => setSelectedDish(null)}
          dish={selectedDish}
        />
      )}
    </>
  )
}
