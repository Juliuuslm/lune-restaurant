import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina clases de Tailwind CSS de forma inteligente
 * Utiliza clsx para condicionales y twMerge para resolver conflictos
 * @param inputs - Clases CSS a combinar
 * @returns string - Clases combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
