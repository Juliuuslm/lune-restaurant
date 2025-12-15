import { type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
}: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  }

  return (
    <div
      className={cn(
        'bg-white border border-gray-100 shadow-sm transition-all duration-300',
        hover && 'hover:shadow-xl hover:border-gold/30',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  )
}
