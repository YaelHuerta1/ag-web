"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-primary">A&G Capacitación</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Inicio
          </Link>
          <Link href="/cursos" className="text-sm font-medium hover:text-primary">
            Cursos
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:text-primary">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-primary">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden md:flex">
                <User className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Iniciar Sesión</DialogTitle>
                <DialogDescription>Ingresa tus credenciales para acceder a tu cuenta</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Ingresar
                </Button>
                <div className="text-center text-sm">
                  ¿No tienes cuenta?{" "}
                  <Link href="/registro" className="text-primary hover:underline">
                    Regístrate
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-primary">
                  Inicio
                </Link>
                <Link href="/cursos" className="text-lg font-medium hover:text-primary">
                  Cursos
                </Link>
                <Link href="/nosotros" className="text-lg font-medium hover:text-primary">
                  Nosotros
                </Link>
                <Link href="/contacto" className="text-lg font-medium hover:text-primary">
                  Contacto
                </Link>
                <Button onClick={() => setIsLoginOpen(true)} className="mt-4">
                  <User className="mr-2 h-4 w-4" />
                  Iniciar Sesión
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
