'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, Euro } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import type { MenuItem } from '@/lib/constants/menu-data'
import { useScrollLock } from '@/hooks/useScrollLock'

interface DishModalProps {
  isOpen: boolean
  onClose: () => void
  dish: MenuItem
}

export function DishModal({ isOpen, onClose, dish }: DishModalProps) {
  const [show, setShow] = useState(false)

  // Manejar bloqueo de scroll (desktop y mobile)
  useScrollLock(isOpen)

  // Manejar animación de entrada/salida
  useEffect(() => {
    if (isOpen) {
      setShow(true)
    } else {
      const timer = setTimeout(() => setShow(false), 300)
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
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md -z-10"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        data-modal-scrollable
        className={cn(
          'relative w-full max-w-2xl max-h-[90vh] overflow-y-scroll bg-cream text-black shadow-2xl transition-all duration-500 transform',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
        style={{
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
        }}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 sm:p-3 hover:bg-black/10 rounded-full transition-colors text-gray-600 hover:text-black active:scale-95 focus-ring"
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
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              quality={85}
              priority
            />
          </div>
        )}

        {/* Contenido */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Nombre del plato */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 italic text-black">
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
