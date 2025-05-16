import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ConfigProvider } from "@/contexts/config-context"
import { DynamicStyles } from "@/components/dynamic-styles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Plataforma de Cursos - A&G Capacitación",
  description: "Descubre tus potencialidades a través de nuestra capacitación y consultoría integral y colaborativa.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ConfigProvider>
          <DynamicStyles />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full mx-auto">{children}</main>
            <Footer />
          </div>
        </ConfigProvider>
      </body>
    </html>
  )
}
