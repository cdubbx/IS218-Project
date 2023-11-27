
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import SideBar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revolve',
  description: 'Ecommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>


    //  <Box>

    //    <Navbar />
    //    <SideBar />
    //  </Box>
  )


}
