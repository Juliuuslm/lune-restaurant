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
    } else {
      const timer = setTimeout(() => setShow(false), 300)
      document.body.style.overflow = 'unset'
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
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        className={cn(
          'relative w-full max-w-6xl transition-all duration-500 transform',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors text-white active:scale-95 focus-ring"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Imagen */}
        <div className="relative w-full aspect-[4/3] bg-black rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            quality={95}
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>

        {/* Info debajo de la imagen */}
        {(title || description) && (
          <div className="mt-6 text-center text-white">
            {title && (
              <h3 className="text-2xl md:text-3xl font-serif mb-2">{title}</h3>
            )}
            {description && (
              <p className="text-gray-300 font-light max-w-2xl mx-auto">
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
