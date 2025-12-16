'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, Euro } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import type { MenuItem } from '@/lib/constants/menu-data'

interface DishModalProps {
  isOpen: boolean
  onClose: () => void
  dish: MenuItem
}

export function DishModal({ isOpen, onClose, dish }: DishModalProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      document.body.style.overflow = 'hidden'

      // Detener Lenis si existe
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.stop()
      }
    } else {
      const timer = setTimeout(() => setShow(false), 300)
      document.body.style.overflow = 'unset'

      // Reiniciar Lenis si existe
      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        lenisInstance.start()
      }

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // ESC key para cerrar
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!show && !isOpen) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        className={cn(
          'relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream text-black shadow-2xl transition-all duration-500 transform',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 hover:bg-black/10 rounded-full transition-colors text-gray-600 hover:text-black active:scale-95 focus-ring"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Imagen del plato si existe */}
        {dish.image && (
          <div className="relative w-full aspect-[16/9] bg-gray-200">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        )}

        {/* Contenido */}
        <div className="p-8 md:p-12">
          {/* Nombre del plato */}
          <h2 className="text-4xl md:text-5xl font-serif mb-4 italic text-black">
            {dish.name}
          </h2>

          {/* Precio */}
          <div className="flex items-center space-x-2 text-gold mb-8">
            <Euro size={20} strokeWidth={2} />
            <span className="text-2xl font-semibold">{dish.price}</span>
          </div>

          {/* Descripción */}
          <p className="text-gray-700 leading-8 font-light text-lg mb-8">
            {dish.desc}
          </p>

          {/* Botón cerrar (mobile friendly) */}
          <button
            onClick={onClose}
            className="w-full mt-8 py-4 bg-black text-white uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300 active:scale-95"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
