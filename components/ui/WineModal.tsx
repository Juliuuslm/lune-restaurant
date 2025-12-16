'use client'

import { useEffect, useState } from 'react'
import { X, Euro, Grape } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import type { Wine } from '@/lib/constants/wines-data'

interface WineModalProps {
  isOpen: boolean
  onClose: () => void
  wine: Wine
}

export function WineModal({ isOpen, onClose, wine }: WineModalProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)

      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        // Desktop: Solo detener Lenis (suficiente)
        lenisInstance.stop()
      } else {
        // Mobile: Sin Lenis, usar overflow hidden
        document.body.style.overflow = 'hidden'
      }
    } else {
      const timer = setTimeout(() => setShow(false), 300)

      const lenisInstance = (window as any).lenis
      if (lenisInstance) {
        // Desktop: Solo reiniciar Lenis
        lenisInstance.start()
      } else {
        // Mobile: Restaurar overflow
        document.body.style.overflow = 'unset'
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
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm -z-10"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        className={cn(
          'relative w-full max-w-2xl max-h-[90vh] overflow-y-scroll bg-dark-surface text-cream shadow-2xl transition-all duration-500 transform border border-gray-800',
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
          className="absolute top-6 right-6 z-20 p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white active:scale-95 focus-ring"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Contenido */}
        <div className="p-8 md:p-12">
          {/* Icono decorativo */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
              <Grape size={40} className="text-gold" strokeWidth={1} />
            </div>
          </div>

          {/* Nombre del vino */}
          <h2 className="text-3xl md:text-4xl font-serif mb-4 italic text-center text-cream">
            {wine.name}
          </h2>

          {/* Región */}
          <p className="text-gold text-sm tracking-widest uppercase text-center mb-8">
            {wine.region}
          </p>

          {/* Precio */}
          <div className="flex items-center justify-center space-x-2 text-gold mb-10">
            <Euro size={20} strokeWidth={2} />
            <span className="text-3xl font-semibold">{wine.price}</span>
          </div>

          {/* Descripción */}
          {wine.description && (
            <div className="border-t border-gray-800 pt-8 mb-8">
              <h3 className="text-sm uppercase tracking-widest text-gold font-bold mb-4 text-center">
                Notas de Cata
              </h3>
              <p className="text-gray-300 leading-8 font-light text-lg text-center max-w-lg mx-auto">
                {wine.description}
              </p>
            </div>
          )}

          {/* Mensaje de sommelier */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm italic text-center">
              "Cada vino en nuestra carta ha sido seleccionado para contar una historia única."
            </p>
            <p className="text-gold text-xs tracking-widest uppercase text-center mt-2">
              — Claire Dubois, Sommelier
            </p>
          </div>

          {/* Botón cerrar (mobile friendly) */}
          <button
            onClick={onClose}
            className="w-full mt-10 py-4 bg-gold text-black uppercase tracking-widest text-sm hover:bg-gold/90 transition-colors duration-300 active:scale-95"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
