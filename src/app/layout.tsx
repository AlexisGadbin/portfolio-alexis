import type { Metadata } from 'next'
import { Calistoga, Poppins } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Alexis Gadbin',
  description: 'Portfolio Alexis Gadbin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={twMerge(poppins.variable, calistoga.variable, 'font-sans antialiased')}>
        {children}
      </body>
    </html>
  )
}
