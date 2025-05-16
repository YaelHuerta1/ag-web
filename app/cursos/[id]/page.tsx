import Image from "next/image"
import Link from "next/link"
import { Clock, User, Calendar, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Actualizado para mantener solo los cursos proporcionados por el usuario

const courses = [
  {
    id: 1,
    title: "CONSTRUCCIÓN DE EQUIPOS DE ALTO RENDIMIENTO",
    description: "Aprende a crear y gestionar equipos de trabajo con ventajas competitivas y alto rendimiento.",
    longDescription:
      "Este curso te proporcionará las herramientas y metodologías necesarias para construir equipos de trabajo altamente efectivos. Aprenderás a crear una cultura de trabajo con ventajas competitivas, identificar las características de los equipos de alto rendimiento y establecer sistemas de trabajo que maximicen el potencial de cada miembro del equipo. A través de ejercicios prácticos y casos de estudio, podrás aplicar lo aprendido directamente en tu entorno laboral.",
    instructor: {
      name: "María de los Angeles Aguiñaga Villaseñor",
      bio: "Especialista en desarrollo organizacional y gestión de equipos de alto rendimiento. Cuenta con amplia experiencia en consultoría para empresas nacionales e internacionales, ayudándoles a transformar sus equipos de trabajo y mejorar su productividad.",
      image: "/professional-woman-consultant.png",
    },
    hours: 20,
    image: "/team-building.png",
    category: "Liderazgo",
    price: 2800,
    startDate: "10 de julio, 2025",
    modules: [
      {
        title: "1. Creación de cultura de trabajo con ventajas competitivas",
        description: "Fundamentos para establecer una cultura de trabajo efectiva y competitiva.",
        lessons: [
          "1.1. El rediseño del trabajo para crear una cultura del trabajo",
          "1.1.1 Identificación de los recursos que enriquecen el trabajo",
          "1.1.2. Ponderación de los recursos que enriquecen el trabajo",
        ],
      },
      {
        title: "2. Característica de una cultura de trabajo de alto rendimiento",
        description: "Elementos clave que definen a los equipos de alto rendimiento.",
        lessons: [
          "2.1. Alineamiento en el rendimiento",
          "2.2. Alineamiento psicológico",
          "2.3. Capacidad para aprender",
        ],
      },
      {
        title: "3. El enriquecimiento del trabajo",
        description: "Estrategias para potenciar y enriquecer las funciones laborales.",
        lessons: ["3.1. Metodología y caso práctico con Dinámica grupal", "El sistema de campeonatos"],
      },
      {
        title: "4. El establecimiento de un sistema de trabajo de alto rendimiento",
        description: "Implementación de sistemas que fomenten el alto desempeño.",
        lessons: ["4.1. Funciones esenciales para diseñar un sistema de trabajo de alto rendimiento"],
      },
      {
        title: "5. Ejercicio de práctica",
        description: "Aplicación práctica de los conocimientos adquiridos.",
        lessons: ["Elaboración de estrategia personalizada"],
      },
    ],
    benefits: [
      "Capacidad para crear equipos de trabajo altamente efectivos",
      "Herramientas para establecer una cultura de alto rendimiento",
      "Metodologías para el enriquecimiento del trabajo",
      "Estrategias personalizadas para tu entorno laboral",
      "Certificado de participación",
    ],
  },
  {
    id: 2,
    title: "DESARROLLO DE HABILIDADES BLANDAS",
    description:
      "Potencia tus habilidades interpersonales, conceptuales y de proceso para mejorar tu desempeño profesional.",
    longDescription:
      "Este curso está diseñado para desarrollar las competencias no técnicas que son fundamentales para el éxito profesional en cualquier campo. A través de un enfoque práctico, aprenderás a fortalecer tu inteligencia afectiva, desarrollar habilidades conceptuales e interpersonales, y dominar habilidades de proceso esenciales para la resolución de problemas y la toma de decisiones. El programa combina teoría con ejercicios prácticos que te permitirán aplicar lo aprendido de manera inmediata en tu entorno laboral.",
    instructor: {
      name: "María de los Angeles Aguiñaga Villaseñor",
      bio: "Especialista en desarrollo de talento humano con amplia experiencia en capacitación y consultoría. Ha colaborado con diversas organizaciones implementando programas de desarrollo de habilidades blandas que han transformado la cultura organizacional y mejorado el desempeño de los equipos.",
      image: "/professional-woman-consultant.png",
    },
    hours: 15,
    image: "/soft-skills.png",
    category: "Desarrollo Personal",
    price: 2200,
    startDate: "5 de agosto, 2025",
    modules: [
      {
        title: "1. Inteligencia Afectiva",
        description: "Desarrollo de la autoconciencia emocional y su aplicación en el entorno profesional.",
        lessons: ["1.1. El autoconocimiento para lograr motivación"],
      },
      {
        title: "2. Habilidades Conceptuales",
        description: "Fortalecimiento del pensamiento estratégico y sistémico.",
        lessons: ["2.1. Desarrollo de pensamiento sistémico", "2.2. Construcción de una cultura de desarrollo"],
      },
      {
        title: "3. Habilidades Interpersonales",
        description: "Mejora de las relaciones profesionales y la comunicación efectiva.",
        lessons: [
          "3.1. Comunicación para generar confianza personal y profesional",
          "3.2. Organización y productividad",
          "3.3. Pensamiento crítico",
        ],
      },
      {
        title: "4. Habilidades de Proceso",
        description: "Desarrollo de competencias para la resolución de problemas y toma de decisiones.",
        lessons: [
          "4.1. Diagnóstico y visión",
          "4.2. Proceso de solución de conflictos/habilidad maestra",
          "4.3. Toma de decisiones y consenso",
          "4.3. Resistencia al cambio y creatividad",
          "4.4. Negociación",
          "4.5. Trabajo en equipo",
          "4.6. Gestión del tiempo y manejo de estrés",
        ],
      },
      {
        title: "5. Ejercicio de Práctica",
        description: "Aplicación práctica de los conocimientos adquiridos.",
        lessons: ["Elaboración de estrategia personalizada"],
      },
    ],
    benefits: [
      "Mejora de la comunicación interpersonal",
      "Desarrollo de habilidades para la resolución de conflictos",
      "Fortalecimiento del trabajo en equipo",
      "Técnicas efectivas para la gestión del tiempo y el estrés",
      "Estrategias personalizadas para tu desarrollo profesional",
      "Certificado de participación",
    ],
  },
  {
    id: 3,
    title: "DESARROLLO DE HABILIDADES GERENCIALES",
    description:
      "Adquiere las competencias necesarias para liderar equipos y gestionar organizaciones de manera efectiva.",
    longDescription:
      "Este curso está diseñado para desarrollar las habilidades esenciales que todo gerente o líder necesita para gestionar equipos y organizaciones de manera efectiva. A través de un enfoque práctico y orientado a resultados, aprenderás a identificar y fortalecer tus habilidades conceptuales, interpersonales y de proceso, fundamentales para el éxito en roles de liderazgo. El programa combina teoría con ejercicios prácticos que te permitirán aplicar lo aprendido de manera inmediata en tu entorno laboral.",
    instructor: {
      name: "María de los Angeles Aguiñaga Villaseñor",
      bio: "Especialista en desarrollo gerencial y liderazgo organizacional. Cuenta con amplia experiencia en consultoría para empresas nacionales e internacionales, ayudando a líderes y gerentes a potenciar sus habilidades y mejorar el desempeño de sus equipos.",
      image: "/professional-woman-consultant.png",
    },
    hours: 20,
    image: "/management-skills.png",
    category: "Liderazgo",
    price: 3000,
    startDate: "20 de septiembre, 2025",
    modules: [
      {
        title: "1. Diagnóstico e Identificación de Habilidades Conceptuales",
        description: "Evaluación y desarrollo del pensamiento estratégico y sistémico.",
        lessons: [
          "1.1. Diagnóstico de necesidades",
          "1.1.1. Situación actual de la organización",
          "1.2. El pensamiento sistémico",
          "1.3. Los planos de análisis",
        ],
      },
      {
        title: "2. Identificación de Habilidades Interpersonales",
        description: "Desarrollo de competencias para la gestión efectiva de relaciones profesionales.",
        lessons: ["2.1. La confianza personal y profesional", "2.2. El optimismo y la proactividad"],
      },
      {
        title: "3. Habilidades de Trabajo con el Sistema de Estudio",
        description: "Aplicación de metodologías para el análisis y mejora de sistemas organizacionales.",
        lessons: ["3.1. El proceso esencial del sistema"],
      },
      {
        title: "4. Habilidades de Proceso",
        description: "Desarrollo de competencias para la resolución de problemas y toma de decisiones gerenciales.",
        lessons: [
          "4.1. Proceso de Solución de problemas / Habilidad maestra",
          "4.2. Toma de decisiones y solución de problemas",
          "4.3. Consenso",
          "4.4. Negociación",
          "4.5. Trabajo en equipo",
          "4.6. Resistencia al cambio",
          "4.7. Gestión del tiempo",
          "4.8. El arte de las presentaciones efectivas",
        ],
      },
      {
        title: "5. Ejercicio de Práctica",
        description: "Aplicación práctica de los conocimientos adquiridos.",
        lessons: ["Elaboración de estrategia personalizada"],
      },
    ],
    benefits: [
      "Desarrollo de habilidades de liderazgo efectivo",
      "Mejora en la toma de decisiones estratégicas",
      "Técnicas para la resolución de problemas complejos",
      "Estrategias para la gestión del cambio organizacional",
      "Herramientas para presentaciones de alto impacto",
      "Plan personalizado de desarrollo gerencial",
      "Certificado de participación",
    ],
  },
  {
    id: 4,
    title: "EL DESARROLLO Y TÉCNICAS DE NEGOCIACIÓN",
    description:
      "Aprende estrategias efectivas para negociar y resolver conflictos en entornos profesionales y personales.",
    longDescription:
      "Este curso te proporcionará las herramientas y técnicas necesarias para desarrollar habilidades de negociación efectivas que te permitirán alcanzar acuerdos beneficiosos en cualquier contexto. Aprenderás a identificar y gestionar diferentes tipos de conflictos, prepararte adecuadamente para procesos de negociación, y aplicar estrategias colaborativas que generen valor para todas las partes involucradas. A través de ejercicios prácticos y simulaciones, podrás aplicar lo aprendido en situaciones reales de negociación.",
    instructor: {
      name: "María de los Angeles Aguiñaga Villaseñor",
      bio: "Especialista en técnicas de negociación y resolución de conflictos con amplia experiencia en consultoría para empresas nacionales e internacionales. Ha facilitado numerosos procesos de negociación complejos y capacitado a profesionales de diversos sectores en el arte de la negociación efectiva.",
      image: "/professional-woman-consultant.png",
    },
    hours: 20,
    image: "/negotiation-skills.png",
    category: "Comunicación",
    price: 2700,
    startDate: "15 de octubre, 2025",
    modules: [
      {
        title: "1. La negociación",
        description: "Fundamentos y principios básicos de la negociación efectiva.",
        lessons: ["1.1. La necesidad de negociar", "1.2. Por qué negociar mejor"],
      },
      {
        title: "2. Los conflictos",
        description: "Comprensión y gestión de diferentes tipos de conflictos.",
        lessons: ["2.1. Qué es un conflicto", "2.2. Tipos de conflictos"],
      },
      {
        title: "3. Preparación para la negociación",
        description: "Estrategias y factores clave para prepararse adecuadamente antes de negociar.",
        lessons: [
          "3.1. Las necesidades y los factores para preparar la negociación",
          "3.2. Opciones de solución",
          "3.3. La contraparte",
          "3.4. Los factores, intereses y posiciones",
        ],
      },
      {
        title: "4. El proceso de la negociación",
        description: "Etapas y técnicas para conducir una negociación exitosa.",
        lessons: ["4.1. Manejo de objeciones", "4.2. El acuerdo y tácticas eficaces"],
      },
      {
        title: "5. Negociación colaborativa",
        description: "Enfoque centrado en la creación de valor y beneficio mutuo.",
        lessons: ["5.1. A negociar", "5.2. Plan de acción"],
      },
    ],
    benefits: [
      "Desarrollo de habilidades para negociar con confianza y efectividad",
      "Técnicas para identificar y gestionar diferentes tipos de conflictos",
      "Estrategias para preparar adecuadamente cualquier proceso de negociación",
      "Herramientas para manejar objeciones y alcanzar acuerdos beneficiosos",
      "Metodología para implementar un enfoque colaborativo en las negociaciones",
      "Plan de acción personalizado para aplicar lo aprendido",
      "Certificado de participación",
    ],
  },
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const courseId = Number.parseInt(params.id)
  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Curso no encontrado</h1>
        <p className="mb-6">Lo sentimos, el curso que buscas no está disponible.</p>
        <Button asChild>
          <Link href="/cursos">Ver todos los cursos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-[300px] md:h-[400px] w-full mb-6 rounded-lg overflow-hidden">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            </div>
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <h1 className="text-3xl font-bold text-primary mr-2">{course.title}</h1>
                <Badge variant="outline" className="bg-secondary/10 text-secondary">
                  {course.category}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {course.instructor.name}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.hours} horas
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Inicia: {course.startDate}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{course.longDescription}</p>
            </div>

            <Tabs defaultValue="contenido">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contenido">Contenido</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
              </TabsList>
              <TabsContent value="contenido" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-bold mb-4">Contenido del Curso</h3>
                <div className="space-y-6">
                  {course.modules.map((module, index) => (
                    <div key={index} className="border-b pb-4 last:border-0">
                      <h4 className="font-bold mb-2">{module.title}</h4>
                      <p className="text-gray-600 mb-2">{module.description}</p>
                      <ul className="space-y-1">
                        {module.lessons.map((lesson, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary mt-1" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="instructor" className="p-4 border rounded-md mt-2">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={course.instructor.image || "/placeholder.svg"}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{course.instructor.name}</h3>
                    <p className="text-gray-600">{course.instructor.bio}</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="beneficios" className="p-4 border rounded-md mt-2">
                <h3 className="text-xl font-bold mb-4">Beneficios del Curso</h3>
                <ul className="space-y-3">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-primary mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Inscríbete Ahora</h3>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-primary">${course.price} MXN</span>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Cupo Limitado
                </Badge>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  <span>Acceso completo al curso</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  <span>Material didáctico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  <span>Certificado de participación</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                  <span>Asesoría personalizada</span>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-dark mb-4">Inscribirme</Button>
              <Button variant="outline" className="w-full">
                Solicitar más información
              </Button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                ¿Tienes preguntas? Contáctanos al <br />
                <span className="font-semibold">info@agcapacitacion.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
