// import { Metadata } from 'next'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({children}){

  // export const metadata: Metadata = {
  //   title: 'Control Creaciones RD'
  // }

  return(
    <html>
    <body>
      <Navbar />
      {children}
    </body>
    </html>
  )
}