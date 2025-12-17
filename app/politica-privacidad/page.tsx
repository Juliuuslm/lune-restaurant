import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Restaurante Lune. Información sobre cómo recopilamos, usamos y protegemos sus datos personales.',
}

export const dynamic = 'force-static'

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-8 md:p-16 shadow-lg border-t-4 border-gold">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-black">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 italic">
              Última actualización: Diciembre 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">1. Introducción</h2>
              <p className="leading-relaxed">
                En Restaurante Lune, nos tomamos muy en serio su privacidad. Esta política describe
                cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestro
                sitio web o realiza una reserva.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">2. Recopilación de Datos</h2>
              <p className="leading-relaxed">
                Recopilamos información personal cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Realiza una reserva a través de nuestro formulario</li>
                <li>Se suscribe a nuestro boletín de noticias</li>
                <li>Interactúa con nuestro sitio web (cookies analíticas)</li>
                <li>Se comunica con nosotros por email o teléfono</li>
              </ul>
              <p className="leading-relaxed">
                Los datos recopilados incluyen: nombre, email, número de teléfono, fecha y hora de
                reserva, número de invitados y preferencias especiales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">3. Uso de la Información</h2>
              <p className="leading-relaxed">
                Utilizamos sus datos personales para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Procesar y confirmar sus reservas</li>
                <li>Enviar confirmaciones y recordatorios</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Enviarle comunicaciones relevantes (solo con su consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">4. Protección de Datos</h2>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
                sus datos personales contra acceso no autorizado, alteración, divulgación o
                destrucción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">5. Sus Derechos (GDPR)</h2>
              <p className="leading-relaxed">
                Bajo el Reglamento General de Protección de Datos (GDPR), usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Portabilidad de datos</li>
              </ul>
              <p className="leading-relaxed">
                Para ejercer estos derechos, contacte con:{' '}
                <a href="mailto:contacto@aurora33.org" className="text-blue-600 hover:text-blue-800 underline">
                  contacto@aurora33.org
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">6. Cookies</h2>
              <p className="leading-relaxed">
                Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas
                (con su consentimiento) para mejorar su experiencia. Puede gestionar sus
                preferencias de cookies en cualquier momento.
              </p>
            </section>

            <section className="space-y-4 mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif text-black mb-4">Contacto</h2>
              <p className="leading-relaxed">
                Si tiene preguntas sobre esta política de privacidad, contacte con nosotros en:
              </p>
              <p className="font-medium space-y-2">
                <div>
                  Email:{' '}
                  <a href="mailto:contacto@aurora33.org" className="text-blue-600 hover:text-blue-800 underline">
                    contacto@aurora33.org
                  </a>
                </div>
                <div>
                  Teléfono:{' '}
                  <a href="https://wa.me/5255743388" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                    +52 55 7453 3388
                  </a>
                </div>
                <div>
                  Dirección: 12 Rue de la Lune, 75002 París, Francia
                </div>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
