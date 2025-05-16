import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar, CheckCircle } from "lucide-react"

interface Module {
  id: string
  title: string
  description: string
  lessons: { id: string; content: string }[]
}

interface Benefit {
  id: string
  content: string
}

interface CourseFormData {
  title: string
  shortDescription: string
  longDescription: string
  category: string
  hours: string
  price: string
  startDate: string
  instructor: {
    name: string
    bio: string
  }
  modules: Module[]
  benefits: Benefit[]
  image: string
}

interface CoursePreviewProps {
  course: CourseFormData
}

export default function CoursePreview({ course }: CoursePreviewProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Vista Previa del Curso</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <h1 className="text-3xl font-bold text-primary mr-2">{course.title || "Título del Curso"}</h1>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary">
                    {course.category || "Categoría"}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {course.instructor.name || "Nombre del Instructor"}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.hours || "0"} horas
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Inicia: {course.startDate || "Fecha por definir"}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {course.longDescription || course.shortDescription || "Descripción del curso..."}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-4">Contenido del Curso</h3>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <div key={module.id} className="border-b pb-4 last:border-0">
                      <h4 className="font-bold mb-2">{module.title || `Módulo ${index + 1}`}</h4>
                      <p className="text-gray-600 mb-2">{module.description || "Descripción del módulo..."}</p>
                      <ul className="space-y-1">
                        {module.lessons.map((lesson, i) => (
                          <li key={lesson.id} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary mt-1" />
                            <span>{lesson.content || `Lección ${i + 1}`}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Detalles del Curso</h3>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-primary">
                    ${course.price || "0"} <span className="text-sm font-normal">MXN</span>
                  </span>
                  <Badge variant="outline" className="bg-primary/10 text-primary">
                    Cupo Limitado
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold">Beneficios:</h4>
                  {course.benefits.map((benefit) => (
                    <div key={benefit.id} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                      <span>{benefit.content || "Beneficio del curso"}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Instructor:</h4>
                  <div className="flex flex-col">
                    <span className="font-medium">{course.instructor.name || "Nombre del Instructor"}</span>
                    <p className="text-sm text-gray-600">{course.instructor.bio || "Biografía del instructor..."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
