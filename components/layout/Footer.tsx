import Link from 'next/link'
import { Instagram, Facebook, Twitter, Utensils } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 border-t border-gray-900 z-10 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Branding */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Lune</h2>
            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
              Una experiencia gastronómica que trasciende el plato. Cocina francesa contemporánea
              en un ambiente de minimalismo absoluto.
            </p>
          </div>

          {/* Explorar */}
          <div className="space-y-6">
            <h4 className="text-gold text-xs tracking-widest uppercase">Explorar</h4>
            <ul className="space-y-2 text-base text-gray-400 font-light">
              <li>
                <Link href="/" className="block py-2 hover:text-white transition-colors active:scale-95">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/historia" className="block py-2 hover:text-white transition-colors active:scale-95">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="/menu" className="block py-2 hover:text-white transition-colors active:scale-95">
                  Menú de Temporada
                </Link>
              </li>
              <li>
                <Link href="/vinos" className="block py-2 hover:text-white transition-colors active:scale-95">
                  Carta de Vinos
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="block py-2 hover:text-white transition-colors active:scale-95">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-6">
            <h4 className="text-gold text-xs tracking-widest uppercase">Contacto</h4>
            <div className="text-sm text-gray-400 font-light space-y-4">
              <p>contact@lune-paris.com</p>
              <p>+33 1 23 45 67 89</p>
              <p className="text-xs pt-2">12 Rue de la Lune<br />75002 París, Francia</p>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group active:scale-95"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group active:scale-95"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group active:scale-95"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 text-xs text-gray-600 tracking-wider uppercase">
          <p>&copy; {currentYear} Lune Restaurant. Todos los derechos reservados.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link
              href="/politica-privacidad"
              className="hover:text-gray-400 uppercase tracking-widest transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos-condiciones"
              className="hover:text-gray-400 uppercase tracking-widest transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
