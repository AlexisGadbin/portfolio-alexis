import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Alexis Gadbin',
  description: 'Portfolio Alexis Gadbin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
