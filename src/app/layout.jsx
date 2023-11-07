import { Metadata } from 'next'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({children}){
  
  return(
    <html>
    <body>
      <Navbar />
      {children}
    </body>
    </html>
  )
}