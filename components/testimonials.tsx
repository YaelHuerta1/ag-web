import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Esta capacitación transformó mi perspectiva sobre el desarrollo humano. Ahora puedo identificar y potenciar mis capacidades de una manera que nunca imaginé.",
    name: "Laura Martínez",
    role: "Gerente de Recursos Humanos",
    avatar: "/professional-woman-portrait.png",
  },
  {
    id: 2,
    quote:
      "El enfoque integral y colaborativo de estos cursos me permitió descubrir potencialidades que no sabía que tenía. Una experiencia verdaderamente transformadora.",
    name: "Roberto Sánchez",
    role: "Emprendedor",
    avatar: "/professional-man-portrait.png",
  },
  {
    id: 3,
    quote:
      "La metodología utilizada en estos cursos es única. El acompañamiento personalizado y el enfoque en el desarrollo humano integral hacen toda la diferencia.",
    name: "Carmen López",
    role: "Consultora Educativa",
    avatar: "/professional-woman-portrait-2.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Testimonios</h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Descubre cómo nuestros cursos han transformado la vida de nuestros estudiantes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col p-6 bg-gray-50 rounded-lg">
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center mt-auto">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
