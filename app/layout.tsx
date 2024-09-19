import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import Script from "next/script";
const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body 
      className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}
    >
      {children}
    </body>
  </html>
  );
}
