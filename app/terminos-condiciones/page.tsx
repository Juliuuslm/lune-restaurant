import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de uso del sitio web y servicios de Restaurante Lune.',
}

export const dynamic = 'force-static'

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white p-8 md:p-16 shadow-lg border-t-4 border-gold">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-black">
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 italic">
              Última actualización: Diciembre 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">1. Aceptación de Términos</h2>
              <p className="leading-relaxed">
                Al acceder y utilizar el sitio web de Restaurante Lune, usted acepta estar sujeto a
                estos términos y condiciones. Si no está de acuerdo con alguna parte de estos
                términos, no debe utilizar nuestro sitio web.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">2. Reservas</h2>
              <p className="leading-relaxed">
                Las reservas realizadas a través de nuestro sitio web están sujetas a
                disponibilidad y confirmación por parte del restaurante.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Todas las reservas deben ser confirmadas por email o teléfono antes de
                  considerarse válidas
                </li>
                <li>Nos reservamos el derecho de rechazar o cancelar reservas en casos excepcionales</li>
                <li>
                  Las cancelaciones deben realizarse con al menos 24 horas de antelación
                </li>
                <li>
                  No-shows sin previo aviso pueden resultar en restricciones de reservas futuras
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">
                3. Política de Cancelación
              </h2>
              <p className="leading-relaxed">
                Entendemos que los planes pueden cambiar. Nuestra política de cancelación es:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Cancelación gratuita hasta 24 horas antes de la reserva
                </li>
                <li>
                  Cancelaciones con menos de 24 horas de antelación pueden incurrir en un cargo de
                  €50 por persona
                </li>
                <li>
                  Para grupos de 6+ personas, se requiere confirmación 48 horas antes
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">4. Conducta en el Local</h2>
              <p className="leading-relaxed">
                Esperamos que todos nuestros huéspedes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respeten nuestro dress code: Tenue de Ville (vestimenta elegante)</li>
                <li>Mantengan un comportamiento apropiado y respetuoso</li>
                <li>Respeten el ambiente tranquilo y sofisticado del restaurante</li>
                <li>Nos reservamos el derecho de admisión</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">5. Alergias y Restricciones</h2>
              <p className="leading-relaxed">
                Si tiene alergias alimentarias o restricciones dietéticas, por favor infórmenos al
                momento de la reserva. Haremos todo lo posible por acomodar sus necesidades, pero no
                podemos garantizar un ambiente completamente libre de alérgenos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">
                6. Propiedad Intelectual
              </h2>
              <p className="leading-relaxed">
                Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y diseño,
                es propiedad de Restaurante Lune y está protegido por leyes de propiedad
                intelectual. No puede reproducir, distribuir o modificar ningún contenido sin
                permiso previo por escrito.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">7. Limitación de Responsabilidad</h2>
              <p className="leading-relaxed">
                Restaurante Lune no será responsable de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pérdida o daño de objetos personales en el local</li>
                <li>
                  Errores u omisiones en el sitio web
                </li>
                <li>Interrupciones del servicio por causas fuera de nuestro control</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-black mt-8 mb-4">8. Modificaciones</h2>
              <p className="leading-relaxed">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier
                momento. Los cambios entrarán en vigor inmediatamente tras su publicación en el
                sitio web.
              </p>
            </section>

            <section className="space-y-4 mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif text-black mb-4">Contacto</h2>
              <p className="leading-relaxed">
                Para cualquier pregunta sobre estos términos y condiciones:
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
