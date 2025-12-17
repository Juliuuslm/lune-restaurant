'use client'

import Image from 'next/image'
import { RevealText } from '@/components/animations/RevealText'
import { ReactNode } from 'react'

interface PageHeroProps {
  image: string
  title: string
  subtitle?: string
  height?: 'standard' | 'tall' | 'full'
  overlay?: 'light' | 'medium' | 'dark'
  children?: ReactNode
  additionalPadding?: boolean
}

export function PageHero({
  image,
  title,
  subtitle,
  height = 'standard',
  overlay = 'medium',
  children,
  additionalPadding = false,
}: PageHeroProps) {
  const heights = {
    standard: 'h-[50vh] md:h-[65vh] lg:h-[80vh]',
    tall: 'h-[60vh] md:h-[75vh] lg:h-[90vh]',
    full: 'h-[60vh] md:h-[80vh] lg:h-screen',
  }

  const overlays = {
    light: 'bg-black/40',
    medium: 'bg-black/65',
    dark: 'bg-black/80',
  }

  const paddingClass = additionalPadding ? 'pt-20 md:pt-24' : 'pt-8 sm:pt-12 md:pt-0'

  return (
    <header
      className={`relative ${heights[height]} w-full flex flex-col justify-center items-center overflow-hidden ${paddingClass}`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover -z-10"
        priority
        quality={85}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 z-0 ${overlays[overlay]}`} />

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-3xl">
        {subtitle && (
          <RevealText delay={0}>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6 md:mb-8">
              {subtitle}
            </p>
          </RevealText>
        )}

        <RevealText delay={subtitle ? 0.2 : 0}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white italic">
            {title}
          </h1>
        </RevealText>

        {children}
      </div>
    </header>
  )
}
