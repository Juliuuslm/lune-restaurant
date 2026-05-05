import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Configuración del viewport como export separado (Next.js 14+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://aurora33.org'),
  title: {
    default: 'Restaurante Lune - Experiencia Culinaria Única',
    template: '%s | Restaurante Lune',
  },
  description:
    'Descubre Lune, donde la gastronomía francesa se encuentra con la elegancia minimalista. Experiencia culinaria única en el corazón de París.',
  keywords: [
    'restaurante',
    'gastronomía francesa',
    'fine dining',
    'París',
    'cocina francesa',
    'reservas',
    'haute cuisine',
  ],
  authors: [{ name: 'Restaurante Lune' }],
  creator: 'Restaurante Lune',
  publisher: 'Restaurante Lune',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://aurora33.org',
    siteName: 'Restaurante Lune',
    title: 'Restaurante Lune - Experiencia Culinaria Única',
    description: 'Gastronomía francesa con elegancia minimalista en París',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurante Lune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurante Lune',
    description: 'Experiencia culinaria única en París',
    images: ['/twitter-image.jpg'],
    creator: '@aurora33',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/Favicon/favicon-lune.png',
    shortcut: '/images/Favicon/favicon-lune.png',
    apple: '/images/Favicon/favicon-lune.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Structured Data para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Restaurante Lune',
    image: 'https://aurora33.org/og-image.jpg',
    '@id': 'https://aurora33.org',
    url: 'https://aurora33.org',
    telephone: '+33-1-23-45-67-89',
    priceRange: '€€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12 Rue de la Lune',
      addressLocality: 'París',
      postalCode: '75002',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8698,
      longitude: 2.3499,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '19:00',
        closes: '23:00',
      },
    ],
    servesCuisine: 'French',
    acceptsReservations: 'true',
  }

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream text-black font-sans antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
