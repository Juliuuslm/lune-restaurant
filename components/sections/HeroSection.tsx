import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { RevealText } from '@/components/animations/RevealText'

export function HeroSection() {
  return (
    <header className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Background Image */}
      <Image
        src="/images/pagina-principal/hero.jpg"
        alt="Restaurante Lune Hero"
        fill
        className="object-cover -z-10"
        priority
        quality={85}
      />
      {/* Overlay gradients */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Contenido */}
      <div className="z-10 text-center px-4 max-w-4xl text-white">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold mb-6 font-medium">
          Haute Cuisine Française
        </p>

        <RevealText delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-tight mb-8">
            Lune
          </h1>
        </RevealText>

        <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Donde la tradición culinaria se encuentra con el minimalismo moderno bajo la luz de
          París.
        </p>

        <div className="mt-12">
          <Link
            href="/reservas"
            className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-white text-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center space-x-2 text-sm tracking-widest uppercase font-semibold">
              <span>Reservar Mesa</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </header>
  )
}
