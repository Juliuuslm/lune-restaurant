'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  dark?: boolean
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  dark = false,
  className = '',
}: ModalProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      document.body.style.overflow = 'hidden' // Prevenir scroll de fondo
    } else {
      const timer = setTimeout(() => setShow(false), 300)
      document.body.style.overflow = 'unset'
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Manejar ESC key para cerrar modal
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
      {/* Backdrop con Blur */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenido del Modal */}
      <div
        className={cn(
          'relative w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl transition-all duration-500 transform',
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8',
          dark
            ? 'bg-[#1A1A1A] text-[#F9F8F4] border border-gold/30'
            : 'bg-cream text-black border border-gold',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className={cn(
            'absolute top-4 right-4 p-3 hover:bg-black/10 rounded-full transition-colors z-10 active:scale-95',
            dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
          )}
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>

        {/* Contenido */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          {title && (
            <h3 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-serif mb-6 text-center">
              {title}
            </h3>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
