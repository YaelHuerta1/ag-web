import Link from "next/link"
import Image from "next/image"
import { Clock, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = [
  {
    id: 1,
    title: "CONSTRUCCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
    description: "Aprende a crear y gestionar equipos de trabajo con ventajas competitivas y alto rendimiento.",
    instructor: "María de los Angeles Aguiñaga Villaseñor",
    hours: 20,
    image: "/team-building.png",
    category: "Liderazgo",
  },
  {
    id: 2,
    title: "DESARROLLO DE HABILIDADES BLANDAS",
    description:
      "Potencia tus habilidades interpersonales, conceptuales y de proceso para mejorar tu desempeño profesional.",
    instructor: "María de los Angeles Aguiñaga Villaseñor",
    hours: 15,
    image: "/soft-skills.png",
    category: "Desarrollo Personal",
  },
  {
    id: 3,
    title: "DESARROLLO DE HABILIDADES GERENCIALES",
    description:
      "Adquiere las competencias necesarias para liderar equipos y gestionar organizaciones de manera efectiva.",
    instructor: "María de los Angeles Aguiñaga Villaseñor",
    hours: 20,
    image: "/management-skills.png",
    category: "Liderazgo",
  },
  {
    id: 4,
    title: "EL DESARROLLO Y TÉCNICAS DE NEGOCIACIÓN",
    description:
      "Aprende estrategias efectivas para negociar y resolver conflictos en entornos profesionales y personales.",
    instructor: "María de los Angeles Aguiñaga Villaseñor",
    hours: 20,
    image: "/negotiation-skills.png",
    category: "Comunicación",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Nuestros Cursos</h1>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Explora nuestra selección de cursos diseñados para potenciar tu desarrollo humano integral
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Buscar cursos..." className="pl-10" />
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="desarrollo-personal">Desarrollo Personal</SelectItem>
                <SelectItem value="liderazgo">Liderazgo</SelectItem>
                <SelectItem value="comunicacion">Comunicación</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Duración" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las duraciones</SelectItem>
                <SelectItem value="short">Corta (menos de 20h)</SelectItem>
                <SelectItem value="medium">Media (20-30h)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary">
                    {course.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {course.instructor}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.hours} horas
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary-dark">
                  <Link href={`/cursos/${course.id}`}>Ver Detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
