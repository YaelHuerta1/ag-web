import Link from "next/link"
import Image from "next/image"
import { Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Cursos Destacados</h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Explora nuestra selección de cursos diseñados para potenciar tu desarrollo humano
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/cursos">Ver Todos los Cursos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
