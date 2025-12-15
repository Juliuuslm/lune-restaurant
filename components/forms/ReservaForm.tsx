'use client'

import { useState, type FormEvent } from 'react'
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'

export function ReservaForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '19:00',
    invitados: '2',
    nombre: '',
    telefono: '',
    email: '',
    comentarios: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Mock: Solo mostrar modal de éxito (sin backend real)
    setShowSuccessModal(true)

    // Reset form
    setFormData({
      fecha: '',
      hora: '19:00',
      invitados: '2',
      nombre: '',
      telefono: '',
      email: '',
      comentarios: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Fecha y Hora */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label
              htmlFor="fecha"
              className="text-xs font-bold uppercase tracking-widest text-gray-500"
            >
              Fecha
            </label>
            <div className="relative border-b border-gray-300 pb-2 flex items-center focus-within:border-gold transition-colors">
              <Calendar size={18} className="text-gold mr-3 flex-shrink-0" />
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-serif text-lg text-black"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="hora"
              className="text-xs font-bold uppercase tracking-widest text-gray-500"
            >
              Hora
            </label>
            <div className="relative border-b border-gray-300 pb-2 flex items-center focus-within:border-gold transition-colors">
              <Clock size={18} className="text-gold mr-3 flex-shrink-0" />
              <select
                id="hora"
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                className="w-full outline-none bg-transparent font-serif text-lg text-black cursor-pointer"
                required
              >
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
          </div>
        </div>

        {/* Invitados */}
        <div className="space-y-2">
          <label
            htmlFor="invitados"
            className="text-xs font-bold uppercase tracking-widest text-gray-500"
          >
            Invitados
          </label>
          <div className="relative border-b border-gray-300 pb-2 flex items-center focus-within:border-gold transition-colors">
            <Users size={18} className="text-gold mr-3 flex-shrink-0" />
            <select
              id="invitados"
              name="invitados"
              value={formData.invitados}
              onChange={handleChange}
              className="w-full outline-none bg-transparent font-serif text-lg text-black cursor-pointer"
              required
            >
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
              <option value="4">4 Personas</option>
              <option value="5">5 Personas</option>
              <option value="6">6 Personas</option>
              <option value="7">7 Personas</option>
              <option value="8">8 Personas</option>
            </select>
          </div>
        </div>

        {/* Datos de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="border-b border-gray-300 pb-2 outline-none font-light text-lg placeholder-gray-400 focus:border-gold transition-colors"
            required
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="border-b border-gray-300 pb-2 outline-none font-light text-lg placeholder-gray-400 focus:border-gold transition-colors"
            required
          />
        </div>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-300 pb-2 outline-none font-light text-lg placeholder-gray-400 focus:border-gold transition-colors"
          required
        />

        {/* Comentarios */}
        <textarea
          id="comentarios"
          name="comentarios"
          placeholder="Solicitudes especiales (opcional)..."
          value={formData.comentarios}
          onChange={handleChange}
          className="w-full border-b border-gray-300 pb-2 outline-none font-light text-lg placeholder-gray-400 focus:border-gold transition-colors h-24 resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-300 mt-8"
        >
          Confirmar Solicitud
        </button>
      </form>

      {/* Success Modal */}
      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} title="¡Merci!">
        <div className="text-center space-y-6">
          <CheckCircle size={64} className="mx-auto text-gold" strokeWidth={1} />
          <p className="text-gray-600 font-light text-lg">
            Hemos recibido su solicitud de reserva. Nuestro equipo de concierge le contactará en
            breve para confirmar la disponibilidad.
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full py-4 bg-black text-white uppercase tracking-widest text-sm hover:bg-gold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  )
}
