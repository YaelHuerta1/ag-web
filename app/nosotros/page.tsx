import Image from "next/image"
import { CheckCircle, Award, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Sobre Nosotros</h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Contribuimos en la búsqueda constante de la esencia del desarrollo humano
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">Nuestra Misión</h2>
              <p className="text-gray-600 mb-6">
                Contribuir en la búsqueda constante de la esencia del desarrollo humano, a través de capacitación y
                consultoría integral y colaborativa que ayude a las personas a descubrir sus potencialidades.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-primary">Nuestra Visión</h2>
              <p className="text-gray-600 mb-6">
                Ser reconocidos como una organización líder en el desarrollo humano integral, que transforma vidas y
                organizaciones a través de metodologías innovadoras y un enfoque centrado en la persona.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-primary">Nuestros Valores</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <span>
                    <strong>Integridad:</strong> Actuamos con honestidad y coherencia en todo lo que hacemos.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <span>
                    <strong>Colaboración:</strong> Creemos en el poder del trabajo conjunto para lograr resultados
                    extraordinarios.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <span>
                    <strong>Respeto:</strong> Valoramos la dignidad y unicidad de cada persona.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <span>
                    <strong>Excelencia:</strong> Buscamos la mejora continua en todos nuestros procesos y servicios.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder-fc5e1.png" alt="Nuestro equipo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Lo Que Nos Hace Diferentes</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Nuestra propuesta de valor es atípica debido a su enfoque integral y colaborativo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enfoque Integral</h3>
              <p className="text-gray-600">
                Abordamos todas las dimensiones del ser humano: física, emocional, mental y espiritual, para un
                desarrollo verdaderamente completo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-secondary/10 rounded-full w-fit mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Metodología Colaborativa</h3>
              <p className="text-gray-600">
                Creemos en la co-creación del conocimiento, donde facilitadores y participantes construyen juntos el
                aprendizaje.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Descubrimiento de Potencialidades</h3>
              <p className="text-gray-600">
                Nos enfocamos en ayudar a las personas a reconocer y desarrollar sus capacidades únicas, más allá de la
                simple adquisición de conocimientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Nuestro Equipo</h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Profesionales comprometidos con el desarrollo humano integral
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mb-4">
                <Image src="/professional-woman-portrait.png" alt="Dra. María Rodríguez" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Dra. María Rodríguez</h3>
              <p className="text-primary mb-2">Directora General</p>
              <p className="text-gray-600">
                Doctora en Psicología con especialidad en Desarrollo Humano. Más de 15 años de experiencia en
                capacitación y consultoría.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mb-4">
                <Image src="/professional-man-portrait.png" alt="Dr. Carlos Méndez" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Dr. Carlos Méndez</h3>
              <p className="text-primary mb-2">Director de Capacitación</p>
              <p className="text-gray-600">
                Doctor en Educación con enfoque en metodologías innovadoras. Experto en liderazgo y desarrollo
                organizacional.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mb-4">
                <Image src="/professional-woman-portrait-2.png" alt="Lic. Ana Gómez" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Lic. Ana Gómez</h3>
              <p className="text-primary mb-2">Coordinadora de Consultoría</p>
              <p className="text-gray-600">
                Licenciada en Psicología con maestría en Desarrollo Humano. Especialista en inteligencia emocional y
                coaching.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
