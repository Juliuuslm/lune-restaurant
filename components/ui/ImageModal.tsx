'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
  description?: string
}

export function ImageModal({
  isOpen,
  onClose,
  src,
  alt,
  title,
  description,
}: ImageModalProps) {
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
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm -z-10"
        aria-hidden="true"
      />

      {/* Contenido con scroll */}
      <div
        className={cn(
          'relative w-full max-w-4xl max-h-[90vh] overflow-y-scroll transition-all duration-500 transform z-10 bg-black rounded-lg',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
        style={{
          overscrollBehavior: 'contain',
        }}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right z-30 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white active:scale-95 focus-ring mr-4"
          aria-label="Cerrar modal"
        >
          <X size={28} />
        </button>

        {/* Imagen */}
        <div className="relative w-full aspect-[4/3] bg-black overflow-hidden clear-both">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            quality={95}
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Info debajo de la imagen */}
        {(title || description) && (
          <div className="mt-8 mb-6 text-center text-white px-4">
            {title && (
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">{title}</h3>
            )}
            {description && (
              <p className="text-gray-100 font-light max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Botón de trigger para abrir el modal de imagen
interface ImageTriggerProps {
  onClick: () => void
  className?: string
}

export function ImageTriggerButton({ onClick, className = '' }: ImageTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-300 flex items-center justify-center group cursor-zoom-in',
        className
      )}
      aria-label="Ver imagen en grande"
    >
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
        <ZoomIn size={32} className="text-black" />
      </div>
    </button>
  )
}
