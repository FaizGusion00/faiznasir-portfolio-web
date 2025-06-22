import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faiz Nasir',
  description: 'Professional portfolio of Muhammad Faiz Bin Nasir - Full-Stack Web/App Developer, Software Engineer, Graphics Designer, UI/UX Designer, and IT Specialist based in Malaysia.',
  keywords: ['Full-Stack Developer', 'Software Engineer', 'Web Developer', 'App Developer', 'UI/UX Designer', 'Malaysia', 'Portfolio'],
  authors: [{ name: 'Muhammad Faiz Bin Nasir' }],
  creator: 'Muhammad Faiz Bin Nasir',
  publisher: 'Muhammad Faiz Bin Nasir',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://faiznasir.dev'),
  openGraph: {
    title: 'Muhammad Faiz Bin Nasir - Full-Stack Developer',
    description: 'Professional portfolio showcasing expertise in Full-Stack Development, Software Engineering, and UI/UX Design',
    url: 'https://faiznasir.dev',
    siteName: 'Faiz Nasir Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Faiz Bin Nasir - Full-Stack Developer',
    description: 'Professional portfolio showcasing expertise in Full-Stack Development, Software Engineering, and UI/UX Design',
    creator: '@faiznasir',
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
    icon: '/favicon.svg',
    apple: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10" />
          
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden -z-10">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-pink-400 to-red-500 opacity-20 animate-blob animation-delay-4000" />
            <div className="absolute top-40 left-40 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 animate-blob" />
          </div>
          
          {children}
        </div>
      </body>
    </html>
  )
} 