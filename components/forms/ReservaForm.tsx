'use client'

import { useState, type FormEvent } from 'react'
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'

export function ReservaForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '19:00',
    invitados: '2',
    nombre: '',
    telefono: '',
    email: '',
    comentarios: '',
  })

  // Obtener fecha mínima (hoy)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Obtener fecha máxima (3 meses desde hoy)
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    return maxDate.toISOString().split('T')[0]
  }

  // Validar email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Validar teléfono (mínimo 9 dígitos)
  const isValidPhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '')
    return cleanPhone.length >= 9
  }

  // Validar formulario
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fecha) {
      newErrors.fecha = 'Por favor selecciona una fecha'
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    if (!formData.email) {
      newErrors.email = 'El email es requerido'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido'
    }

    if (!formData.telefono) {
      newErrors.telefono = 'El teléfono es requerido'
    } else if (!isValidPhone(formData.telefono)) {
      newErrors.telefono = 'Por favor ingresa un teléfono válido (mínimo 9 dígitos)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simular envío del formulario
    setTimeout(() => {
      setShowSuccessModal(true)
      setIsLoading(false)
      setErrors({})

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
    }, 800)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    // Limpiar error del campo cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
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
            <div className={`relative border-b pb-2 flex items-center transition-colors ${
              errors.fecha ? 'border-red-400' : 'border-gray-300 focus-within:border-gold'
            }`}>
              <Calendar size={18} className={`mr-3 flex-shrink-0 ${errors.fecha ? 'text-red-400' : 'text-gold'}`} />
              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                min={getMinDate()}
                max={getMaxDate()}
                className="w-full py-3 px-2 outline-none bg-transparent font-serif text-lg text-black"
                required
              />
            </div>
            {errors.fecha && (
              <div className="flex items-center gap-1 text-red-400 text-xs">
                <AlertCircle size={14} />
                {errors.fecha}
              </div>
            )}
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
                className="w-full py-3 px-2 outline-none bg-transparent font-serif text-lg text-black cursor-pointer"
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
              className="w-full py-3 px-2 outline-none bg-transparent font-serif text-lg text-black cursor-pointer"
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
          <div className="space-y-2">
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full py-3 px-2 border-b pb-2 outline-none font-light text-lg placeholder-gray-400 transition-colors ${
                errors.nombre ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-gold'
              }`}
              required
            />
            {errors.nombre && (
              <div className="flex items-center gap-1 text-red-400 text-xs">
                <AlertCircle size={14} />
                {errors.nombre}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-full py-3 px-2 border-b pb-2 outline-none font-light text-lg placeholder-gray-400 transition-colors ${
                errors.telefono ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-gold'
              }`}
              required
            />
            {errors.telefono && (
              <div className="flex items-center gap-1 text-red-400 text-xs">
                <AlertCircle size={14} />
                {errors.telefono}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-2 border-b pb-2 outline-none font-light text-lg placeholder-gray-400 transition-colors ${
              errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-300 focus:border-gold'
            }`}
            required
          />
          {errors.email && (
            <div className="flex items-center gap-1 text-red-400 text-xs">
              <AlertCircle size={14} />
              {errors.email}
            </div>
          )}
        </div>

        {/* Comentarios */}
        <div className="space-y-2">
          <textarea
            id="comentarios"
            name="comentarios"
            placeholder="Solicitudes especiales (opcional)..."
            value={formData.comentarios}
            onChange={handleChange}
            maxLength={500}
            className="w-full py-3 px-2 border-b border-gray-300 pb-2 outline-none font-light text-lg placeholder-gray-400 focus:border-gold transition-colors h-24 resize-none"
          />
          <div className="text-right text-xs text-gray-400">
            {formData.comentarios.length}/500
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 uppercase tracking-widest text-sm transition-all duration-300 mt-8 ${
            isLoading
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-black text-white hover:bg-gold active:scale-95'
          }`}
        >
          {isLoading ? 'Procesando...' : 'Confirmar Solicitud'}
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
