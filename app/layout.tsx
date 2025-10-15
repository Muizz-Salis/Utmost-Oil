import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "UtmostOils",
  description: "Buy premium organic palm oil in various sizes. Direct delivery available.",
  generator: "Muizz",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dmahzfixo/image/upload/w_32,h_32,c_fit/v1760528782/Utmost_logo-removebg-preview_mlb7tp.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dmahzfixo/image/upload/w_16,h_16,c_fit/v1760528782/Utmost_logo-removebg-preview_mlb7tp.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "https://res.cloudinary.com/dmahzfixo/image/upload/w_180,h_180,c_fit/v1760528782/Utmost_logo-removebg-preview_mlb7tp.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
