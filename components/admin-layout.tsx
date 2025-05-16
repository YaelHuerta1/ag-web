"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { BookOpen, Users, Settings, LayoutDashboard, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar para escritorio */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-white border-r">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
            <span className="font-bold">A&G Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto py-4 px-2">
          <div className="space-y-1">
            <NavItem
              href="/admin/dashboard"
              icon={<LayoutDashboard className="h-4 w-4" />}
              active={pathname === "/admin/dashboard"}
            >
              Dashboard
            </NavItem>
            <NavItem
              href="/admin/cursos/nuevo"
              icon={<BookOpen className="h-4 w-4" />}
              active={pathname.includes("/admin/cursos")}
            >
              Cursos
            </NavItem>
            <NavItem
              href="/admin/instructores"
              icon={<Users className="h-4 w-4" />}
              active={pathname.includes("/admin/instructores")}
            >
              Instructores
            </NavItem>
            <NavItem
              href="/admin/configuracion"
              icon={<Settings className="h-4 w-4" />}
              active={pathname.includes("/admin/configuracion")}
            >
              Configuración
            </NavItem>
          </div>
        </nav>
      </aside>

      {/* Sidebar móvil */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-40">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Logo" width={30} height={30} />
              <span className="font-bold">A&G Admin</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4 px-2">
            <div className="space-y-1">
              <NavItem
                href="/admin/dashboard"
                icon={<LayoutDashboard className="h-4 w-4" />}
                active={pathname === "/admin/dashboard"}
              >
                Dashboard
              </NavItem>
              <NavItem
                href="/admin/cursos/nuevo"
                icon={<BookOpen className="h-4 w-4" />}
                active={pathname.includes("/admin/cursos")}
              >
                Cursos
              </NavItem>
              <NavItem
                href="/admin/instructores"
                icon={<Users className="h-4 w-4" />}
                active={pathname.includes("/admin/instructores")}
              >
                Instructores
              </NavItem>
              <NavItem
                href="/admin/configuracion"
                icon={<Settings className="h-4 w-4" />}
                active={pathname.includes("/admin/configuracion")}
              >
                Configuración
              </NavItem>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Contenido principal */}
      <main className="md:pl-64 flex-1">
        <div className="container py-6 md:py-8 px-4 md:px-6 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  active: boolean
  children: React.ReactNode
}

function NavItem({ href, icon, active, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
        active ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {children}
    </Link>
  )
}
