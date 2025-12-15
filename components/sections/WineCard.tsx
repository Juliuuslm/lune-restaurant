import { type Wine } from '@/lib/constants/wines-data'

interface WineCardProps {
  wine: Wine
  delay?: number
}

export function WineCard({ wine }: WineCardProps) {
  return (
    <div className="flex justify-between items-baseline gap-4 border-b border-gray-800 pb-4 hover:border-gold transition-colors group cursor-default">
      <div className="flex-1 min-w-0">
        <h4 className="text-xl font-serif text-gray-200 group-hover:text-gold transition-colors">
          {wine.name}
        </h4>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{wine.region}</p>
        {wine.description && (
          <p className="text-sm text-gray-600 mt-2 max-w-md">{wine.description}</p>
        )}
      </div>
      <span className="text-gold font-serif opacity-70 text-base md:text-lg whitespace-nowrap">
        €{wine.price}
      </span>
    </div>
  )
}
