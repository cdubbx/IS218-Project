import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import SideBar from './components/Sidebar';
import Script from 'next/script';

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
      <Script
        id="google-tag-manager-script" // Unique ID for the external script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script
        id="google-analytics-inline-script" // Unique ID for the inline script
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
