"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, BookOpen, Users, LogOut } from "lucide-react"
import AdminLayout from "@/components/admin-layout"

export default function AdminDashboard() {
  const router = useRouter()
  const [courseCount, setCourseCount] = useState(4)
  const [instructorCount, setInstructorCount] = useState(1)

  // Simulación de carga de datos
  useEffect(() => {
    // En un entorno real, aquí cargaríamos datos desde una API
  }, [])

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <Button variant="outline" onClick={() => router.push("/admin")}>
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{courseCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total de Instructores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{instructorCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Inscripciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Cursos</CardTitle>
              <CardDescription>Administra los cursos de la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Agrega, edita o elimina cursos. Gestiona el contenido, precios y disponibilidad.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/admin/cursos/nuevo">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Agregar Nuevo Curso
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Instructores</CardTitle>
              <CardDescription>Administra los instructores de la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Agrega, edita o elimina instructores. Gestiona sus perfiles y asignación a cursos.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/admin/instructores">
                  <Users className="mr-2 h-4 w-4" />
                  Gestionar Instructores
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cursos Recientes</CardTitle>
              <CardDescription>Últimos cursos agregados a la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="font-medium">CONSTRUCCIÓN DE EQUIPOS DE ALTO RENDIMIENTO</p>
                      <p className="text-sm text-muted-foreground">María de los Angeles Aguiñaga Villaseñor</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="font-medium">DESARROLLO DE HABILIDADES BLANDAS</p>
                      <p className="text-sm text-muted-foreground">María de los Angeles Aguiñaga Villaseñor</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="font-medium">DESARROLLO DE HABILIDADES GERENCIALES</p>
                      <p className="text-sm text-muted-foreground">María de los Angeles Aguiñaga Villaseñor</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <p className="font-medium">EL DESARROLLO Y TÉCNICAS DE NEGOCIACIÓN</p>
                      <p className="text-sm text-muted-foreground">María de los Angeles Aguiñaga Villaseñor</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
