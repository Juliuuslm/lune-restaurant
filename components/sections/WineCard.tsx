import { type Wine } from '@/lib/constants/wines-data'

interface WineCardProps {
  wine: Wine
  delay?: number
  onClick?: () => void
}

export function WineCard({ wine, onClick }: WineCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-baseline gap-2 sm:gap-3 md:gap-4 border-b border-gray-800 pb-4 hover:border-gold transition-colors group cursor-pointer relative"
    >
      <div className="flex-1 min-w-0">
        <h4 className="text-xl font-serif text-gray-200 group-hover:text-gold transition-colors">
          {wine.name}
        </h4>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{wine.region}</p>
        {wine.description && (
          <p className="text-sm text-gray-600 mt-2 max-w-md">{wine.description}</p>
        )}
      </div>
      <span className="text-gold font-serif opacity-70 group-hover:opacity-100 text-base md:text-lg whitespace-nowrap transition-opacity">
        €{wine.price}
      </span>

      {/* Indicador de click */}
      {onClick && (
        <div className="absolute bottom-1 right-2 text-xs text-gray-600 group-hover:text-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
          Ver detalles →
        </div>
      )}
    </div>
  )
}
