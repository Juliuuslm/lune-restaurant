import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { RevealText } from '@/components/animations/RevealText'

export function HeroSection() {
  return (
    <header className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Background Image */}
      <Image
        src="/images/pagina-principal/hero-2.jpg"
        alt="Restaurante Lune Hero"
        fill
        className="object-cover -z-10"
        priority
        quality={85}
      />
      {/* Overlay gradients */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

      {/* Contenido */}
      <div className="z-10 text-center px-4 max-w-3xl text-white">
        <RevealText delay={0.1}>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold mb-8 font-medium">
            Haute Cuisine Française
          </p>
        </RevealText>

        <RevealText delay={0.3}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg mb-12">
            Donde la tradición culinaria se encuentra con el minimalismo moderno bajo la luz de París.
          </p>
        </RevealText>

        <div className="mt-12">
          <Link
            href="/reservas"
            className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gold text-black overflow-hidden transition-all duration-300 hover:bg-black hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            <span className="relative z-10 flex items-center space-x-2 text-sm tracking-widest uppercase font-semibold group-hover:text-white transition-colors duration-300">
              <span>Reservar Mesa</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
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
